var oli = document.querySelectorAll("#ul li");
var pre = document.getElementById("ls");
var next = document.getElementById("rs");
var lis = document.querySelectorAll("#pages li");
var banner_pic = document.getElementById("banner_pic");
var i = 0;
var timer = null;
autoplay();

pre.onclick = function () {
    i--;
    if (i <= -1) {
        i = 7;
    }
    change();
    clear();
}
next.onclick = function () {
    i++;
    if (i >= 8) {
        i = 0;
    }
    change();
    clear();
}
// 					
for (var k = 0; k < lis.length; k++) {
    lis[k].index = k;
    lis[k].onmouseover = function () {
        i = this.index;
        change();
        clear();
    }
}
banner_pic.onmouseover = function () {
    clearInterval(timer);
}
banner_pic.onmouseout = function () {
    autoplay();
}



function autoplay() {
    timer = setInterval(function () {
        i++;
        if (i >= 8) {
            i = 0;
        }
        change();
        clear();
    }, 5000)
}

function change() {
    for (var j = 0; j < oli.length; j++) {
        oli[j].style.opacity = 0;
    }
    oli[i].style.opacity = 1;
}

function clear() {
    for (var t = 0; t < lis.length; t++) {
        lis[t].style.background = "none";
        lis[t].style.boxShadow = "none";
    }
    lis[i].style.background = "#fff";
    lis[i].style.boxShadow = "0 0 15px #ccc";
}
/*----------------------------------banner选项卡--------------------------------------------------*/ 

var choose_card1=document.getElementById("choose_card1");
var choose_card2=document.getElementById("choose_card2");
var choose_oli=document.querySelectorAll("#choose_card1 li");
var choose_div=document.getElementsByClassName("choose_div");
var choose_wrap=document.getElementsByClassName("choose_wrap")[0];
var cha=document.querySelectorAll(".cha span");
for(var ch=0;ch<choose_oli.length;ch++){
	choose_oli[ch].index=ch;
	choose_oli[ch].onmouseover=function(){
		for(var ch1=0;ch1<choose_oli.length;ch1++){
			choose_oli[ch1].style.borderBottom="2px solid #fff";
			choose_oli[ch1].style.color="#666";
		}
		this.style.borderBottom="2px solid #e01121";
		this.style.color="#e01121";
		choose_card1.style.top="-45px";
		choose_card1.style.transition="0.2s";
		choose_card2.style.display="none";
		
		for(chd=0;chd<choose_div.length;chd++){
			choose_div[chd].style.display="none";
		}
		choose_div[this.index].style.display="block";
		choose_wrap.style.top="30px";
		
	}
	
}
for(var cha1=0;cha1<cha.length;cha1++){
	cha[cha1].index=cha1;
	cha[cha1].onclick=function(){
			for(var ch1=0;ch1<choose_oli.length;ch1++){
				choose_oli[ch1].style.borderBottom="2px solid #fff";
				choose_oli[ch1].style.color="#bea68d";
			}
			choose_card1.style.top="0px";
			choose_card1.style.transition="0.2s";
			choose_card2.style.display="block";
			choose_wrap.style.top="185px";
			choose_oli[3].onmouseover=null;
			setTimeout(function(){
				choose_oli[3].onmouseover=function(){
					for(var ch1=0;ch1<choose_oli.length;ch1++){
						choose_oli[ch1].style.borderBottom="2px solid #fff";
						choose_oli[ch1].style.color="#666";
					}
					this.style.borderBottom="2px solid #e01121";
					this.style.color="#e01121";
					choose_card1.style.top="-45px";
					choose_card1.style.transition="0.2s";
					choose_card2.style.display="none";
					
					for(chd=0;chd<choose_div.length;chd++){
						choose_div[chd].style.display="none";
					}
					choose_div[this.index].style.display="block";
					choose_wrap.style.top="30px";
					
				}
			},1000)
			
			
	}
}
	var huafei11=document.getElementsByClassName("huafei11");
