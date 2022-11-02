//手机号码
var phone = document.getElementsByClassName('phone')[0];
// console.log(phone);
var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

//图片验证码
var text2 = document.getElementsByClassName('text2')[0];
// console.log(text2);

//验证码
var text3 = document.getElementsByClassName('text3')[0];
var yanz = document.getElementsByClassName('yanz')[0];
// console.log(text3, yanz);
var num = 60;
var timer;
yanz.onclick = function () {
    clearInterval(timer);
    timer = setInterval(function () {
        num--;
        yanz.innerHTML = `(${num})秒，重发`;
        if (num <= 0) {
            clearInterval(timer);
            yanz.innerHTML = '获取验证码';
            num = 60;
        }

    }, 1000)
    alert('本次验证码： ' + number);

}
var number = Math.round(Math.random() * 10000);
if (number < 1000) {
    number = number * 10;
}

//用户名
var username = document.getElementsByClassName('username')[0];
// console.log(username);
var user = /^[a-zA-Z0-9_-]{2,4}$/;//字母数字下划线 2-4个

//密码
var psd = document.getElementsByClassName('psd')[0];
var psd2 = document.getElementsByClassName('psd')[1];
var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,8}$/;
// console.log(psd, psd2);

//立即注册按钮
var btn1 = document.getElementsByClassName('btn1')[0];
// console.log(btn1);

//当点击注册的时候判断
btn1.onclick = function () {
    //手机号
    var P_value = phone.value;
    var str = reg.test(P_value);
    console.log(str);
    //图片验证
    var value2 = text2.value;
    //验证码
    var yanzm = text3.value;

    //用户名
    var user_ = username.value;
    var str3 = user.test(user_);
    console.log(str3);
    //密码
    var psd_ = psd.value;
    var psd2_ = psd2.value;
    var str4 = reg2.test(psd_);
    console.log(str4);


    if (str == true) {

        if (value2 == 'r2B7') {

            if (yanzm == number) {

                if (str3 == true) {

                    if (str4 == true) {

                        if (psd_ == psd2_) {
                            alert('注册成功');
                            // location.href = '../enter.html';
                            window.location.href = '../enter.html';
                            setCookie('user', user_);
                            setCookie('psd', psd_);

                        } else {
                            alert('密码不一致');
                        }
                    } else {
                        alert('密码6-8位（数字字母）');
                    }
                } else {
                    alert('用户名错误（字母数字下划线 2-4个）');
                }
            } else {
                alert('验证码错误');
            }
        } else {
            alert('图片验证错误');
        }
    } else {
        alert('手机号错误');
    }


}

