// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/index';
import filters from './filters/index'
// import diy plugins
import Utils from './assets/js/utils';

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
    Message
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

// Vue.filter('trim', filters.trim);
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

Vue.use(Utils);
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
