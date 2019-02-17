$(document).ready(function () {
    $(".logo").hover(function(){
        $(".logo img").attr("src", "img/Kinslow-Logo-128x64-White.png");
    }, function(){
        $(".logo img").attr("src", "img/Kinslow-Logo-128x64.png");
    });
});