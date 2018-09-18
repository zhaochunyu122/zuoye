/**
 * Created by Administrator on 2018/9/16.
 */
$(function () {
    let user=$(".name");
    let pass=$(".mima");

    let btn = $("button");
    btn.click(function () {
        window.open("shouye.html");
    })
    pass.blur(function () {
        btn.css("backgroundColor","#fe0000");
    })
})
