$('#choose').on('click',function(){
	$('#list').css('right',0);
	$('#mask').fadeIn();
});
$('#mask').on('click',function(){
	$('#list').css('right',-300);
	$('#mask').fadeOut();
});

$('#fix-button').on('click',function(){
	$('html body').animate({
		scrollTop:0
	},800);
});
$(window).on('scroll',function(){
	if($(window).scrollTop()>$(window).height()){
		$('#fix-button').fadeIn();
	}else{
		$('#fix-button').fadeOut();
	}
});

$(window).trigger('scroll');

