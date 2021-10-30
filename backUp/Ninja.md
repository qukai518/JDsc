Ninja作者仓库地址:https://github.com/Waikkii/Waikiki_ninja/tree/master


以下教程仅适用于服务器已经搭建好青龙面板的用户，并且青龙面板版本在2.8.2+

### 搭建步骤

1.首先去服务器防火墙放行5701端口，然后ssh连接你的服务器

2.输入命令

`docker stop qinglong`

3.输入命令

`docker rm qinglong`

4.输入命令
```bash
docker run -dit \
   -v $PWD/ql/config:/ql/config \
   -v $PWD/ql/log:/ql/log \
   -v $PWD/ql/db:/ql/db \
   -v $PWD/ql/repo:/ql/repo \
   -v $PWD/ql/raw:/ql/raw \
   -v $PWD/ql/scripts:/ql/scripts \
   -v $PWD/ql/jbot:/ql/jbot \
   -v $PWD/ql/ninja:/ql/ninja \
   -p 5700:5700 \
   -p 5701:5701 \
   --name qinglong \
   --hostname qinglong \
   --restart unless-stopped \
   whyour/qinglong:latest
```   
5.输入命令

`docker exec -it qinglong bash`

6.输入命令
```bash
git clone https://github.com/Waikkii/waikiki_ninja.git /ql/ninja
cd /ql/ninja/backend
pnpm install
cp .env.example .env
pm2 start
cp sendNotify.js /ql/scripts/sendNotify.js
```
7.进入青龙面板打开配置文件，将以下内容粘贴到`extra.sh`并保存
```bash
cd /ql/ninja/backend
git checkout .
git pull
pnpm install
pm2 start
cp sendNotify.js /ql/scripts/sendNotify.js
```
