window.onload=function () {
    let imgs=document.querySelectorAll(".banner img");
    let dots=document.querySelectorAll(".icon-lunbodian");
    let banner=document.querySelectorAll(".banner")[0];
    let leftBtn=document.querySelectorAll(".icon-fanyepx1")[0];
    let rightBtn=document.querySelectorAll(".icon-fanyepx")[0];
    let widths=parseInt(getComputedStyle(imgs[0],null).width);
    console.log(imgs,dots,banner,leftBtn,rightBtn);

console.log(widths);

    imgs[0].style.left=0;
    dots[0].classList.add("active");
    let now=0;
    let next=0;

//    开关：快速点击时图片会快速轮播的现象
//    默认开关时打开的，flag=true，可以点击左右箭头
    let flag=true;
    let t=setInterval(move,2000);
    function move() {
        next++;
        if(next==imgs.length){
            next=0;
        }
//        确保下一张图永远在最右侧
        imgs[next].style.left=widths+"px";
        //        imgs[now].style.left=-widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }
    function moveL() {
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths},function () {
            flag=true;
        });
        animate(imgs[next],{left:0});
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }
    leftBtn.onclick=function () {
//         判断开关是否开启
//        开关开启，则 ！flag=false;不执行return，执行 flag=false和move，move执行完 flag=true。
//        开关关闭的时候，不要点击
//        flag=false  !flag=true，执行return，结束函数
        if(!flag){
            return
        }
        flag=false;
        moveL();
    }
    rightBtn.onclick=function () {
        if(!flag){
            return
        }
        flag=false;
        move();
    }
    // banner.onmouseover=function () {
    //     clearInterval(t);
    // }
    // banner.onmouseout=function () {
    //     t=setInterval(move,2000);
    // }

//移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function () {
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove("active");
                imgs[j].style.left=widths+"px;";
            }
            dots[i].classList.add("active");
            imgs[i].style.left=0;
            now=i;
            next=i;
        }
    }

//    窗口失去焦点时，停止时间间隔函数
    window.onblur=function () {
        clearInterval(t);
    }
//    窗口获得焦点时，继续时间间隔函数
    window.onfocus=function () {
        t=setInterval(move,2000);
    }
}