Ninja作者仓库地址:https://github.com/Waikkii/Waikiki_ninja/tree/master

以下教程仅适用于服务器已经搭建好青龙面板的用户，并且青龙面板版本在2.8.2+

服务器防火墙放行5701端口

ssh连接服务器

docker stop qinglong

docker rm qinglong

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

docker exec -it qinglong bash

git clone https://github.com/Waikkii/waikiki_ninja.git /ql/ninja
cd /ql/ninja/backend
pnpm install
cp .env.example .env
pm2 start
cp sendNotify.js /ql/scripts/sendNotify.js


cd /ql/ninja/backend
git checkout .
git pull
pnpm install
pm2 start
cp sendNotify.js /ql/scripts/sendNotify.js
