### 青龙拉库命令:

`ql repo https://ghproxy.com/https://github.com/inoyna12/JDsc.git "jd_|jx_|gua_|jddj_|getJDCookie" "activity|backUp" "^jd[^_]|USER|utils|function|ql"`

定时规则`0 */4 * * *`

### 依赖安装
<details>
<summary>查看</summary>

#### 青龙面板运行JD脚本必备的3个依赖:

##### 第一种方法:

如果你的青龙面板版本在2.10.0以上，那么在面板内找到依赖管理-添加

nodejs那里添加`jsdom`和`png-js`

py那里装`requests`

安装成功就可以了

##### 第二种方法:

ssh连接你的服务器

`docker exec -it qinglong bash -c "cd /ql/scripts && npm install jsdom"`

`docker exec -it qinglong bash -c "cd /ql/scripts && npm install png-js"`

`docker exec -it qinglong bash -c "pip3 install requests"`
  
exit
</details>

___

### 手机运行:

手机面具(magisk)刷入青龙面板，需root。 [点击查看](/backUp/magisk_qinglong.md)

手机安装v3面板，无需root。 [点击查看](/backUp/Termux.md)

___

[环境变量合集](/backUp/githubAction.md)
