- 项目运行后的效果
- 前端技术文档
    - 项目结构
- 部署



### 模块命名的规范
- 以最后的父级作为模块名称
- 单个菜单为一个文件
- 菜单中的第一个文件可以用index.vue命名或者以实际名称命名

### VueJs里方法放置顺序
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

### 模块说明
- main: 项目主框架
    - AppHeader.vue 头部组件
    - AppNav.vue 侧边导航组件
    - index.vue 项目主框架页面
- work-flow: 我的流程
    - todo.vue 待办事项
    - done.vue 已办事项

- auth-management： 权限管理
    - index.vue 角色管理

- organization-management： 组织管理
    - user.vue 用户管理