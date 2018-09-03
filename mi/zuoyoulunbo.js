//双下标轮播/左右轮播
//imgs:需要轮播的图片集合
//dots:轮播点的集合
//banner:放轮播图的盒子，元素
//leftBtn:左箭头，元素
//rightBtn:右箭头，元素
//widths:轮播图的宽度，整数
//activeClass:轮播点选中时的类名
//second：轮播时间
function banner_lr(imgs,dots,banner,leftBtn,rightBtn,widths,activeClass){
    imgs[0].style.left=0;
    dots[0].classList.add(activeClass);
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
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
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
        dots[now].classList.remove(activeClass);
        dots[next].classList.add(activeClass);
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
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,2000);
    }

//移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onmouseover=function () {
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove(activeClass);
                imgs[j].style.left=widths+"px;";
            }
            dots[i].classList.add(activeClass);
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