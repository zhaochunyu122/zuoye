/**
 * Created by Administrator on 2018/9/13.
 */
window.onload=function () {
    $(".add").click(function () {
        $("footer .box2").css({backgroundColor:"#fe0000"});
        $("footer .box3").css({borderColor:"#fe0000"});
        $(".icon-gouwuche").css({color:"#fe0000"});
        $("footer .box1 p1").css({color:"#fe0000"});
        $("footer .box1 p1").replaceWith("<p style='font-size: 20px;color: #fe0000'>￥18</p>");
        $("footer .box1 p2").css({color:"#fe0000"});
        $("footer .box1").css({marginTop:"0"})
        $("footer .box2").click(function () {
                $(".boxz").css({display:"block"});
        })
    })
}