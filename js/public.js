var playMore = document.getElementsByClassName('playMore')[0];
var dl_ = document.getElementsByClassName('wrap')[2].children[0];

playMore.onclick = function () {
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/useing/public')
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);

                for (var i = 0; i < 4; i++) {
                    var str = `<a href="detail.html">
                            <span class="top-tip shoufa">首发</span>
                            <img src="${res[i].img}" width="220" height="130" />
                            <div class="hot-con">
                                <h2 class="name">${res[i].text}</h2>
                                <p class="tabs graw">
                                    <span>2032</span>
                                    <span>20台</span>
                                </p>
                                <p class="sq"><span>1392</span>申请</p>
                                <p class="current graw">报告数量：8</p>
                            </div>
                        </a>`
                    var dt_ = document.createElement('dt');
                    dt_.innerHTML = str;
                    dl_.appendChild(dt_)
                    for (var j = 4; j < 8; j++) {
                        var str1 = `<a href="detail.html">
                        <span class="top-tip shoufa">首发</span>
                        <img src="${res[j].img}" width="220" height="130" />
                        <div class="hot-con">
                            <h2 class="name">${res[j].text}</h2>
                            <p class="tabs green">
                                <span>2032</span>
                                <span>20台</span>
                            </p>
                            <p class="sq"><span>1392</span>申请</p>
                            <p class="current green">查看试用名单</p>
                        </div>
                    </a>`
                        var dt_ = document.createElement('dt');
                        dt_.innerHTML = str1;
                        dl_.appendChild(dt_)
                    }

                }
            }
        }
    }
}
