$(document).ready(function (){
	$('.my-rating-1 .undone').click(function(){
		var div = '.my-rating-1';	
		$(div).html('<img src="images/ajax-loader.gif" />');
		var postdata = "rate-1=" + $(this).attr('rel');
		$.ajax({type: "POST",url: "rate.php",data: postdata,success: function(msg){$(div).html(msg)}});
	});

	$('.my-rating-2 .undone').click(function(){
		var div = '.my-rating-2';
		$(div).html('<img src="images/ajax-loader.gif" />');	
		var postdata = "rate-2=" + $(this).attr('rel');
		$.ajax({type: "POST",url: "rate.php",data: postdata,success: function(msg){$(div).html(msg)}});
	});
	
		$('.my-rating-3 .undone').click(function(){
		var div = '.my-rating-3';
		$(div).html('<img src="images/ajax-loader.gif" />');	
		var postdata = "rate-3=" + $(this).attr('rel');
		$.ajax({type: "POST",url: "rate.php",data: postdata,success: function(msg){$(div).html(msg)}});
	});	
	
		$('.my-rating-4 .undone').click(function(){
		var div = '.my-rating-4';
		$(div).html('<img src="images/ajax-loader.gif" />');	
		var postdata = "rate-4=" + $(this).attr('rel');
		$.ajax({type: "POST",url: "rate.php",data: postdata,success: function(msg){$(div).html(msg)}});
	});

});