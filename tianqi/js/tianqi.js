/**
 * Created by Administrator on 2018/9/14.
 */
$(function () {
    //请求数据
    let weather;
    let obj;
    $.ajax({
        url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
        dataType:"jsonp",
        success:function (res) {
            console.log(res);
            weather=res.data.weather;
            render(weather);
        }
    })


    // //渲染数据
    function render(obj) {
        $(".cityname").html(obj.city_name);
        $(".quality h3").html(obj.quality_level);
        $(".con .weather").html(obj.current_condition);
        $(".con .temperature span").html(obj.current_temperature);
        $(".con .humidity span").html(obj.dat_low_temperature);
        $(".today .left h4").html(obj.day_condition);
        $(".today .right h5 span1").html(obj.dat_low_temperature);
        $(".today .right h5 span2").html(obj.dat_high_temperature);
        $(".tomorrow .left h4").html(obj.day_condition);
        $(".tomorrow .right h5 span1").html(obj.dat_low_temperature);
        $(".tomorrow .right h5 span2").html(obj.dat_high_temperature);
        //小时 dom  数组
        obj.hourly_forecast.forEach(function (value, index){
            let str = "";
            str+= `<li>
                    <h6>${value.hour}:00</h6>
                    <div class="tu" style="background:url(img/${value.weather_icon_id}.png) no-repeat"></div>
                    <p><span>${value.temperature}</span>℃</p>
                </li>`;
            $(".center ul").append(str);

        })
       obj.forecast_list.forEach(function (value,index) {
           let str = "";
           str+=`<li>
               <p2>${value.date.substring(5,7)}/${value.date.substring(8,10)}</p2>
               <h6>${value.condition}</h6>
               <img src="img/${value.weather_icon_id}.png" alt="" class="daytime">
               <img src="img/${value.weather_icon_id}.png" alt="" class="night">
               <h6>${value.condition}</h6>
               <p2>${value.wind_direction}</p2>
               <p1>${value.wind_level}</p1>
             </li>`
           $(".bottom ul").append(str);
       })
    }
})
