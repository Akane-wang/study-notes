// 调用：
// var isGdprOpen = {
//     'features': true,
//     'advertisement': true
// }
// gdprUtil.setPermission(isGdprOpen);
// gdprUtil.getPermission('features');
/**
 * 调用方法setPermission存储值（需传入要存储的对象）
 * 调用方法getPermission获取某个GDPR类型是否能够被使用
 */
var gdprUtil = {
    localKey: 'gdprLocalName',
    EUROPE: 'Europe',
    getPermission:function(gdprOpenKey) {
        // TODO: 请求是哪个国家
        ReoAPI.get({'uri': '/'}).then(function (res) {
            // TODO：如果res的国家属性为欧洲；欧洲属性需要被修改
            if(res == this.EUROPE) {
                var localValue = JSON.parse(localStorage.getItem(this.localKey));
                for(var key in localValue) {
                    if(key == gdprOpenKey) {
                        return localValue[key];
                    }
                }
            }
            return true;
        }).catch(function(err) {
            console.log(err)
        });
    },

    setPermission:function(isGdprOpen) {
        if(isGdprOpen && (isGdprOpen instanceof Object)) { // 如果传入的设置不为空且为对象
            localStorage.setItem(this.localKey,JSON.stringify(isGdprOpen));
        }
    }
}

