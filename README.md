# vue_home
这是一个vue的脚手架项目，其中包含着当前最新得脚手架配置方式，技术技术栈包括vue+vuex+vue-router+sass+less+webpack4

# 更新日志  
**2019.5.28**  [日志地址](https://github.com/aiyuekuang/vue_home/blob/master/doc/gengxin.md)  

1. 更新项目的开发工具到最新的库
2. 划分模块，适应团队工程化开发，让专业的人做专业的事，利于团队管理
3. 划分开发模式，测试环境，生产环境的命令，让打包上线更容易

# 脚手架
在本地全局安装ztao-cli工具，安装方法`npm install ztao-cli -g`,安装完成之后，命令行工具切换到你要创建项目的文件夹中，执行`ztao i`,然后根据提示填写`vue`和项目的名称（会根据名称自动创建项目的文件夹）,剩下的就是等待完成了

# 使用方法（推荐使用yarn,不要用cnpm）：
    安装模块：npm install  
    
    开发模式：npm run dev 或者 npm start  

    打包：npm run build

# 项目结构
1. config：用于配置各种变量，有webpack中用到的，也有项目中用到的，比如"img_add_url"这个字段就是图片上传的前缀，用于图片上传后，后台没有返回完整的图片url，只返回图片的名称后缀时，在前面加上地址的作用
2. dll：在package的script里面有dll，用于提前打包我们常用的库的一个工具，加快我们的编译时间的
3. dist：打包后的代码
4. src/utils：用于开发主管放置公共函数的地方
5. src/work：开发组员用于开发业务的地方（page：每个页面都放在这里面，router：路由的数据结构都在这里，server：所有的ajax请求都写在这里，方便后续复用，components用于存放复用组件的地方，images存放图片，图片可以在页面直接import引用，common是用于存放业务中公共的函数的与业务紧密结合的这种）
6. .eslintrc.js是eslint的配置文件
7. webpack.config.babel.js是webpack的配置文件，支持es6写法
8. webpack.dll.config.js是用于打包dll的配置文件，你也可以将库打包进去，加快整个项目的编译时间

# 项目适用对象
1. 团队式协作：由一个主管负责项目的整体环境，src/work以外各个文件的维护，比如config，webpack，mock，utils之类的，团队成员负责项目的业务部分src/work不需要关注此以外的部分，有任何问题可以咨询主管
2. 后续：本项目是一个架构基础，旨在更简单的让所有用户在项目架构阶段，简化工作，并且让所有团队成员更快的熟悉这个架构，将更多的精力放在分析需求和代码实现上

# 注意以及搭建环境时问题汇总
1. 如果在build或者start的时候出现node-sass之类的报错，可以使用 npm rebuild node-sass来处理下，再build或start，也可以参考[地址](https://juejin.im/post/5cde1df65188250a8f72ff68)。
  

# 打包上线
* 在项目开始之前，在config文件夹中，配置你的项目的各种环境，这些环境都是项目在开发和上线时都需要用到的
* 打包后直接将build文件夹提交至你们项目得根目录中
* 命令并且呵斥你们得后端人员，将404指向build/index.html，这样基本就可以愉快得查看了
* 如果在上线后首屏调用速度较慢，这样得情况得话，可以鞭挞后端人员，开启服务器得gzip压缩功能将js压缩一下，压缩后大小基本只有原来得三分之一，这个很实用

* 还有自己打包代码发布到nginx的方法：[地址](https://juejin.im/post/5cde732e51882525d20ead6f)
