var time_ = document.getElementsByClassName('jishi')[0];

function km() {
    var nowTime = new Date();
    var tarjetTime = new Date(2022, 10, 13, 0, 0, 0);
    var gotime = tarjetTime - nowTime;
    var day = Math.floor(gotime / 1000 / 60 / 60 / 24);
    var h = parseInt(Math.floor(gotime / 1000 / 60 / 60 % 24));
    h = h >= 10 ? h : '0' + h
    var m = Math.floor(gotime / 1000 / 60 % 24)
    m = m >= 10 ? m : '0' + m
    var s = Math.floor(gotime / 1000 % 60)
    s = s >= 10 ? s : '0' + s
    var str = '申请时间剩余' + day + ' 天 ' + h + '  时 ' + m + '  分 ' + s + ' 秒 ';
    time_.innerHTML = str
}
var time = setInterval(km, 1000)
    // 申请
var btn_ = document.getElementsByClassName('but')[0];
var span1_ = document.getElementsByClassName('span1')[0];
var span2_ = document.getElementsByClassName('span2')[0];
var span1__ = span1_.innerHTML; //ren
var r_ = []; //人数
for (var i = 0; i < span1__.length; i++) {
    if (i <= 2) {
        r_.push(span1__[i])
    }
}
r_ = r_.join('')
var span2__ = span2_.innerHTML; //ren
var q_ = []; //人数
for (var j = 0; j < span2__.length; j++) {
    if (j <= 1) {
        q_.push(span2__[j])
    }
}
q_ = q_.join('');
btn_.onclick = function() {
        r_++;
        span1_.innerHTML = r_ + '人申请';
        q_--;
        span2_.innerHTML = q_ + '台';
        if (q_ == 0) {
            alert('商品以抢完')
        }

    }
    // 返回顶部
var ding_ = document.getElementsByClassName('bongbu')[0];
window.onscroll = function() {
    // 获取滚动条的高度
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    // 获取屏幕高度
    var client = document.documentElement.clientHeight;
    // 判断
    if (top > client) {
        ding_.style.display = "block";
    } else {
        ding_.style.display = "none";
    }
    // 点击回到顶部
    ding_.onclick = function() {
        var time = setInterval(
            function() {
                var top = document.documentElement.scrollTop || document.body.scrollTop;
                var shang = Math.floor(top / 6);
                document.documentElement.scrollTop = document.body.scrollTop = top - shang;
                if (top == 0) {
                    clearInterval(time)
                }
            }, 50)
    }
}