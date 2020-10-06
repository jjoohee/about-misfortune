//흉둥이

window.onscroll = function(){
        var t =document.documentElement.scrollTop + document.body.scrollTop;
        moniter.innerHTML = t

        
           
    }

//human1-.onclick = function(){	bodyy.style.position = "relative";}

//스크롤시 다른 링크로 이동

   $(window).scroll(function() {
        var scrolltop = $(document).scrollTop();
        console.log(scrolltop);
        var height = $(document).height();
        console.log(height);
        var height_win = $(window).height();
        console.log(height_win);
        
        
     if (Math.round( $(window).scrollTop()) == $(document).height() - $(window).height()) {
        
       // var url = "https://jjoohee.github.io/doong0826/";
		$(location).attr('href',url);
        
    }
});

//로딩화면

 document.addEventListener("DOMContentLoaded", function() {
    requestAnimationFrame(function() {
            document.getElementById("loadingBar").style.width = "100%";
      });
    });

window.onload = function () {
document.getElementById("loadingIndicator").style.opacity = "0";
setTimeout(function() {
    document.getElementById("loadingIndicator").style.display = "none";}, 450);
}