var hf_choose=document.getElementsByClassName("hf_choose1");
for(var hf=0;hf<huafei11.length;hf++){
    huafei11[hf].index=hf;
    huafei11[hf].onmouseover=function(){
        for(hf1=0;hf1<hf_choose.length;hf1++){
             hf_choose[hf1].style.display="none";
             huafei11[hf1].style.color="#666";
        }
        hf_choose[this.index].style.display="block";
         huafei11[this.index].style.color="#e01121";
    }
}

var select=document.getElementById("select");
var youhui=document.getElementById("youhui");
var select2=document.getElementById("select2");
var youhui2=document.getElementById("youhui2");
var select3=document.getElementById("select3");
var youhui3=document.getElementById("youhui3");
select.onclick=function(){
    youhui.innerHTML=`￥${(parseInt(select.value)*0.98).toFixed(1)} -￥${(parseInt(select.value)+1).toFixed(1)}`
}
select2.onclick=function(){
    if(select2.value==="50"){
         youhui2.innerHTML="￥7.5-￥10.0";
    }
    if(select2.value==="100"){
         youhui2.innerHTML="￥9.95-￥20.0";
    }
    if(select2.value==="200"){
         youhui2.innerHTML="￥19.9-￥20.5";
    }
    if(select2.value==="300"){
         youhui2.innerHTML="￥29.0-￥29.9";
    }
    if(select2.value==="500"){
         youhui2.innerHTML="￥49.0-￥50.0";
    }
}
select3.onclick=function(){
    if(select3.value==="38"){
         youhui3.innerHTML="50分钟300M流量";
    }
    if(select3.value==="48"){
         youhui3.innerHTML="50分钟500M流量";
    }
    if(select3.value==="58"){
         youhui3.innerHTML="100分钟500M流量";
    }
    if(select3.value==="88"){
         youhui3.innerHTML="200分钟700M流量";
    }
    if(select3.value==="138"){
         youhui3.innerHTML="500分钟1G流量";
    }
    if(select3.value==="158"){
         youhui3.innerHTML="500分钟2G流量";
    }
    if(select3.value==="238"){
         youhui3.innerHTML="1000分钟2G流量";
    }
}
var jp=document.getElementsByClassName("jp");
var jd=document.getElementsByClassName("jd");
var jipiao=document.getElementsByClassName("jipiao")[0];
var jiudian=document.getElementsByClassName("jiudian")[0];
var jo=0;
var yx=document.getElementsByClassName("yx");
var youxi=document.getElementsByClassName("youxi")[0];
var yo=0;
for(var piao=0;piao<jp.length;piao++){
    jp[piao].index=piao;
    jp[piao].onmouseover=function(){
        for(var qq=0;qq<jp.length;qq++){
            jp[qq].style.color="#666";
        }
        this.style.color="#e01121";
        if(this.index===0){
            zigun(jipiao,"right",0);
            jo=0;
        }else if(this.index===1){
            if(this.index>jo){
                zigun(jipiao,"left",-168);
            }else{
                zigun(jipiao,"right",-168);
            }
        }else{
            zigun(jipiao,"left",-336);
            jo=2;
        }
    }
}
for(var dian=0;dian<jd.length;dian++){
     jd[dian].index=dian;
    jd[dian].onmouseover=function(){
        for(var qq=0;qq<jd.length;qq++){
            jd[qq].style.color="#666";
        }
         this.style.color="#e01121";
         if(this.index===0){
             zigun(jiudian,"right",0)
         }else{
             zigun(jiudian,"left",-168)
         }
    }
}
for(var you=0;you<yx.length;you++){
    yx[you].index=you;
    yx[you].onmouseover=function(){
        for(var qq=0;qq<yx.length;qq++){
            yx[qq].style.color="#666";
        }
        this.style.color="#e01121";
        if(this.index===0){
            zigun(youxi,"right",0);
            yo=0;
        }else if(this.index===1){
            if(this.index>yo){
                zigun(youxi,"left",-168);
            }else{
                zigun(youxi,"right",-168);
            }
        }else{
            zigun(youxi,"left",-336);
            yo=2;
        }
    }
}
var huafei_txt=document.getElementById("huafei_txt");
var huafei_txt20=document.getElementById("huafei_txt20");
var huafei_txt21=document.getElementById("huafei_txt21");
huafei_txt.onkeyup=function(){
    if(!/^\d/.test(this.value)){
        this.value="";
    }else{
        if(Number(this.value)!==parseFloat(this.value)){
            this.value=parseFloat(this.value);
        }else if(this.value.split("").length>11){
          this.value=this.value.substring(0,11);
       }
    }
}
huafei_txt20.onkeyup=function(){
    if(!/^\d/.test(this.value)){
        this.value="";
    }else{
        if(Number(this.value)!==parseFloat(this.value)){
            this.value=parseFloat(this.value);
        }else if(this.value.split("").length>11){
          this.value=this.value.substring(0,11);
       }
    }
}
huafei_txt21.onkeyup=function(){
    if(!/^\d/.test(this.value)){
        this.value="";
    }else{
        if(Number(this.value)!==parseFloat(this.value)){
            this.value=parseFloat(this.value);
        }else if(this.value.split("").length>11){
          this.value=this.value.substring(0,11);
       }
    }
}
/*------------------------------------二级导航-------------------------------------*/
var banner_oli = document.querySelectorAll("#banner_nav li");
var banner=document.getElementById("banner");
var banner_nav = document.getElementById("banner_nav")
var banner_nav2 = document.getElementsByClassName("banner_nav2");
var nav = document.querySelector("#banner nav");
var search_instead2 = document.getElementById("search_instead2");
var search_instead1 = document.getElementById("search_instead1");
var search_wrap = document.getElementsByClassName("search_wrap")[0];
var search_input = document.getElementsByClassName("search_input")[0];
for (var banneri = 0; banneri < banner_oli.length; banneri++) {
    banner_oli[banneri].index = banneri;
    banner_oli[banneri].onmouseover = function () {
        for (var bannerj = 0; bannerj < banner_nav2.length; bannerj++) {
            banner_nav2[bannerj].style.display = "none";
        }
        banner_nav2[this.index].style.display = "block";
    }
    banner_oli[banneri].onmouseout = function () {
        banner_nav2[this.index].style.display = "none";
    }
}
for (var banneri = 0; banneri < banner_oli.length; banneri++) {
    banner_nav2[banneri].index = banneri;
    banner_nav2[banneri].onmouseover = function () {
        banner_nav2[this.index].style.display = "block";
    }
    banner_nav2[banneri].onmouseout = function () {
        banner_nav2[this.index].style.display = "none";
    }
}
window.onscroll = function () {
    if (document.documentElement.scrollTop < 171) {
        nav.style.position = "relative";
        for (var bannerk = 0; bannerk < banner_nav2.length; bannerk++) {
            banner_nav2[bannerk].style.position = "absolute";
            banner_nav2[bannerk].style.transition="0.2s";
            banner_nav2[bannerk].style.top = "0";
            banner_nav2[bannerk].style.left = "190px";
            

        }

    }
    if (document.documentElement.scrollTop >= 171) {
        nav.style.position = "static";
        for (var bannerk = 0; bannerk < banner_nav2.length; bannerk++) {
            banner_nav2[bannerk].style.position = "fixed";
            banner_nav2[bannerk].style.transition="0.8s";
            banner_nav2[bannerk].style.top = "0";
            banner_nav2[bannerk].style.left = banner.offsetLeft +nav.offsetWidth+ "px";

        }
        if (document.documentElement.scrollTop > 660) {
            search_top.style.top = "0";
            search_instead2.appendChild(search_input);
            tishi.style.background = "#efefef";
            for (var bannerm = 0; bannerm < banner_nav2.length; bannerm++) {
            banner_nav2[bannerm].style.display = "none";

        }

        }
        else {
            search_top.style.top = "-60px";
            search_instead1.appendChild(search_input);
            tishi.style.background = "#fff";
        }
        search_top.style.transition = "0.8s";
    }

}

