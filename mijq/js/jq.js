/**
 * Created by Administrator on 2018/9/13.
 */
window.onload=function () {

//轮播图
    let img = $(".banner .ban-pic .pict");
    let dots=$(".item");
    let leftBtn=$(".leftBtn");
    let rightBtn=$(".rightBtn");
    let banner=$(".banner");
    let now=0;
    img.first().css("opacity",1);
    dots.eq(0).addClass("active");
    setInterval(move,3000);
    function move() {
        now++;
        if(now==img.length){
            now=0;
        }
        img.css("opacity",0).eq(now).css("opacity",1);
        dots.removeClass("active").eq(now).addClass("active");
    }
    function movel() {
        now--;
        if(now<0){
            now=img.length-1;
        }
        img.css("opacity",0).eq(now).css("opacity",1);
        dots.removeClass("active").eq(now).addClass("active");
    }
    leftBtn.click(function () {
        movel();
    })
    //点击右箭头
    rightBtn.click(function () {
        move();
    })
    dots.click(function () {
        $(this).addClass("active");

    })
}



//侧边选项卡
   let lis=$("ul-outer");
     console.log(lis);
    lis.mouseenter(function () {
      $(".bn-choose").css("display","none");
      $(this).children(".bn-choose").css("display","flex");
   })
    lis.mouseleave(function () {
        $(this).children(".bn-choose").css("display","none");
   })





    let btns=$(".flash .control");
    let box=$(".mi_list");
    let w=box.width()/2;
    console.log(btns,box);
    btns.last(function () {
        box.css({"tranform":"translate(-992px)"});
    })
    btns.first(function () {
        box.css({"tranform":"translate(0)"});
    })
   //家电
   // let zi=$(".span1");
   //  let tu=$(".kuai ul");
   //  zi.mouseenter(function () {
   //      tu.css("display","flex");
   //  })