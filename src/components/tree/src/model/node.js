let nodeIdSeed = 0;
import { markNodeData, objectAssign } from './utils';

const getPropertyFromData = function(node, prop) {
  const props = node.store.props;
  const data = node.data || {};
  const config = props[prop];

  if (typeof config === 'function') {
    return config(data, node);
  } else if (typeof config === 'string') {
    return data[config];
  } else if (typeof config === 'undefined') {
    const dataProp = data[prop];
    return dataProp === undefined ? '' : dataProp;
  }
}

export const getChildState = node => {
  let all = true;
  let none = true;
  let allWithoutDisable = true;
  for (let i = 0, j = node.length; i < j; i++) {
    const n = node[i];
    if (n.checked !== true || n.indeterminate) {
      all = false;
      if (!n.disabled) {
        allWithoutDisable = false;
      }
    }
    if (n.checked !== false || n.indeterminate) {
      none = false;
    }
  }

  return { all, none, allWithoutDisable, half: !all && !none };
};

const reInitChecked = function(node) {
  if (node.childNodes.length === 0) return;

  const {all, none, half} = getChildState(node.childNodes);
  if (all) {
    node.checked = true;
    node.indeterminate = false;
  } else if (half) {
    node.checked = false;
    node.indeterminate = true;
  } else if (none) {
    node.checked = false;
    node.indeterminate = false;
  }

  const parent = node.parent;
  if (!parent || parent.level === 0) return;

  if (!node.store.checkStrictly) {
    reInitChecked(parent);
  }
};
export default class Node {
    constructor(options) {
        this.id = nodeIdSeed++;
        this.childNodes = this.data;
        this.expanded = false;
        this.checked = false;
        this.indeterminate = false;


        for (let name in options) {
            if (options.hasOwnProperty(name)) {
              this[name] = options[name];
            }
          }


        // 第几层节点
        this.level = 0;
        this.loaded = false;
        this.childNodes = [];
        if (this.parent) {
            this.level = this.parent.level + 1;
        }
        // 根节点 this对象
        const store = this.store;

        store.registerNode(this);
        const props = store.props;
        if (props && typeof props.isLeaf !== 'undefined') {
          const isLeaf = getPropertyFromData(this, 'isLeaf');
          if (typeof isLeaf === 'boolean') {
            this.isLeafByUser = isLeaf;
          }
        }

        if (this.data) {
          this.setData(this.data);
          // 是否默认展开
          if (store.defaultExpandAll) {
            this.expanded = true;
          }
        } else if (this.level > 0 && store.defaultExpandAll) {
          this.expand();
        }

        const defaultExpandedKeys = store.defaultExpandedKeys;
        const key = store.key;
        if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
          this.expand(null, store.autoExpandParent);
        }
        
        if (store.lazy) {
          store._initDefaultCheckedNode(this);
        }
    
        this.updateLeafState();
    }

    setData(data){
      if(!Array.isArray(data)) {
        markNodeData(data);
      }

      this.data = data;
      this.childNodes = [];
      let children;
      if (this.level === 0 && this.data instanceof Array) {
        children = this.data;
      } else {
        children = getPropertyFromData(this, 'children') || [];
      }

      for (var i =0, j= children.length; i< j; i++){
        this.insertChild({
          data: children[i]
        });
      }
    }
    get disabled() {
      return getPropertyFromData(this, 'disabled');
    }
    get label() {
      return getPropertyFromData(this, 'label', );
    }
    get key() {
      const nodeKey = this.store.key;
      if (this.data) return this.data[nodeKey];
      return null;
    }
    insertChild(child, index,batch) {
      // child不是node的实例

      if (!(child instanceof Node)) {
        if (!batch) {
          const children = this.getChildren(true);
          if (children.indexOf(child.data) === -1) {
            if (typeof index === 'undefined' || index < 0) {
              children.push(child.data);
            } else {
              children.splice(index, 0, child.data);
            }
          }
        }
        objectAssign(child, {
          parent: this,
          store: this.store
        });
        child = new Node(child);
      }
  
      child.level = this.level + 1;
  
      if (typeof index === 'undefined' || index < 0) {
        this.childNodes.push(child);
      } else {
        this.childNodes.splice(index, 0, child);
      }
    }
    getChildren(forceInit = false) { // this is data
      if (this.level === 0) return this.data;
      const data = this.data;
      if (!data) return null;
  
      const props = this.store.props;
      let children = 'children';
      if (props) {
        children = props.children || 'children';
      }
  
      if (data[children] === undefined) {
        data[children] = null;
      }
  
      if (forceInit && !data[children]) {
        data[children] = [];
      }
  
      return data[children];
    }

    // 展开
    expand(callback, expandParent) {
      const done = () => {
        if (expandParent) {
          let parent = this.parent;
          while (parent.level > 0) {
            parent.expanded = true;
            parent = parent.parent;
          }
        }
        this.expanded = true;
        if (callback) callback();
      };
  
      if (this.shouldLoadData()) {
        this.loadData((data) => {
          if (data instanceof Array) {
            if (this.checked) {
              this.setChecked(true, true);
            } else if (!this.store.checkStrictly) {
              reInitChecked(this);
            }
            done();
          }
        });
      } else {
        done();
      }
      done();
    }
    // 收缩
    collapse() {
      this.expanded = false;
    }
    // node节点设置选中与否
    setChecked(value, deep, recursion, passValue) {
      this.indeterminate = value === 'half';
      this.checked = value === true;
      
      let {all, allWithoutDisabled } = getChildState(this.childNodes)

      // 如果不是叶子节点 并且没有全选或者全部disabled 设置为false
      if (!this.isLeaf && !all && allWithoutDisabled) {
        this.checked = false;
        value = false;
      }
      const handleDescendants = () => {
        if (deep) {
          const childNodes = this.childNodes;
          for (let i = 0, j = childNodes.length; i < j; i++) {
            const child = childNodes[i];
            passValue = passValue || value !== false;
            const isCheck = child.disabled ? child.checked : passValue;
            child.setChecked(isCheck, deep, true, passValue);
          }
          const { half, all } = getChildState(childNodes);
          if (!all) {
            this.checked = all;
            this.indeterminate = half;
          }
        }
      };
      handleDescendants();



      const parent = this.parent;
      if (!parent || parent.level === 0) return;
  
      if (!recursion) {
        reInitChecked(parent);
      }

    }

    // 是否是懒加载
    shouldLoadData() {
      return this.store.lazy && this.store.load && !this.loaded
    }
    updateLeafState() {
      if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== 'undefined') {
        this.isLeaf = this.isLeafByUser;
        return;
      }
      const childNodes = this.childNodes;
      if (!this.store.lazy || (this.store.lazy === true && this.loaded === true)) {
        this.isLeaf = !childNodes || childNodes.length === 0;
        return;
      }
      this.isLeaf = false;
    }
    doCreateChildren(array, defaultProps = {}){
      array.forEach((item) => {
        this.insertChild(objectAssign({data: item}, defaultProps), undefined, true);
      });
    }

    loadData(callback, defaultProps = {}) {
      if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(defaultProps).length)) {
        this.loading = true;
  
        const resolve = (children) => {
          this.loaded = true;
          this.loading = false;
          this.childNodes = [];
  
          this.doCreateChildren(children, defaultProps);
  
          this.updateLeafState();
          if (callback) {
            callback.call(this, children);
          }
        };
  
        this.store.load(this, resolve);
      } else {
        if (callback) {
          callback.call(this);
        }
      }
    }

}