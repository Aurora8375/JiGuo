


// - setCookie()——创建Cookie

//                 键 值  过期时间

function setCookie(key, val, time) {
    var date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie = `${key}=${val};expires=${date}`;
}


// - getCookie()——获取Cookie
//   根据key  获取对应的cookie值

function getCookie(key) {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        if (newArry[0] == key) {
            return newArry[1]
        }
    }
}
// - removeCookie()——删除Cookie
// 如何删除   根据 key值删除  

function removeCookie(key_) {
    this.setCookie(key_, '', -1);
}


// 清空cookie


function clearCookie() {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        console.log(newArry[0]);
        // this.setCookie(newArry[0], '', -1);
        this.removeCookie(newArry[0]);
    }
}