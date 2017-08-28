

$(function(){
$(window).scroll(function(){ //只要窗口滚动,就触发下面代码
var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
    if( scrollt >50 ){ //判断滚动后高度超过200px,就显示
        $("#gotop").fadeIn(400); //淡出
      }else{
        $("#gotop").stop().fadeOut(400); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
      }
    });
$("#gotop").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
  $("html,body").animated({scrollTop:"0px"},200);
});
});
//

#gotop{
  display:block;
  width:60px;
  height:60px;
  position:fixed;
  bottom:50px;
  right:40px;
  border-radius:10px 10px 10px 10px;
  text-decoration:none;
  display:none;
  background-color:#999999;
}

#gotop span{
  display:block;
  width:60px;
  color:#dddddd;
}
#gotop span:hover{
  color:#cccccc;
}
#gotop span{
  font-size:40px;
  text-align:center;
  margin-top:4px;
}

div style="height:2000px;">/div
a id="gotop" href="#">
▲
/a>