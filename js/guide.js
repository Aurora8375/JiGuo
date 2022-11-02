
// 点击收藏

var playMore = document.getElementsByClassName('playMore')[0];
var ul_ = document.getElementById('myDiv')
console.log(ul_);
playMore.onclick = function () {
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/guid/new')
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var res = JSON.parse(ajax_.responseText);
                console.log(res[0]);
                for (var i = 0; i < res.length; i++) {
                    var str = `<a href="./detail.html">
                        <img src="${res[i].img}" width="220" height="130" />
                        <div class="info">
                            <p class="name">${res[i].text}</p>
                            <div class="tip fix">
                                <div class="right icon">
                                    <span class="xin">3</span>
                                    <span class="look">5</span>
                                </div>
                            </div>
                        </div>
                    </a>`
                    var li_ = document.createElement('li');
                    li_.innerHTML = str;
                    ul_.appendChild(li_)
                }

            }
        }
    }
}
// var xin_ = document.getElementsByClassName('xin')[0];
// xin_.addEventListener('click', function (e) {
//     e = e || window.event
//     window.event ? window.event.cancelBubble = ture : window.event.stopPropagation()
//     xin_.style.background = 'url(../img/xinRedh.png) no - repeat left center'
//     xin_.style.backgroundSize = '13px'
// }, false)