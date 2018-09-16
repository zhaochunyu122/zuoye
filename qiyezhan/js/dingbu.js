/**
 * Created by Administrator on 2018/9/15.
 */
$(function () {
    $(".icon-liebiao").click(function () {
        $("header .box ul").slideDown("slow");
        $(".icon-liebiao").slideUp("slow");
        $("header .box p").slideDown("slow");
    })
    $("header .box p").click(function () {
        $("header .box ul").slideUp("slow");
        $(".icon-liebiao").slideDown("slow");
        $("header .box p").slideUp("slow");
    })
})