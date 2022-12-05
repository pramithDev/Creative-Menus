$(window).on('scroll', function(){
    var sT = $(this).scrollTop();

    if(sT > 400){
		$('.menu').addClass('black');
	}else{
		$('.menu').removeClass('black');
	}
});