#!/usr/bin/env python3
# -*- coding: utf-8 -*-
# @Time    : 2021-07-01 13:10
# @Author  : sfly900
# 使用说明  v4 面板  添加定时任务 0 0 */3 * * python /jd/scripts/python/auto_activeId.py   我这个路径可能和你的不太一样 看你自己的当前py文件放到哪里了
# 青龙面板 没有测试 自行测试  理论上应该是可以的

import re
import requests
import os

if os.path.exists('/ql/config/env.sh'):
    print("当前环境青龙面板新版")
    confFile = '/ql/config/env.sh'
elif os.path.exists('/ql/config/cookie.sh'):
    print("当前环境青龙面板旧版")
    confFile = '/ql/config/env.sh'
elif os.path.exists('/jd/config/config.sh'):
    print("当前环境V4")
    confFile ='/jd/config/config.sh'
else:
    print('请确认是否有配置文件！')
    exit(0)

url = 'https://wqsd.jd.com/pingou/dream_factory/index.html'
res = re.findall('((?<=.)activeId.*?==)(?:.*?)("start".*?(?=,))(?:.*?)("end".*?(?=,))', re.sub('%3D%3D', '==', ''.join(re.findall('({"width".*?})', requests.get(url).text))))

new_tuanId = f'export TUAN_ACTIVEID="{res[0][0].split("=",1)[1]}"'

if os.path.exists(confFile):
    file_data = ""
    with open(confFile, "r", encoding="utf-8") as f:
        tuanIds = f.read()
        f.close()
        r = re.compile(r'export TUAN_ACTIVEID=".*?"', re.S | re.I)
        tuanId = r.findall(tuanIds)
    if len(tuanId)>0:
        old_tuanId = tuanId[0]
        with open(confFile, "r", encoding="utf-8") as f:
            for line in f:
                if old_tuanId in line:
                    line = line.replace(old_tuanId, new_tuanId)
                file_data += line
        with open(confFile, "w", encoding="utf-8") as f:
            f.write(file_data)
        print("恭喜替换开团id成功")



