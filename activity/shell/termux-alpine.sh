[ `command -v git` ] || pkg install -y git
[[ `pkg list-all|grep ncurses-utils` ]] || pkg install -y ncurses-utils
cd $HOME
#[[ `du -s termux-alpine|awk '{print $1}'|grep 2819` ]] && AL=2819
if [[ -f ~/termux-alpine/setup-termux-alpine ]];then
cd termux-alpine
    rm -rf setup-termux-alpine
    curl https://gitee.com/ewf-9/BiJi/raw/master/setup-termux-alpine -o setup-termux-alpine
    chmod +x setup-termux-alpine
./setup-termux-alpine
else
    git clone -b main https://ghproxy.com/https://github.com/illvart/termux-alpine.git
    cd termux-alpine
    rm -rf setup-termux-alpine
    curl https://gitee.com/ewf-9/BiJi/raw/master/setup-termux-alpine -o setup-termux-alpine
    chmod +x setup-termux-alpine
./setup-termux-alpine
fi
cd
brc=`grep -qs "termux-alpine" ~/.bashrc`
if [ ptermux-alpine == p$brc ];then
echo "termux自启已存在"
else
#echo -e 'ht=`ps -ef |grep /ql/build/app.js|grep -v "grep" | wc -l`\nif [ 0 == $ht ];then\n[ -r /data/data/com.termux/files/usr/bin/termux-alpine ] && termux-alpine\nfi' >>~/.bashrc && \
cat > .bashrc <<- EOM
ht=\`ps -ef |grep /ql/build/app.js|grep -v "grep" | wc -l\`
if [ t0 == t\$ht ];then
[ -r /data/data/com.termux/files/usr/bin/termux-alpine ] && termux-alpine
fi
EOM
echo "termux自启写入成功"