/*---------------------------右边固定栏-----------------------------*/


var fixed_oa = document.querySelectorAll("#ul_fixed li");
var fixed_oa2 = document.getElementsByClassName("fixed_a2");
for (var fixedi = 0; fixedi < fixed_oa.length; fixedi++) {
    fixed_oa[fixedi].index = fixedi;
    fixed_oa[fixedi].onmouseover = function () {
        fixed_move(fixed_oa[this.index].firstElementChild.nextElementSibling, "left", -60);
        fixed_oa[this.index].firstElementChild.nextElementSibling.style.background = "#c81623";
        fixed_oa[this.index].firstElementChild.style.background = "#c81623";


    }
    fixed_oa[fixedi].onmouseout = function () {
        fixed_move(fixed_oa[this.index].firstElementChild.nextElementSibling, "right", 0)
        fixed_oa[this.index].firstElementChild.nextElementSibling.style.background = "#7a6e6e";
        fixed_oa[this.index].firstElementChild.style.background = "#7a6e6e";
    }
}
function fixed_move(ele, dir, end) {
    clearInterval(ele.timer)
    if (dir === "left") {
        ele.timer = setInterval(function () {
            ele.style.left = ele.offsetLeft - 55 + "px";
            if (ele.offsetLeft <= end) {
                clearInterval(ele.timer);
                ele.style.left = end + "px";
            }
        })
    } else {
        ele.timer = setInterval(function () {
            ele.style.left = ele.offsetLeft + 55 + "px";
            if (ele.offsetLeft >= end) {
                clearInterval(ele.timer);
                ele.style.left = end + "px";
            }
        });
    }
}

