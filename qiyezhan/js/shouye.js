window.onload=function () {
    let header=document.querySelector("header");
    let wh=window.innerHeight;





    window.onscroll=function () {
        let bh=document.body.scrollTop||document.documentElement.scrollTop;  //获取滚动的距离
        // arr.forEach(function (value,index) {
        //     if((wh+bh)>=value+300){
        //         lis.forEach(function(element){
        //             element.classList.remove("hot");
        //         })
        //         lis[index].classList.add("hot");
        //         let imgs=floor[index].querySelectorAll("img");  //获取当前楼层的图片
        //         imgs.forEach(function (e) {
        //             e.src=e.getAttribute("imgsrc");
        //         })
        //     }
        // })
        if(bh>500) {
            header.style.backgroundColor = "#fff";
        }else{
            header.style.backgroundColor = "transparent";
        }
    }

}





