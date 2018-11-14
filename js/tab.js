$(document).ready(function(){
	$('.item-content-tab').hide();
	$('.item-content-tab:first').show();
	$('.list-tab .item-tab:first').addClass('active');
	$('.list-tab .item-tab').click(function(){
		$('.list-tab .item-tab').removeClass('active');
		$(this).addClass('active');
		$('.item-content-tab').hide();
		var selectTab = $(this).find('a').attr('href');
		$(selectTab).show();
	});
});