/*-------------------------商品列表----------------------------*/
var hmgg_ul = document.getElementById("hmgg_ul");
var no_padding = document.getElementsByClassName("no_padding");
var ajax = new XMLHttpRequest;
ajax.open("get", "php/list.php", true);
ajax.send(null);
ajax.onreadystatechange = function () {
    var str = "";
    if (ajax.readyState === 4 && ajax.status === 200) {
        var data = JSON.parse(ajax.responseText);
        for (var i = 0; i < data.length; i++) {
            if (data[i].content) {
                str += `<li class="aft"><a href=""><img src="${data[i].image}"></a>
				<p>${data[i].content}</p>
				<span>￥<em>${data[i].price}</em></span>
                <div class="seem">找相似</div>
			</li>`
            }
            else {
                str += `<li class="no_padding"><a href=""><img src="${data[i].image}"></a>
			</li>`

            }

        }
        hmgg_ul.innerHTML = str;
    }
}




/*------------------------搜索框-----------------------------------*/
var txt = document.getElementById("tishi");
var search_link1 = document.getElementById("search_link1");
var timer = null;
txt.onkeyup = function () {
    var ajax1 = new XMLHttpRequest;
    ajax1.open("get", "php/search.php?cont=" + this.value, true);
    ajax1.send(null);
    ajax1.onreadystatechange = function () {
        if (ajax1.readyState === 4 && ajax1.status === 200) {
            var data = JSON.parse(ajax1.responseText).suggestKeycords;
            search_link1.style.display = "block";
            var str = "";
            for (var i = 0; i < data.length; i++) {
                str += `<li><a href="https://search.jd.com/Search?keyword=${data[i]}&enc=utf-8">${data[i]}</a></li>`;
            }
            search_link1.innerHTML = str + `	<p>关闭</p>`;
        }
    }
}
search_link1.onmouseleave = function () {
    search_link1.style.display = "none";
}
txt.onblur = function () {
    timer = setTimeout(function () {
        search_link1.style.display = "none";
    }, 200)

}
txt.onfocus = function () {
    clearTimeout(timer);
    if (!this.value) {
        search_link1.style.display = "none";
    } else {
        search_link1.style.display = "block";
        var search_li = document.querySelectorAll("#search_link1 li");
    }
}

/*-----------------------------京东秒杀计时器--------------------------------------*/
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
function addZero(n) {
    return n < 10 ? "0" + n : n
}
countDown(2019, 1, 3);
setInterval(function () {
    countDown(2019, 1, 3);
}, 1000)
function countDown(a, b, c) {
    var d = new Date();
    var d1 = new Date(a, b, c);
    var timeC = d1.getTime() - d.getTime();
    timeC /= 1000;
    var hours = parseInt(timeC / 60 / 60);
    var mins = parseInt((timeC - hours * 60 * 60) / 60);
    var secs = parseInt(timeC - hours * 60 * 60 - mins * 60);
    box1.innerHTML = `${addZero(hours)}`;
    box2.innerHTML = `${addZero(mins)}`;
    box3.innerHTML = `${addZero(secs)}`;
}

