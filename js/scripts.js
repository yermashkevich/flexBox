$(function() {
	$(".servicesFlex__round").hover(function(){
		$(this).find(".servicesFlex__openedText").show();
		$(this).find(".servicesFlex__link").addClass("circleOpacity");
	}, function(){
		$(this).find(".servicesFlex__openedText").hide();
		$(this).find(".servicesFlex__link").removeClass("circleOpacity");
	});

	$(".circle").click(function(){
		$(this).hide();
	});

	$("h1").dblclick(function(){
		$("h3").text("Хватит кликать, иди спать");
	});
});

