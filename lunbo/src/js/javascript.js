// require(['ajax'], function (ajs) {
//     console.log(ajs);
// })
var data = [{
        "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533655193258&di=5477332b51a632478b37c5dc37a10980&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fa1%2F20%2Fd%2F10.jpg",

    },
    {
        "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533655775883&di=9c70b6ed7634bbf08c043a3448944784&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20140711%2Fsy_65758317911.jpg",

    },
    {
        "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533655193257&di=f54fb96a0d7465f3b6dfd84bec14219f&imgtype=0&src=http%3A%2F%2Fpic6.photophoto.cn%2F20080109%2F0012024478743814_b.jpg",

    },
    {
        "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533655252387&di=c2270e6f2fc866d50eea32b85fa8e794&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3166804992%2C399876267%26fm%3D214%26gp%3D0.jpg",

    }
]

function Tab(obj) {
    this.obj = obj;
    this.init();
    this.renderToDom();
    this.Event();
    this.left;
    this.right;
}
Tab.prototype = {
    constructor: Tab,
    init: function () {
        this.slider = document.getElementById("slider");
        this.pics = null;
        this.olis = null;
        this.timer = null;
        this.count = 0;
    },
    Event: function () {
        this.onClick();
        if (this.obj.isauto) {
            this.time();
        }
        this.onMouseOv();
        this.leftClick();
        this.rightClick();
    },
    //渲染效果
    renderToDom: function () {
        var str = "<ul>",
            str1 = "<ol>";
        spn = `<span id="left"><</span><span id="right">></span>`;
        for (var i = 0; i < this.obj.datas.length; i++) {
            str += '<li><img src="' + this.obj.datas[i].img + '"</li>';
        }
        str += "</ul>";

        for (var i = 0; i < this.obj.datas.length; i++) {
            str1 += '<li>' + (i + 1) + '</li>';
        }
        str1 += "</ol>";
        this.slider.innerHTML = str + str1 + spn;
        this.pics = document.getElementsByTagName("ul")[0].getElementsByTagName("li");
        this.olis = document.getElementsByTagName("ol")[0].getElementsByTagName("li");
        this.left = document.getElementById('left');
        this.right = document.getElementById('right');
        this.olis[0].className = this.obj.name;
    },
    //单击效果
    onClick: function () {
        var that = this;
        for (var i = 0; i < this.olis.length; i++) {
            this.olis[i].index = i;
            this.olis[i].onclick = function () {
                that.change(this.index);
            }
        }
    },
    change: function (n) {
        for (var i = 0; i < this.pics.length; i++) {
            this.pics[i].style.display = "none";
            this.olis[i].className = "";
        }
        this.pics[n].style.display = "block";
        this.olis[n].className = this.obj.name;
        this.count = n;
    },
    //自动播
    autoplay: function () {
        //var that = this;
        this.count++;
        if (this.count > this.pics.length - 1) {
            this.count = 0;
        }
        this.change(this.count);
    },
    //隔多长时间播一次
    time: function () {
        var that = this;
        this.timer = setInterval(function () {
            that.autoplay();
        }, this.obj.speed);
    },
    //移入移出
    onMouseOv: function () {
        var that = this;
        this.slider.onmouseover = function () {
            clearInterval(that.timer);
        }
        this.slider.onmouseout = function () {
            that.time();
        }
    },
    //左击
    leftClick: function () {
        var that = this;
        this.left.onclick = function () {
            that.count--;
            if (that.count < 0) {
                that.count = that.pics.length - 1;
            }
            that.change(that.count);
        }
    },
    //右击
    rightClick: function () {
        var that = this;
        this.right.onclick = function () {
            that.autoplay();
        }
    }
}
new Tab({
    datas: data,
    isauto: true,
    speed: 1000,
    name: "hv"
});