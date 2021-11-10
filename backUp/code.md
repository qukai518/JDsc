

把code.sh和task_before.sh这两个文件放到容器内 root/ql/config目录下，权限变更为644

打开青龙面板添加:

名称:随意

命令:task /ql/config/code.sh

定时规则:30 5 * * *

确定后手动运行一次


此文件默认优先助力排名靠前的Cookie，如需使用随机互助或均等互助，在青龙面板-配置文件-code.sh，第38行按照注释修改

注意:你在环境变量中填写的cookie不能使用换行隔开，必须要用&或者一个变量一个cookie
