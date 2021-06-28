# 自用青龙库
一、青龙运行python脚本缺少requests模块，请按以下方式安装：

1、进入青龙容器：
   
docker exec -it qinglong /bin/sh

2、安装requests模块

pip3 install requests

3、安装完成，退出容器
   
exit

二、新版宠汪汪脚本需要用到canvas模块进行滑动拼图验证。

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

三、新加入air k的几个脚本，因为青龙的问题，utils目录下的公共函数不会拉取，因此需要把整个utils目录手动下载并上传到青龙sciptes目录；
    图形验证使用的是png-js模块，安装方法：

1、进入青龙容器：
   
docker exec -it qinglong /bin/sh
   
2、进入/ql/scripts目录
   
cd scripts
 
4、安装png-js模块
  
npm install -S png-js
   
5、安装完成，退出容器
   
exit
