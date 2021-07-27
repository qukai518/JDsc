let common = require("./utils/common");
let $ = new common.env('宠汪汪兑换京豆');
let fs = require("fs"); 
const jdVersion = '10.0.8'
const iphoneVersion = [Math.ceil(Math.random()*2+12),Math.ceil(Math.random()*4)]
const UA = `jdapp;iPhone;${jdVersion};${Math.ceil(Math.random()*2+12)}.${Math.ceil(Math.random()*4)};${randomString(40)};network/wifi;model/iPhone12,1;addressid/0;appBuild/167741;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS ${iphoneVersion[0]}_${iphoneVersion[1]} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`
function randomString(e) {
  e = e || 32;
  let t = "abcdefhijkmnprstwxyz2345678", a = t.length, n = "";
  for (i = 0; i < e; i++)
    n += t.charAt(Math.floor(Math.random() * a));
  return n
}

$.setOptions({
    headers: {
        'content-type': 'application/json',
        'user-agent': UA,
        'referer': 'https://happy.m.jd.com/babelDiy/',
    }
});
eval(common.eval.mainEval($));
async function prepare() {
    $.thread = 1; 
    //await $.timer("00 00 */8",120)
}
async function main(id) {
    let txt = await fs.readFileSync('./jdvalidate.txt', 'utf-8');
    let lists = txt.split("\n");
    let validate = lists[id.index - 1];
    let params = {
        'url': `https://jdjoy.jd.com/common/gift/getBeanConfigs?reqSource=h5&invokeKey=qRKHmL4sna8ZOP9F&validate=${validate}`,
        'cookie': id.cookie
    }
    try {
        await $.curl(params)
        let h = new Date().getHours();
        if (h >= 0 && h < 8) {
            config = $.source.data['beanConfigs0']
        } else if (h >= 8 && h < 16) {
            config = $.source.data['beanConfigs8']
        } else {
            config = $.source.data['beanConfigs16']
        } 
        for (let i of config.reverse()) {
            params = {
                'url': `https://jdjoy.jd.com/common/gift/new/exchange?reqSource=h5&invokeKey=qRKHmL4sna8ZOP9F&validate=${validate}`,
                'body': `{"buyParam":{"orderSource":"pet","saleInfoId":${i.id}},"deviceInfo":{}}`,
                'cookie': id.cookie
            }
            await $.curl(params)
            let log = '';
            switch ($.source.errorCode) {
                case 'stock_empty':
                    log = "库存为空"
                    break
                case 'insufficient':
                    log = "积分不足"
                    break
                case 'buy_limit':
                    log = "已兑换过"
                    break;
                case 'buy_success':
                    log = "兑换成功"
                    break;
                case 'H0001':
                    log = "刷新验证"
                    break;
                default:
                    log = "未知状态"
                    break
            }
            console.log(id.user, log, i.giftValue)
            $.notices(log, id.user)
        }
    } catch (e) {}
}
