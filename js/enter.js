var user = document.getElementsByClassName('username')[0];
var psd = document.getElementsByClassName('psd')[0];
var btn1 = document.getElementsByClassName('btn1')[0];
var checked = document.getElementsByClassName('checked')[0];
console.log(checked);
console.log(user, psd, btn1);
function getCookie(key) {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        if (newArry[0] == key) {
            return newArry[1]
        }
    }
}
var c = getCookie('user');
var p = getCookie('psd');
console.log(c, p);
btn1.onclick = function () {
    var user_ = user.value;
    var psd_ = psd.value;
    if (user_ == c) {
        alert('用户名正确');
        if (psd_ == p) {
            alert('密码正确');
            window.location.href = '../index.html';

        } else {
            alert('密码错误');
        }
    } else {
        alert('用户名错误');
    }

    //判断复选框是否被选中
    // var check_ = checked.checked;
    // if (check_ == true) {
    //     setCookie('user', user_);
    //     setCookie('psd', psd_);
    //     setCookie('isrember', check_);
    // }
}
