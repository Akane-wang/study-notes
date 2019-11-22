// 写一个Cookie对象，实现：根据来源清除cookie，根据key清除cookie，根据key展示cookie，设置cookie
var cookieObj = {
    // 根据key展示cookie
    showCookieByKey:function(keyName) {
        var cookieName = encodeURIComponent(keyName) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;
        if (cookieStart > -1) { // 有cookie
            var cookieEnd = document.cookie.indexOf(";",cookieStart); // cookieStart: indexOf检索“；”的起始位置
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }

            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }

        return cookieValue;
    },
    // 根据来源清除cookie
    // clearCookieBySource: function(name, path, domain, secure) {
    //     this.setCookie(name,"", new Date(0), path, domain, secure);
    // },
    // 根据key清除cookie
    clearCookieByKey:function(name, path='/', domain, secure) {
        this.setCookie(name,"", new Date(0), path, domain, secure);
    },
    // 设置cookie
    setCookie: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURIComponent(name) +"=" +encodeURIComponent(value); // name、value是必须的
        if (expires instanceof Date) {
            cookieText += ";expires=" + expires.toGMTString();
        }
        if(path) {
            cookieText += "; path="+path;
        }
        if(domain) {
            cookieText += ";domain="+domain;
        }
        if(secure) {
            cookieText += "; secure";
        }
        document.cookie = cookieText;
    }
}