/*---------------------------------------------------------------------*/
var sul = document.getElementById("obox");
var pre = document.getElementById("pre");
var next = document.getElementById("next");
var q = 0;
var times = null;
next.onclick = function () {
    q++;
    if (q >= 6) {
        sul.style.left = "0px";
        q = 1;
    }
    dian1(sul, "left", -800 * q)
}
pre.onclick = function () {
    q--;
    if (q <= -1) {
        sul.style.left = "-4000px";
        q = 4;
    }
    dian1(sul, "right", -800 * q)
}

function dian1(ele, dir, end) {
    clearInterval(ele.times)
    if (dir === "left") {
        ele.times = setInterval(function () {
            ele.style.left = ele.offsetLeft - 10 + "px";
            if (ele.offsetLeft <= end) {
                clearInterval(ele.times)
                ele.style.left = end + "px";
            }
        })
    } else {
        ele.times = setInterval(function () {
            ele.style.left = ele.offsetLeft + 10 + "px";
            if (ele.offsetLeft >= end) {
                clearInterval(ele.times)
                ele.style.left = end + "px";
            }
        })
    }

}
/*-------------------------------------------------------------------------------------------*/
var ful = document.getElementById("ziguntu");
var pages = document.querySelectorAll("#zigundian li");
var ozigun = document.getElementById("zigun")
var x = 0;
var timef = null;
timef = setInterval(function () {
    x++;
    if (x >= 3) {
        ful.style.left = "0px";
        x = 1;
    }
    zigun(ful, "left", -180 * x);
    pageCss()
}, 3000)

