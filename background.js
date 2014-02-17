var screenshots = $("li.group").map(function() {
    return $(this).attr('id');
}).get();

$.each(screenshots, function(index,value){
	var views = $("#" + value + " .views").html();
	var favs = $("#" + value + " .fav a").html();
	var powerRank = (favs/views)*100;
	if (powerRank < 1 && powerRank > 0) {
		powerRank = "< 1";
	} else {
		powerRank = Math.round(powerRank);
	}

	$("#" + value + " .fav").prepend("<div class='power-ranking groups' style='float:left;padding-right:5px;padding-bottom:2px;'><strong>P:</strong> " + powerRank + "</div>");
});