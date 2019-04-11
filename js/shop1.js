var check = document.getElementById("check1");
var check2 = document.getElementById("check2");
var ckb = document.getElementsByClassName("ckb");
var jian = document.getElementsByClassName("jian");
var jia = document.getElementsByClassName("jia");
var sum_all = document.getElementsByClassName("sum_all")[0];
var shopping = document.getElementsByClassName("shopping")[0];
var count = document.getElementById("count");
var del = document.getElementsByClassName("del");
var s = 0;
var sum = 0;
var cot = 0;
for (var p = 0; p < jia.length; p++) {
    (function () {
        jia[p].onclick = function () {
            var a = parseFloat(this.parentNode.nextElementSibling.lastElementChild.innerText) / parseFloat(this.previousElementSibling.value);
            this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1;
            this.parentNode.nextElementSibling.firstElementChild.innerText = "￥" + (parseFloat(this.parentNode.previousElementSibling.firstElementChild.innerText.substring(1)) * parseFloat(this.previousElementSibling.value)).toFixed(2);
            this.parentNode.nextElementSibling.lastElementChild.innerText = (a * parseFloat(this.previousElementSibling.value)).toFixed(2) + "kg";
            if (this.parentNode.parentNode.firstElementChild.firstElementChild.checked) {
                this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = parseInt(this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText) + 1;
                this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = (parseFloat(this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText) + parseFloat(this.parentNode.previousElementSibling.firstElementChild.innerText.substring(1))).toFixed(2);
            } else {
                this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = parseInt(this.previousElementSibling.value) + s;
                this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = (parseFloat(this.parentNode.nextElementSibling.firstElementChild.innerText.substring(1)) + sum).toFixed(2);
                cot++;
                if (cot === ckb.length) {
                    check.checked = true;
                    check2.checked = true;
                } else {
                    check.checked = false;
                    check2.checked = false;
                }
            }
            this.parentNode.parentNode.firstElementChild.firstElementChild.checked = true;
            s = parseInt(this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText);
            sum = parseFloat(this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText);
            count.innerText = cot;
        }
    })()
}
for (var p = 0; p < jian.length; p++) {
    (function () {
        jian[p].onclick = function () {
            var a = parseFloat(this.parentNode.nextElementSibling.lastElementChild.innerText) / parseFloat(this.nextElementSibling.value);
            if (this.parentNode.parentNode.firstElementChild.firstElementChild.checked) {
                if (parseInt(this.nextElementSibling.value) <= 1) {
                    this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = s;
                    this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = sum.toFixed(2);
                } else {
                    this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = parseInt(this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText) - 1;
                    this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = (parseFloat(this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText) - parseFloat(this.parentNode.previousElementSibling.firstElementChild.innerText.substring(1))).toFixed(2);
                }
            } else {
                // this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = s - parseInt(this.nextElementSibling.value);
                if (parseFloat(this.nextElementSibling.value) <= 1) {
                    this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = s + 1;
                    this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = (parseFloat(this.parentNode.previousElementSibling.firstElementChild.innerText.substring(1)) + sum).toFixed(2);
                    cot++;
                    if (cot === ckb.length) {
                        check.checked = true;
                        check2.checked = true;
                    } else {
                        check.checked = false;
                        check2.checked = false;
                    }
                }
                else {
                    this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = s + parseInt(this.nextElementSibling.value) - 1;
                    this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = (parseFloat(this.parentNode.nextElementSibling.firstElementChild.innerText.substring(1)) - parseFloat(this.parentNode.previousElementSibling.firstElementChild.innerText.substring(1)) + sum).toFixed(2);
                    cot++;
                    if (cot === ckb.length) {
                        check.checked = true;
                        check2.checked = true;
                    } else {
                        check.checked = false;
                        check2.checked = false;
                    }
                }
            }
            this.parentNode.parentNode.firstElementChild.firstElementChild.checked = true;
            s = parseInt(this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText);
            sum = parseFloat(this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText);
            if (parseFloat(this.nextElementSibling.value) <= 1) {
                this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = s;
                this.parentNode.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = sum.toFixed(2);
                this.nextElementSibling.value = "1";
                this.parentNode.nextElementSibling.firstElementChild.innerText = "￥" + (parseFloat(this.parentNode.previousElementSibling.firstElementChild.innerText.substring(1))).toFixed(2);
            } else {
                this.nextElementSibling.value = parseFloat(this.nextElementSibling.value) - 1;
                this.parentNode.nextElementSibling.firstElementChild.innerText = "￥" + (parseFloat(this.parentNode.previousElementSibling.firstElementChild.innerText.substring(1)) * parseFloat(this.nextElementSibling.value + ".00")).toFixed(2);
                this.parentNode.nextElementSibling.lastElementChild.innerText = (a * parseInt(this.nextElementSibling.value)).toFixed(2) + "kg";
            }
            count.innerText = cot;

        }

    })()
}
check.onclick = function () {
    if (check.checked) {
        sum = 0;
        s = 0;
        for (var c = 0; c < ckb.length; c++) {
            ckb[c].checked = true;
            sum += parseFloat(ckb[c].parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild.innerText.substring(1));
            s += parseFloat(ckb[c].parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.value)
        }
        check2.checked = true;
        cot = ckb.length;
    } else {
        for (var c = 0; c < ckb.length; c++) {
            ckb[c].checked = false;
        }
        check2.checked = false;
        cot = 0;
        sum = 0;
        s = 0;
    }
    count.innerText = cot;
    check.parentNode.parentNode.parentNode.lastElementChild.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = sum.toFixed(2);
    check.parentNode.parentNode.parentNode.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = s;

}


