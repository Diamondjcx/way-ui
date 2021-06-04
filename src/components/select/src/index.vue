<template>
<div ref="wselect" 
    :class="[
    'w-select',
    size ? 'w-select--' + size : '',
    allowClear && selectVal &&  'w-select-suffix',
    ]" 
    :style="{width: width}"
    @click.stop="toggleMenu"
    >
      <template v-if="multiple">
        <div class="w-select__tags" ref="wtag">
            <w-tag
                v-for="tag in selectVal"
                :key="tag.value"
                closable
                type="info"
                size="small"
                @close="handleClose(tag.value)"
                >
                {{tag.label}}
            </w-tag>
        </div>
      </template>
      <template >
        <div 
            :class="[
                'w-select__inner',
                visible && 'is-focused',
            ]"
        >
            <w-input 
                ref="wselect_input" 
                readonly 
                class="w-select-input" 
                allowClear 
                :placeholder="multiple && selectVal.length ? '' : placeholder" 
                :value="multiple ? '' : activeLabel" 
            />
            <div  class="w-select-cheron" >
                <i :class="visible ? 'w-icon-chevron-up' : 'w-icon-chevron-down'"></i>
            </div>
            <div v-if="allowClear && selectVal" class="w-select-clear" @click.stop="handleClear">
                <i class="w-icon-x-circle"/>
            </div>  
        </div>
      </template>
      <transition  name="fade" mode="out-in" >
          <div class="w-select-option" ref="select_option" v-show="visible">
              <div class="w-scrollbar">
                <div class="w-scrollbar_wrap  w-select-option_wrap"  >
                    <ul class="w-scrollbar_view w-select-option_list">
                        <slot  />
                    </ul>
                </div>
              </div>
          </div>
      </transition>
</div>
</template>

<script>
    import {getClientReat, debounce, throttle} from "../../../basic/tools";
    import WInput from '../../input';
    import WTag from '../../tag';
    export default {
        name: 'w-select',
        provide() {
            return {
                Select: this
            };
        },
        components:{
            WInput,
            WTag
        },
        props: {
            placeholder: String,
            width: String,
            size:String,
            value: [String,Array],
            open: {
                type: Boolean,
                default: false,
            },
            multiple: {
                type: Boolean,
                default: false
            },
            allowClear: {
                type: Boolean,
                default: false,
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            options: Array,
        },
        data() {
            return {
                visible: this.open,
                selectVal: this.value,
                selectRefs: null,
                screenWidth: document.body.clientWidth,
                top: 0,
                activeTag: '',
                activeLabel: '',
            }
        },
        mounted() {
            this.initListener();
            this.selectRefs = this.$refs.select_option;
            // open时 选项对齐
            this.setSelectmenuPosition();
            // 自动对焦
            this.autofocus && this.handleAutoFocus();
            // 多选时计算input高度
            this.multiple && this.selectVal && this.setInputHeight();
        },
        watch: {
            visible(val) {
                    val && this.setSelectmenuInbody()
            },
            screenWidth(val){
                 this.screenWidth = val;
                 this.setSelectmenuPosition();
            },
            top(val) {
                this.top = val;
                this.setSelectmenuPosition();
            },
            selectVal() {
                if (this.multiple) {
                    this.setInputHeight();
                }
            },
        },
        computed: {

        },

        methods: {
            toggleMenu() {
                this.visible = true;
            },
            initListener() {
                document.addEventListener('click',() => {
                    this.visible = false
                });
                // scroll && onresize时，下拉筛选的位置
                window.addEventListener('scroll', debounce(this.scrollHandle, 1000));
                const that = this;
                // 添加 resize 绑定事件
                window.addEventListener(
                    "resize",throttle(() => {
                    that.screenWidth = document.body.clientWidth
                }, 0),false
                );
            },
            // 点击选项中的某一项
            itemClick(value, label, selected) {
                // 如果是多选 直接push
                if (this.multiple) {
                    // 为true时才push进去
                    if (selected === false) {
                        this.selectVal  = this.selectVal.filter(item =>{ return item.value !== value});
                    } else {
                        selected && this.selectVal.push({
                            value: value,
                            label: label
                        });
                    }
                } else {
                    this.selectVal = value;
                    this.activeLabel = label;
                    this.visible = false;
                }
                this.$emit('change', value);
            },
            handleAutoFocus() {
                this.activeLabel = this.options.length && this.options[0].label;
                this.selectVal = this.options.length && this.options[0].value
                // 获取input使其自动聚焦
                this.$nextTick(()=>{
                    this.$refs.wselect_input.$refs.wInput.children[0].focus();
                })
 
            },
            // 设置多选时input的高度
            setInputHeight() {
                const tagRefs = this.$refs.wtag;
                const parent_el = this.$el; // 父组件el
                const parent_rect = getClientReat(parent_el);
                let tagHeight = 33;    
                this.$nextTick(function () {
                    if (this.selectVal.length > 0 ) {
                        tagHeight = tagRefs.offsetHeight + 5
                    }
                    this.$refs.wselect_input.$refs.wInput.children[0].style.height = tagHeight + 'px';
                    // 选中的值有所改变时，重新设置option的top值
                    this.selectRefs.style.position = 'fixed';
                    this.selectRefs.style.top = parent_rect.top + tagHeight + 'px';
                    // 第一次执行高度会为0
                    // console.log('tag_rect',tag_rect.height);
                })
            },
            // 将option添加到body中，ZIndex 
            setSelectmenuInbody() {
                if (this.selectRefs) {
                    document.body.appendChild(this.selectRefs)
                }
                this.setSelectmenuPosition()
            },
            setSelectmenuPosition() {
                const el = this.$slots.default[0].elm;
                    if (el) {
                        const parent_el = this.$el; // 父组件el
                        const parent_rect = getClientReat(parent_el);
                        this.selectRefs.style.position = 'fixed';
                        this.selectRefs.style.top = parent_rect.top + parent_rect.height + 'px';
                        this.selectRefs.style.left = parent_rect.left + 'px';
                        this.selectRefs.style.width = parent_el.clientWidth + 'px';
                    }
            },
            scrollHandle(e) {
                this.top = e.srcElement.scrollingElement.scrollTop;   
            },
            handleClear() {
                this.selectVal = '';
                this.activeLabel = '';
                this.$emit('clear', '');
            },
            handleClose(tag_value) {
                this.selectVal = this.selectVal.filter(item => {return item.value !== tag_value});
                this.activeTag = tag_value;
                this.$emit('remove-tag', tag_value);
            },
        },
        beforeDestroy() {
            this.visible = false;
            if (this.selectRefs && this.selectRefs.parentNode.nodeName === 'BODY') {
                document.body.removeChild(this.selectRefs);
            }
            window.removeEventListener('scroll', debounce(this.scrollHandle, 1000));
        },
    }
</script>