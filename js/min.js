$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

var $btnTop = $(".btn-top")
$(window).on("scroll", function(){
	if($(window).scrollTop() >=20){
		$btnTop.fadeIn();
}else{
	$btnTop.fadeOut();
}
});

$btnTop.on("click",function(){
	$("html,body").animate({scrollTop:0},900)
});

