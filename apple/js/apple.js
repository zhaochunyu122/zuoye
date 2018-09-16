/**
 * Created by Administrator on 2018/9/15.
 */
$(function(){


    let btn=$(".list1");
    let more=$("header .more");
    let line1=$(".line1");
    let line2=$(".line2");

    btn.click(function(){
        more.slideToggle("slow");
        line1.toggleClass("active");
        line2.toggleClass("active1");
    })



    let shop=$(".icon-gouwudai");
    let shopping=$("header .shop");
    shop.click(function () {
        shopping.slideToggle("normal");
    })


    let add=$(".add");
    let down=$(".content-down");
    let both=$(".footer2 ul li");
    both.click(function(){
        let i=$(this).index();
        down.eq(i).slideToggle("fast");

        add.eq(i).toggleClass('hot');
    });






})