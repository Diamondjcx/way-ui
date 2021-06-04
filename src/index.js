import Row from './components/row';
import Col from './components/col';
import Button from './components/button';
import Radio from './components/radio';
import CheckboxGroup from './components/checkbox-group';
import Checkbox from './components/checkbox';
import Icon from './components/icon';
import Switch from './components/switch';
import Input from './components/input';
import Popover from './components/popover'
import RangePicker from './components/date-picker/range-picker';
import DatePicker from './components/date-picker/index';
import Pagination from './components/pagination';
import Modal from './components/modal';
import Dropdown from './components/dropdown';
import DropdownMenu from './components/dropdown-menu';
import DropdownItem from './components/dropdown-item';
import Progress from './components/progress';
import Badge from './components/badge';
import Backtop from './components/backtop';
import Table from './components/table';
import ScrollPane from './components/scroll-pane';
import Slide from './components/slider';
import Message from './components/message/index.js';
import Select from './components/select';
import SelectOption from './components/select-option';
import Tag from './components/tag';
import Link from './components/link';
import Layout from './components/layout';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Sider from './components/sider';
import Tree from './components/tree';
import Loading from './components/loading';

const components = [
  Row,
  Col,
  Button,
  Radio,
  CheckboxGroup,
  Checkbox,
  Icon,
  Switch,
  RangePicker,
  Input,
  Popover,
  DatePicker,
  Pagination,
  Modal,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Progress,
  Badge,
  Backtop,
  Table,
  ScrollPane,
  Slide,
  Select,
  SelectOption,
  Tag,
  Link,
  Layout,
  Header,
  Footer,
  Content,
  Sider,
  Tree,
  Loading
];
const install = function (Vue, opts = {}) {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$WAY = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
  Vue.prototype.$message = Message;

}

// install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version: '0.1.0',
  install,
  ...components
}

export default API   // eslint-disable-line no-undef
