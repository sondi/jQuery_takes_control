$("h2").css("color", "red");	

jQuery("img.attachment-flyer").attr("src", "http://cliphihi.com/wp-content/uploads/2015/04/Funny_Cat_Face515.jpg")

// Direct access to an element via attribute
jQuery("img.attachment-flyer[src='http://startbootstrap.com/assets/img/templates/agency.jpg']")

jQuery("body").find("h2").animate({
	fontSize: "3em"
	}, 5000
);

jQuery("#wrapper").find("h2").click(function(){
	alert(jQuery(this).html());
});