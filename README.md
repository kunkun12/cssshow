

# Features
* [在线访问](http://kunkun12.com/cssshow/build)
* 主要目的方便拷贝CSS 常用动画效果的相关代码（sass 和CSS格式）。
* 使用sass.js 在前端实现sass －> css
* 前端实现 autoprefixer
* 基于react＋webpack
* 使用react-highlight 格式化展示代码。
* 易于样式扩展，在sassSource.js增加相关样式即可
*  Css样式主要来源于  [Animate.css](https://github.com/daneden/animate.css)

![](http://7o5118.com1.z0.glb.clouddn.com/1.gif)

# Installation

* 运行 `npm install` 安装依赖。
   ~~ material-ui 的点击事件依赖了react-tap-event-plugin，npm上目前为的0.2.2 不支持react v15 ，需要手动从github上下载源码，进入node_module git clone https://github.com/zilverline/react-tap-event-plugin.git 然后 cd react-tap-event-plugin&& npm install 等作者将最新的模块发布至npm 这个问题自然解决。~~
* 开发环境运行 `npm start`   访问 http://localhost:4000
* 生产环境 `npm run bulld` 生成的生产环境代码在build目录下 访问 http://localhost:3000


ToDo
* ~~autoPrefix~~
* class classify
* more content
