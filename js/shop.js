var shop=document.getElementById("shop");
var str=document.cookie;
console.log(str);
shop.onclick=function(){
	console.log(str);
    if(str===""){
        window.location.href="login.html";
    }else{
        window.location.href="html/shop.html";
    }
}


