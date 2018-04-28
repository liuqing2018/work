# 铁路标准开发平台

> CIC智讯铁路标准开发平台

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



PS:
#### 编码规范：

#### iconfont

#### element-ui

#### 项目目录:
    - dist为最后的生产文件
    - src
        - assets
            - js
            - css
            - img
        - components
        - router
        - views
        - vuex
        - css模块和页面模块
#### 代码格式：
- Js代码里使用单引号来描述字符串，json字符串使用双引号
- 相关语句要用分号结束
- 空格问题：

#### 新建页面流程：
    - 1.按照模块建立相关的文件夹
    - 新建xxx.vue文件，新建xxx.less文件
    - 配置相关router
    - 对相关业务进行编码
