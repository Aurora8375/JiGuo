var pp_ = document.getElementsByClassName('pp1')[0];
var span_ = document.getElementsByClassName('span1')[0];
var div_ = document.getElementsByClassName('theleft')[0];
// 存储数据
var date = [];
// ajax函数
pp_.onclick = function() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('');
    ajax_.open('get', 'http://127.0.0.1:3000/report/new');
    ajax_.send();
    ajax_.onreadystatechange = function() {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                date = JSON.parse(ajax_.responseText);
                // 显示隐藏
                pp_.style.display = "none";
                span_.style.display = "block";
                // 调用后1秒显示
                setTimeout(function() {
                    show()
                }, 2000)
            } else {
                alert('数据加载错误')
            }
        }
    }
}

// 渲染数据  调用
var fl = true //开关
function show() {
    for (var item of date) {
        str = `
        <a href="../guid/detail.html">
        <img src="${item.img}">
        <div class="location">
            <p>${item.text}</p>
            <div class="tion">
                <div class="susu">
                    <div class="yuan"></div>
                    <span class="su1">${item.uName}</span>
                    <span class="su2">${item.endTime}</span>
                </div>
                <div class="liu">
                    <span>3</span>
                    <span>3</span>
                </div>
            </div>
        </div>
    </a>
    <div class="geli">
        <a href="../guid/detail.html">
            <p>关于Freeson 智能实木音箱还有 17 篇报告，点击查看</p>
        </a>
    </div>
    
        `
        var div1_ = document.createElement("div");
        div1_.className = "lt1"
        div1_.innerHTML = str;
        div_.appendChild(div1_);

    }
    // 判断按钮
    if (fl) {
        span_.style.display = "none"
        var jiazai_ = document.getElementsByClassName('jiazai')[0];
        var mengban_ = document.createElement("div");
        mengban_.setAttribute('class', 'm1');
        mengban_.innerHTML = '加载数据如下！！！！';
        jiazai_.appendChild(mengban_);
    }
}