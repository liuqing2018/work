// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/index';

// import filters
import './filter/index.js';

// import directives
import directives from './directive/index';

// import plugins
import Plugins from './plugin/index';

// import components
import './components/index';

import 'babel-polyfill';

// import element-ui modules
import {
    Row,
    Col,
    Container,
    Main,
    Footer,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    Table,
    TableColumn,
    Autocomplete,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Pagination,
    Form,
    FormItem,
    Input,
    Radio,
    RadioGroup,
    Dialog,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Tabs,
    TabPane,
    Tooltip,
    Loading,
    MessageBox,
    Message,
    Button,
    Select,
    Option,
    DatePicker,
    Tree
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import vueDragDrag from 'vue-dragdrag';
Vue.use(vueDragDrag);
Vue.use(Plugins);
Vue.use(directives);
// begin CW add component
Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Tree);
// end CW add component
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Autocomplete);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(Input);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tooltip);
Vue.use(Loading.directive);

// instance
Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