for (var z = 0; z < pages.length; z++) {
    pages[z].index = z;
    pages[z].onmouseover = function () {
        if (this.index > x) {
            zigun(ful, "left", -180 * this.index)
        } else if(x>=2){
            ful.style.left = "0px";
              zigun(ful, "left", -180 * this.index)
            }else{
            zigun(ful, "right", -180 * this.index)
        }
        x = this.index;
        pageCss()
    }
}
function pageCss() {
    for (var p = 0; p < pages.length; p++) {
        pages[p].style.background = "#c0c0c0";
    }
    pages[x === 2 ? 0 : x].style.background = "#e33333";
}
function zigun(ele, dir, end) {
    clearInterval(ele.timef);
    if (dir === "left") {
        ele.timef = setInterval(function () {
            ele.style.left = ele.offsetLeft - 5 + "px";
            if (ele.offsetLeft <= end) {
                clearInterval(ele.timef);
                ele.style.left = end + "px";
            }
        })
    } else {
        ele.timef = setInterval(function () {
            ele.style.left = ele.offsetLeft + 5 + "px";
            if (ele.offsetLeft >= end) {
                clearInterval(ele.timef);
                ele.style.left = end + "px";
            }
        })
    }

}
/*-----------------------------------主会场--------------------------------------------*/
var oi_1 = document.querySelectorAll(".oi1 i");
var oi_2 = document.querySelectorAll(".oi2 i");
var oi_3 = document.querySelectorAll(".oi3 i");
var oi_4 = document.querySelectorAll(".oi4 i");
var oi_5 = document.querySelectorAll(".oi5 i");
var oi1 = document.querySelectorAll(".zhc_p i");
var oi2 = document.querySelectorAll(".zhc_p1 i");
var oi3 = document.querySelectorAll(".mi_p1 i");
var zhc_lb = document.getElementById("zhc_lb");
var zhc_lb1= document.getElementById("zhc_lb1");
var zhc_lb2 = document.getElementById("zhc_lb3");
var zhc_lb3 = document.getElementById("zhc_lb4");
var zhc_lb4 = document.getElementById("zhc_lb5");
var zhc_oli = document.querySelectorAll("#zhc_choose li a");
var huimai = document.getElementsByClassName("huimai")[0];
var mi = document.getElementsByClassName("mi")[0];
var pre1 = document.getElementById("pre1");
var next1 = document.getElementById("next1");
var pre2 = document.getElementById("pre2");
var next2 = document.getElementById("next2");
var quan = document.getElementById("quan");
var zhc_item=document.getElementsByClassName("zhc_item");
var ztimer = null;
var zhc = 0;
var mi1 = 0;
oi_1[0].onmouseover = function () {
    for (var j = 0; j < oi_1.length; j++) {
        oi_1[j].style.border = "2px solid #b9beba";
        oi_1[j].style.background = "none";
        oi_1[j].style.boxShadow = "none";

    }
    oi_1[0].style.border = "2px solid transparent";
    oi_1[0].style.background = "#eb3436";
    oi_1[0].style.boxShadow = "0 0 8px #eb3436";
    zigun(zhc_lb, "right", 0);

}
oi_1[1].onmouseover = function () {
    for (var j = 0; j < oi_1.length; j++) {
        oi_1[j].style.border = "2px solid #b9beba";
        oi_1[j].style.background = "none";
        oi_1[j].style.boxShadow = "none";

    }
    oi_1[1].style.border = "2px solid transparent";
    oi_1[1].style.background = "#eb3436";
    oi_1[1].style.boxShadow = "0 0 8px #eb3436";
    zigun(zhc_lb, "left", -350);

}
oi_2[0].onmouseover = function () {
    for (var j = 0; j < oi_2.length; j++) {
        oi_2[j].style.border = "2px solid #b9beba";
        oi_2[j].style.background = "none";
        oi_2[j].style.boxShadow = "none";

    }
    oi_2[0].style.border = "2px solid transparent";
    oi_2[0].style.background = "#eb3436";
    oi_2[0].style.boxShadow = "0 0 8px #eb3436";
    zigun(zhc_lb1, "right", 0);

}
oi_2[1].onmouseover = function () {
    for (var j = 0; j < oi_2.length; j++) {
        oi_2[j].style.border = "2px solid #b9beba";
        oi_2[j].style.background = "none";
        oi_2[j].style.boxShadow = "none";

    }
    oi_2[1].style.border = "2px solid transparent";
    oi_2[1].style.background = "#eb3436";
    oi_2[1].style.boxShadow = "0 0 8px #eb3436";
    zigun(zhc_lb1, "left", -350);

}
oi_3[0].onmouseover = function () {
    for (var j = 0; j < oi_3.length; j++) {
        oi_1[j].style.border = "2px solid #b9beba";
        oi_1[j].style.background = "none";
        oi_1[j].style.boxShadow = "none";

    }
    oi_3[0].style.border = "2px solid transparent";
    oi_3[0].style.background = "#eb3436";
    oi_3[0].style.boxShadow = "0 0 8px #eb3436";
    zigun(zhc_lb2, "right", 0);

}
oi_3[1].onmouseover = function () {
    for (var j = 0; j < oi_3.length; j++) {
        oi_3[j].style.border = "2px solid #b9beba";
        oi_3[j].style.background = "none";
        oi_3[j].style.boxShadow = "none";

    }
    oi_3[1].style.border = "2px solid transparent";
    oi_3[1].style.background = "#eb3436";
    oi_3[1].style.boxShadow = "0 0 8px #eb3436";
    zigun(zhc_lb2, "left", -350);

}
oi_4[0].onmouseover = function () {
    for (var j = 0; j < oi_4.length; j++) {
        oi_4[j].style.border = "2px solid #b9beba";
        oi_4[j].style.background = "none";
        oi_4[j].style.boxShadow = "none";

    }
    oi_4[0].style.border = "2px solid transparent";
    oi_4[0].style.background = "#eb3436";
    oi_4[0].style.boxShadow = "0 0 8px #eb3436";
    zigun(zhc_lb3, "right", 0);

}
oi_4[1].onmouseover = function () {
    for (var j = 0; j < oi_4.length; j++) {
        oi_4[j].style.border = "2px solid #b9beba";
        oi_4[j].style.background = "none";
        oi_4[j].style.boxShadow = "none";

    }
    oi_4[1].style.border = "2px solid transparent";
    oi_4[1].style.background = "#eb3436";
    oi_4[1].style.boxShadow = "0 0 8px #eb3436";
    zigun(zhc_lb3, "left", -350);

}
oi_5[0].onmouseover = function () {
    for (var j = 0; j < oi_5.length; j++) {
        oi_5[j].style.border = "2px solid #b9beba";
        oi_5[j].style.background = "none";
        oi_5[j].style.boxShadow = "none";

    }
    oi_5[0].style.border = "2px solid transparent";
    oi_5[0].style.background = "#eb3436";
    oi_5[0].style.boxShadow = "0 0 8px #eb3436";
    zigun(zhc_lb4, "right", 0);

}
oi_5[1].onmouseover = function () {
    for (var j = 0; j < oi_5.length; j++) {
        oi_5[j].style.border = "2px solid #b9beba";
        oi_5[j].style.background = "none";
        oi_5[j].style.boxShadow = "none";

    }
    oi_5[1].style.border = "2px solid transparent";
    oi_5[1].style.background = "#eb3436";
    oi_5[1].style.boxShadow = "0 0 8px #eb3436";
    zigun(zhc_lb4, "left", -350);

}
for (var f = 0; f < zhc_oli.length; f++) {
    zhc_oli[f].index = f;
    zhc_oli[f].onmouseover = function () {
        for (var j = 0; j < zhc_oli.length; j++) {
            zhc_oli[j].style.color = "#666";
            zhc_item[j].style.display="none";

        }
        zhc_oli[this.index].style.color = "#ed713d";
          zhc_item[this.index].style.display="block";
    }
}
ztimer = setInterval(function () {
    zhc++;
    if (zhc >= 4) {
        huimai.style.left = "0px";
        zhc = 1;
    }
    zigun(huimai, "left", -350 * zhc);
    zhcCss();
}, 5000)

