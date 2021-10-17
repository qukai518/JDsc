### 青龙拉库命令:

`ql repo https://ghproxy.com/https://github.com/inoyna12/JDsc.git "jd_|jx_|gua_|jddj_|getJDCookie" "activity|backUp" "^jd[^_]|USER|utils|function|ql"`

定时规则`0 */4 * * *`

### 模块安装
<details>
<summary>查看</summary>
安装依赖库
docker exec -it qinglong bash -c "cd /ql/scripts && npm install -g typescript"
docker exec -it qinglong bash -c "cd /ql/scripts && npm install axios"
docker exec -it qinglong bash -c "cd /ql/scripts && npm install date-fns"
docker exec -it qinglong bash -c "cd /ql/scripts && npm install crypto -g"
docker exec -it qinglong bash -c "cd /ql/scripts && npm install jsdom"
docker exec -it qinglong bash -c "cd /ql/scripts && npm install png-js"
docker exec -it qinglong bash -c "cd /ql/scripts && npm install -g npm"
docker exec -it qinglong bash -c "cd /ql/scripts && pnpm i png-js"
docker exec -it qinglong bash -c "pip3 install requests"
docker exec -it qinglong bash -c "apk add --no-cache build-base g++ cairo-dev pango-dev giflib-dev && cd /ql/scripts && npm install canvas --build-from-source"
docker exec -it qinglong bash -c "apk add python3 zlib-dev gcc jpeg-dev python3-dev musl-dev freetype-dev"
docker exec -it qinglong bash -c "cd /ql/scripts/ && apk add --no-cache build-base g++ cairo-dev pango-dev giflib-dev && npm i && npm i -S ts-node typescript @types/node date-fns axios png-js canvas --build-from-source"   
exit
</details>

___

手机termux使用脚本教程，无需root，自动运行并更新我仓库脚本，[点击查看](/backUp/Termux.md)

[环境变量合集](/backUp/githubAction.md)
