/*=================================
Design Practice Layout
May 2013
By : Away
http://www.dfuns.idv.tw
http://dfuns.blogspot.tw
=================================*/
$(function(){
	
	var $sInput=$('.searchText input');
	
	//=== Init ===
	(function(){
		$('.navi li').eq(0).addClass('naviNow');
		$('.categroy li').eq(0).addClass('cateNow');
		$('.pd:nth-child(3n)').css({margin:0});
		$('.pd img').hover(function(){
			$(this).css({ background:'#d7e4ec', borderColor:'#c8d4dc'});
		}, function(){
			$(this).css({ background:'#e8f3fa', borderColor:'#c5e2f3'});
		});
	})();
	
	//=== Event ===
	(function(){
		$('.navi li').click(function(){
			$(this).addClass('naviNow').siblings().removeClass();
		});
		$('.categroy li').click(function(){
			$(this).addClass('cateNow').siblings().removeClass();
		});
		$sInput.focus(function(){ if($(this).val() == 'Browse Products') $(this).val('');});
		$sInput.blur(function(){ if($(this).val() == '') $(this).val('Browse Products');});
	})();
	
});