for (let zz = 0; zz < oi1.length; zz++) {
    oi1[zz].onmouseover = function () {
        if (zz > zhc) {
            zigun(huimai, "left", -350 * zz)
        } else if (zhc >= 3) {
            huimai.style.left = "0px";
            zigun(huimai, "left", -350 * zz)

        }
        else {
            zigun(huimai, "right", -350 * zz)
        }
        zhc = zz;
        zhcCss()
    }
}

next1.onclick = function () {
    zhc++;
    if (zhc >= 4) {
        huimai.style.left = "0px";
        zhc = 1;
    }
    zigun(huimai, "left", -350 * zhc)
    zhcCss();
}
pre1.onclick = function () {
    zhc--;
    if (zhc <= -1) {
        huimai.style.left = "-1050px";
        zhc = 3;
    }
    zigun(huimai, "right", -350 * zhc)
    zhcCss();
}
function zhcCss() {
    for (var j = 0; j < oi1.length; j++) {
        oi1[j].style.border = "2px solid #b9beba";
        oi1[j].style.background = "none";
        oi1[j].style.boxShadow = "none";

    }
    oi1[zhc === 3 ? 0 : zhc].style.background = "#eb3436";
    oi1[zhc === 3 ? 0 : zhc].style.border = "2px solid transparent";
    oi1[zhc === 3 ? 0 : zhc].style.boxShadow = "0 0 8px #eb3436";
}
function miCss() {
    for (var j = 0; j < oi3.length; j++) {
        oi3[j].style.border = "2px solid #b9beba";
        oi3[j].style.background = "none";
        oi3[j].style.boxShadow = "none";

    }
    oi3[mi1 === 3 ? 0 : mi1].style.background = "#eb3436";
    oi3[mi1 === 3 ? 0 : mi1].style.border = "2px solid transparent";
    oi3[mi1 === 3 ? 0 : mi1].style.boxShadow = "0 0 8px #eb3436";
}
oi2[0].onmouseover = function () {
    for (var j = 0; j < oi2.length; j++) {
        oi2[j].style.border = "2px solid #b9beba";
        oi2[j].style.background = "none";
        oi2[j].style.boxShadow = "none";

    }
    oi2[0].style.border = "2px solid transparent";
    oi2[0].style.background = "#eb3436";
    oi2[0].style.boxShadow = "0 0 8px #eb3436";
    zigun(quan, "right", 0);

}
oi2[1].onmouseover = function () {
    for (var j = 0; j < oi2.length; j++) {
        oi2[j].style.border = "2px solid #b9beba";
        oi2[j].style.background = "none";
        oi2[j].style.boxShadow = "none";

    }
    oi2[1].style.border = "2px solid transparent";
    oi2[1].style.background = "#eb3436";
    oi2[1].style.boxShadow = "0 0 8px #eb3436";
    zigun(quan, "left", -350);

}
setInterval(function () {
    mi1++;
    if (mi1 >= 4) {
        mi.style.left = "0px";
        mi1 = 1;
    }
    zigun(mi, "left", -350 * mi1);
    miCss();
}, 5000)

