var Ulu = document.getElementById('ulu');
var JdLeft = document.getElementById('jd-left');
var JdRight = document.getElementById('jd-right');

var Coord = 0;
JdLeft.addEventListener('click',function(){
  if(Coord < 0){
    Coord += 226;
    Ulu.style.left = Coord + 'px';
  }
});
JdRight.addEventListener('click', function(){
  if(Coord > -1130){
    Coord -= 226;
    Ulu.style.left = Coord + 'px';
  }

});

/*var api = document.getElementsByClassName('api');

api.addEventListener('mouseout',function(){
  api.style.transform=rotate3d(0,1,0,-180deg);
})*/

var li04 = document.getElementById('li04')
$(function(){
  $(window).scroll(function(){ //只要窗口滚动,就触发下面代码
  var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
    if( scrollt >50 ){ //判断滚动后高度超过200px,就显示
        $("#li04").fadeIn(400); //淡出
    }else{
        $("#li04").stop().fadeOut(400); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
    }
  });
  $("#li04").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
      $("html,body").animated({scrollTop:"0px"},200);
  });
});