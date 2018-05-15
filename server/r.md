
##安装node 官方下载
node -v  // node 版本号
npm -v  // npm 版本号
npm install npm -g  // Windows系统下升级npm
npm uninstall/update/publish [模块名]  // 卸载/更新/发布模块

----------------------------------------------------------------

##安装淘宝镜像

npm install -g nrm   //全局安装 nrm ，nrm 是 npm 的镜像资源管理工具
nrm ls
nrm use taobao  //安装淘宝镜像，可以直接用npm命令

----------------------------------------------------------------

##全局安装webpack

npm install webpack -g  
webpack -v  //查看版本号

----------------------------------------------------------------

##安装vue-cli

npm install vue-cli -g
vue -V  //查看版本号

----------------------------------------------------------------

##新建一个基于webpack的项目
npm init webpack my-project //新建过程中直接默认就行了
cd my-project
npm install  //安装依赖
npm install vue-router vue-resource --save  //安装路由和网络请求 【安装过程中会提示是否安装vue-router,如果没有提示安装，再安装此依赖; 使用axios代替vue-resource;】
npm run dev  //启动项目

----------------------------------------------------------------


##安装element-ui
npm install element-ui -S
npm install babel-plugin-component -D //按需加载 element-ui 组件

----------------------------------------------------------------

##安装less

npm install less less-loader --save 【-D即可，生产环境中不需要】

npm install -g less -D  //安装less
lessc styles.less  //查看 styles.less 文件
lessc styles.less > styles.css  //将 less 定向输出到某个文件
lessc  //查看所有 less 参数
less plugins -clean -ss  //less压缩文件

----------------------------------------------------------------

##安装node-sass报错时，可以执行此操作

npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/