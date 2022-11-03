
// Boolean
function getCookie(key) {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        if (newArry[0] == key) {
            return newArry[1]
        }
    }
}

var ll = getCookie('user');
// console.log(Boolean(ll));

//登录成功之后头部更改名字
if (Boolean(ll) == true) {

    var ul = document.getElementsByClassName('u')[0];
    console.log(ul);
    var Cook = getCookie('user');
    console.log(Cook);
    ul.innerHTML = '你好，尊敬的用户：' + Cook;
    ul.style.lineHeight = '30px';
}


