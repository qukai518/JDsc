### 青龙拉库命令:

`ql repo https://ghproxy.com/https://github.com/inoyna12/JDsc.git "jd_|jx_|gua_|jddj_|getJDCookie" "activity|backUp" "^jd[^_]|USER|utils|function|ZooFaker_Necklace.js|JDJRValidator_Pure|sign_graphics_validate"`

定时规则`0 */4 * * *`

### 模块安装
<details>
<summary>查看</summary>
一、青龙运行python脚本缺少requests模块，请按以下方式安装：

1、进入青龙容器：
   
docker exec -it qinglong /bin/sh

2、安装requests模块

pip3 install requests

3、安装完成，退出容器
   
exit

二、青龙安装nodejs模块方法：

1、进入青龙容器：
   
docker exec -it qinglong /bin/sh
   
2、进入/ql/scripts目录
   
cd scripts
 
4、安装png-js模块
  
npm install -g png-js

安装jsdom模块

npm install -g jsdom

   
5、安装完成，退出容器
   
exit
</details>
[环境变量](/backUp/githubAction.md)
