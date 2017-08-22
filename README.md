# vue_home
这是一个vue的脚手架项目，其中包含着当前最新得脚手架配置方式，技术技术栈包括vue+vuex+vue-router+iview+sass+webpack3+esn，我会长期，并定期维护这个脚手架，将当下vue生态圈最新技术运用进去,适用于新手或者关注进阶的朋友学习参考。（广大撸友觉得能用上的，也不要吝啬自己的star哦）  

# 更新日志  
**2017.8.22**  [日志地址](https://github.com/aiyuekuang/vue_home/blob/master/doc/gengxin.md)  

1. 新增开发模式下得跨域请求示例，跨域请求使用得是webpack-dev-server得proxy，方便实用，不明白得可以isuess
2. 新增请求数据接口示例，供大家参考，在neiye中，也就是首页点击后进入得列表页如下图
3. 使用vuex更新数据至页面模板中
![更新图](https://github.com/aiyuekuang/vue_home/blob/master/doc/img/neiye.png?raw=true) 

# 注意的情况：
* 如果在build或者start的时候出现node-sass之类的报错，可以使用  npm rebuild node-sass来处理下，再build或start，有了解的同学可以issues告诉我。
* 如果有撸友遇到其他sass相关问题的话，也可以将sass的配置更换为less，本项目已配置less加载器 
* 朋友们如果有一些对本项目得建议，或者想法欢迎issues，将持续改进

# 使用方法：
    安装模块：npm install  
    
    开发模式：npm run dev 或者 npm start  

    打包：npm run build