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


// 点击渲染数据
// 点击
var load_ = document.getElementsByClassName('load1')[0];
var ul_ = document.getElementsByClassName('ull')[0];
load_.onclick = function() {
    // 请求数据
    var ajax_ = new XMLHttpRequest() || new ActiveXObject();
    ajax_.open('get', 'http://127.0.0.1:3000/play/new')
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                data = JSON.parse(ajax_.responseText);
                for (var i = 0; i < 2; i++) {
                    for (var j = 0; j < 8; j++) {
                        str = `
                                    <a href="./probation.html">
                                        <img src="${data[i][j].img}">
                                        <span id="p3">${data[i][j].text}</span>
                                        <p id="p4">${data[i][j].description}</p>
                                        <div class="susu"><span id="qiaq">${data[i][j].price}</span>
                                        <span>${data[i][j].like}</span>
                                        <span>${data[i][j].words}</span>
                                    </div>
                                    </a>
                    `
                            // 创建li
                        var li_ = document.createElement('li');
                        // 把内容添加到li
                        li_.innerHTML = str;
                        // 在追加到页面中
                        ul_.appendChild(li_);
                    }
                }
            }

        }

    }

}