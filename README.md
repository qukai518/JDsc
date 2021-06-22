# 自用青龙库

新版宠汪汪脚本需要用到canvas模块进行滑动拼图验证。

青龙安装canvas方法：

1、进入青龙容器：
   
docker exec -it qinglong /bin/sh
   
2、安装依赖：
   
apk add --no-cache build-base g++ cairo-dev pango-dev giflib-dev
   
3、进入/ql/scripts目录
   
cd scripts
 
4、编译生成canvas模块
  
npm install canvas --build-from-source
   
5、安装完成，退出容器
   
exit
   
   
E大的V4和lxk0301原版镜像安装canvas方法（未验证）：

1、npm install -g node-gpy

2、npm install -g @mapbox/node-pre-gyp

3、npm install -g canvas

（从国内镜像安装 npm install -g canvas --canvas_binary_host_mirror=https://npm.taobao.org/mirrors/node-canvas-prebuilt/ ）
