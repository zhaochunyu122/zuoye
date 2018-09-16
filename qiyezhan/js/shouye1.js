window.onload=function () {
    let header=document.querySelector("header");
    let wh=window.innerHeight;
    window.onscroll=function () {
        let bh=document.body.scrollTop||document.documentElement.scrollTop;  //获取滚动的距离
        if(bh>500) {
            header.style.backgroundColor = "#fff";
        }else{
            header.style.backgroundColor = "transparent";
        }
    }

}





