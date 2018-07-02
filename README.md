# 铁路标准开发平台

> CIC智讯铁路标准开发平台脚手架

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

> 安装node-sass报错时，可以执行此操作

```
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目命名规范：
如无明确说明，命名均采用驼峰(camelCase)命名法则（第一个单词首字母小写，后面其他单词首字母大写）

### 文件夹（模块）
文件夹代表着模块的名字
- 以最后的父级作为模块名称
- 有意义的名词、简短、具有可读性
- 以小写开头，采用短横线分割命名或者单个单词
- 文件夹中的第一个文件可以用index.vue命名或者以实际名称命名

### 文件（页面）
单个菜单为一个文件，文件名称代表着页面的名字
- 一般常用结束词：
    - 详情：xxxDetail userDetail
    - 编辑：xxxEdit userEdit
    - 表单：xxxForm userForm( 详情和编辑是一个页面)
    - 列表：xxxList、
    - 信息：xxxInfo
    - 报表：xxxReport
    
- 局部组件：
    - 采用帕斯卡(PascalCase)命名法（每个单词的第一个字母都大写）

### 常用变量名称：

- 页面显示：viewModel: vm || vmUser
- 表单数据：formModel: fm || fmUser
- 检索数据：queryModel: qm || fmUser

### 常用方法名称：
- 初始化的方法：initXXX(), initUser
- 获取数据方法：getXXX(), getUserList
- 保存数据方法：saveXXX(), saveUser
- 修改数据方法：editXXX(), editUser
- 删除数据方法：deleteXXX, deleteUser
- 移除数据方法：removeXXX, removeUser（和delete的区别是，remove只是操作本地数据）
- 弹框信息方法：popupXXX(), popupUser
- 详情数据方法：showXXX(), showUserInfo
    
**事件方法以handle开头， handleClickTab, handleRemoveTab**

### Vue里方法放置顺序
- props
- data
- computed
- components
- methods
- created
- mounted
- update
- beforeRouteUpdate
- filter
- watch

### 部分eslint代码格式：
- Js代码里使用单引号来描述字符串，json字符串使用双引号
- 相关语句要用分号结束
- 缩进为4个空格：

### 新建页面流程：
- 1.按照模块建立相关的文件夹
- 2.新建xxx.vue文件，新建xxx.less文件
- 3.配置相关router
- 4.对相关业务进行编码


