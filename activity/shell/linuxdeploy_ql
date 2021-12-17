sed -i 's/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g' /etc/apk/repositories
apk update -f
apk upgrade  
apk add bash  
apk add coreutils  
apk add moreutils     
apk add git
apk add curl
apk add wget     
apk add tzdata     
apk add perl     
apk add openssl     
apk add nginx     
apk add python3     
apk add jq     
apk add openssh 
apk add py3-pip    
apk add --update npm     
apk add --update nodejs npm     
rm -rf /var/cache/apk/*    
ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime    
echo "Asia/Shanghai" > /etc/timezone    
touch ~/.bashrc       
git clone -b master https://ghproxy.com/https://github.com/whyour/qinglong.git /ql    
git config --global user.email "qinglong@@users.noreply.github.com"    
git config --global user.name "qinglong"    
cd /ql    
cp -f .env.example .env    
chmod 777 /ql/shell/*.sh    
chmod 777 /ql/docker/*.sh    
npm install -g pnpm    
pnpm install -g pm2    
pnpm install -g ts-node typescript tslib 
rm -rf /root/.npm    
pnpm install --prod    
rm -rf /root/.pnpm-store    
git clone -b master https://ghproxy.com/https://github.com/whyour/qinglong-static.git /static    
cp -rf /static/* /ql    
rm -rf /static        
sleep 2
bash /ql/docker/docker-entrypoint.sh
