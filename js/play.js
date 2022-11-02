//点击时心变红
var xin = document.getElementsByClassName('xin');
var look = document.getElementsByClassName('look');
for (var i = 0; i < xin.length; i++) {

    xin[i].onclick = function () {
        this.style.background = 'url(../img/xinRedh.png) no-repeat left center';
        this.style.backgroundSize = '13px';
        var m = (this.firstChild.nodeValue) - 0;
        m++;
        this.innerHTML = m;


    }
}
//双击取消小红心
// for (var j = 0; j < xin.length; j++) {
//     xin[j].ondblclick = function () {
//         this.style.background = 'url(../img/xin.png) no-repeat left center';
//         this.style.backgroundSize = '13px';
//         var k = (this.firstChild.nodeValue) - 0;
//         console.log(k);
//         var n = k - 1;
//         console.log(n);
//         this.innerHTML = n;
//     }
// }

//底部渲染
var more = document.getElementsByClassName('more')[0];
console.log(more);
function show() {
    var ajax = new XMLHttpRequest() || new ActiveXObject('Micorosoft.XMLHTTP');
    ajax.open('get', 'http://127.0.0.1:3000/play/new');
    ajax.send();
    ajax.onreadystatechange = function () {

        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                var data = (JSON.parse(ajax.responseText));

                //渲染数据
                render(data);
            } else {
                console.log('请求失败');
            }
        }
    }

}
function render(data) {
    var ul = document.getElementsByClassName('ul')[0];

    for (var k = 0; k < 2; k++) {
        for (var g = 0; g < 8; g++) {

            var str = `
        <img src="${data[k][g].img}">
        <div class="info">
            <p class="name">${data[k][g].description}<span>${data[k][g].text}</span></p>
            <div class="tip ">
                <span class="price">${data[k][g].price}</span>
                <div class="right">
                    <span class="xin">${data[k][g].like}</span>
                    <span class="look">${data[k][g].words}</span>
                </div>
            </div>
        </div>
        
        `;

            var li = document.createElement('li');
            li.innerHTML = str;
            ul.appendChild(li);

        }
    }

    //刷新出来的小心心变红

    for (var i = 0; i < xin.length; i++) {
        xin[i].onclick = function () {
            this.style.background = 'url(../img/xinRedh.png) no-repeat left center';
            this.style.backgroundSize = '13px';
            var m = (this.firstChild.nodeValue) - 0;
            console.log(m);
            m++;
            this.innerHTML = m;
        }
    }
    //双击取消小红心
    // for (var j = 0; j < xin.length; j++) {
    //     xin[j].ondblclick = function () {
    //         this.style.background = 'url(../img/xin.png) no-repeat left center';
    //         this.style.backgroundSize = '13px';
    //         var m = (this.firstChild.nodeValue) - 0;
    //         console.log(m);
    //         m--;
    //         this.innerHTML = m;
    //     }
    // }



}