check2.onclick = function () {
    if (check2.checked) {
        sum = 0;
        s = 0;
        for (var c = 0; c < ckb.length; c++) {
            ckb[c].checked = true;
            sum += parseFloat(ckb[c].parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild.innerText.substring(1));
            s += parseFloat(ckb[c].parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.value)
        }
        check.checked = true;
        cot = ckb.length;
    } else {
        for (var c = 0; c < ckb.length; c++) {
            ckb[c].checked = false;
        }
        check.checked = false;
        cot = 0;
        sum = 0;
        s = 0;
    }
    count.innerText = cot;
    check.parentNode.parentNode.parentNode.lastElementChild.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = sum.toFixed(2);
    check.parentNode.parentNode.parentNode.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = s;
}

for (var cc = 0; cc < ckb.length; cc++) {
    ckb[cc].index = cc;
    ckb[cc].onclick = function () {
        if (this.checked) {
            cot++;
            sum += parseFloat(this.parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild.innerText.substring(1));
            s += parseFloat(this.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.value)
            if (cot === ckb.length) {
                check.checked = true;
                check2.checked = true;
            }
        } else {
            cot--;
            sum -= parseFloat(this.parentNode.parentNode.lastElementChild.previousElementSibling.firstElementChild.innerText.substring(1));
            s -= parseFloat(this.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.value)
            check.checked = false;
            check2.checked = false;
        }
        count.innerText = cot;
        check.parentNode.parentNode.parentNode.lastElementChild.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = sum.toFixed(2);
        check.parentNode.parentNode.parentNode.lastElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText = s;
    }


}
for (var d = 0; d < del.length; d++) {
    del[d].index = d;
    del[d].onclick = function () {
        if (confirm("确认删除吗？")) {
            if (this.parentNode.firstElementChild.firstElementChild.checked) {
                this.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText = (sum - parseFloat(this.previousElementSibling.firstElementChild.innerText.substring(1))).toFixed(2);
                sum = parseFloat(this.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText);
                this.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.innerText = s - parseFloat(this.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.value);
                s = parseFloat(this.parentNode.parentNode.nextElementSibling.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.innerText);
                count.innerText = --cot;
                this.parentNode.parentNode.removeChild(this.parentNode);

            } else {
                this.parentNode.parentNode.removeChild(this.parentNode);
                if (cot === ckb.length) {
                    check.checked = true;
                    check2.checked = true;
                }
            }
        }
    }
}
// for(let d=0;d<del.length;d++){
//     del[d].onclick=function(){
//         console.log(d);
//         this.parentNode.parentNode.nextElementSibling.parentNode.nextElementSibling.style.display="block";
//         del[d].parentNode.parentNode.nextElementSibling.parentNode.nextElementSibling.lastElementChild.lastElementChild.onclick=function(){
//             this.parentNode.parentNode.style.display="none";
//         }
//         del[d].parentNode.parentNode.nextElementSibling.parentNode.nextElementSibling.lastElementChild.firstElementChild.onclick=function(){
//              this.parentNode.parentNode.style.display="none";
// 			 if(del[d].parentNode.firstElementChild.firstElementChild.checked){
// 				 this.parentNode.parentNode.previousElementSibling.lastElementChild.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText=(sum-parseFloat(del[d].previousElementSibling.firstElementChild.innerText.substring(1))).toFixed(2);
// 				 this.parentNode.parentNode.previousElementSibling.lastElementChild.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.innerText=s-parseFloat(del[d].previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.value);
// 				 this.parentNode.parentNode.previousElementSibling.firstElementChild.firstElementChild.innerText=--cot;
// 				sum=parseFloat(this.parentNode.parentNode.previousElementSibling.lastElementChild.firstElementChild.lastElementChild.previousElementSibling.firstElementChild.innerText);
// 				s=parseFloat(this.parentNode.parentNode.previousElementSibling.lastElementChild.firstElementChild.lastElementChild.previousElementSibling.previousElementSibling.firstElementChild.innerText);

// 			 }
//               del[d].parentNode.parentNode.removeChild(del[d].parentNode);
//         }
//     }

// }