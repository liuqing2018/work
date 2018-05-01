// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/index';
import { api, toast, copyObj } from './assets/js/common';
import { http } from './assets/js/http';
import dateUtil from './assets/js/date';
import {
    Table,
    TableColumn,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Pagination,
    Form,
    FormItem,
    Input,
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
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Pagination);
Vue.use(Form);
Vue.use(Input);
Vue.use(FormItem);
Vue.use(Dialog);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tooltip);
Vue.use(Loading.directive);

Vue.prototype.$toast = toast; // 弹框提示
Vue.prototype.$copyObj = copyObj;
Vue.prototype.$dateUtil = dateUtil;
Vue.prototype.$api = api;
Vue.prototype.$http = http;

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