for (let mm = 0; mm < oi3.length; mm++) {
    oi3[mm].onmouseover = function () {
        if (mm > mi1) {
            zigun(mi, "left", -350 * mm)
        } else if(mi1>=3){
            mi.style.left = "0px";
            zigun(mi, "left", -350 * mm)
        } else{
            zigun(mi, "right", -350 * mm)
        }
        mi1 = mm;
        miCss()
    }
}

next2.onclick = function () {
    mi1++;
    if (mi1 >= 4) {
        mi.style.left = "0px";
        mi1 = 1;
    }
    zigun(mi, "left", -350 * mi1)
    zhcCss();
}
pre2.onclick = function () {
    mi1--;
    if (mi1 <= -1) {
        mi.style.left = "-1050px";
        mi1 = 3;
    }
    zigun(mi, "right", -350 * mi1)
    miCss();
}
/*----------------------------------特色推荐---------------------------------------------*/
var tstj = document.getElementById("tstj4");
var oi4 = document.querySelectorAll(".tt_p1 i");
var pre3 = document.getElementById("pre3");
var next4 = document.getElementById("next3");
var tt = 0;
var ttimer = null;
ttimer = setInterval(function () {
    tt++;
    if (tt >= 5) {
        tstj.style.left = "0px";
        tt = 1;
    }
    tts(tstj, "left", -1192 * tt);
    ttCss();
}, 5000)
for (let ss = 0; ss < oi4.length; ss++) {
    oi4[ss].onmouseover = function () {
        if (ss > tt) {
            tts(tstj, "left", -1192 * ss)
        } else if (tt >= 4) {
            tstj.style.left = "0px";
            tts(tstj, "left", -1192 * ss)


        } else {
            tts(tstj, "right", -1192 * ss)
        }
        tt = ss;
        ttCss()
    }
}
next3.onclick = function () {
    tt++;
    if (tt >= 5) {
        tstj.style.left = "0px";
        tt = 1;
    }
    tts(tstj, "left", -1192 * tt)
    ttCss();
}
pre3.onclick = function () {
    tt--;
    if (tt <= -1) {
        tstj.style.left = "-4768px";
        tt = 3;
    }
    tts(tstj, "right", -1192 * tt)
    ttCss();
}
function ttCss() {
    for (var j = 0; j < oi4.length; j++) {
        oi4[j].style.border = "2px solid #b9beba";
        oi4[j].style.background = "none";
        oi4[j].style.boxShadow = "none";

    }
    oi4[tt === 4 ? 0 : tt].style.background = "#eb3436";
    oi4[tt === 4 ? 0 : tt].style.border = "2px solid transparent";
    oi4[tt === 4 ? 0 : tt].style.boxShadow = "0 0 8px #eb3436";
}

function tts(ele, dir, end) {
    clearInterval(ele.timef);
    if (dir === "left") {
        ele.timef = setInterval(function () {
            ele.style.left = ele.offsetLeft - 30 + "px";
            if (ele.offsetLeft <= end) {
                clearInterval(ele.timef);
                ele.style.left = end + "px";
            }
        })
    } else {
        ele.timef = setInterval(function () {
            ele.style.left = ele.offsetLeft + 30 + "px";
            if (ele.offsetLeft >= end) {
                clearInterval(ele.timef);
                ele.style.left = end + "px";
            }
        })
    }

}
