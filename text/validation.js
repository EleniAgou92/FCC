//Contact form validation
$(document).ready(function() {
	$("#contact_form").validate({
	  rules: {
		email: {
		  required: true,
		  email: true
		},
		email_confirm: {
		  required: true,
		  email: true,
		  equalTo: "#email"
		},
  
	  },
	  messages: {
		email: {
		  required: "Please enter your email address",
		  email: "Please enter a VALID email address"
		},
		email_confirm: {
		  required: "Please confirm your email address",
		  email: "Please enter a VALID email address",
		  equalTo: "Email addresses MUST match!"
		}
	  }
	
// $(document).ready(function(){
// 	$('a').click(function(){
// 		//alert("i am click");
// 		var selected = $(this);
// 		$('a').removeClass('active');
// 		$(selected).addClass('active');
// 	});
// 	var $a = $('.a'),
// 	$b = $('.b'),
// 	$c = $('.c'),
// 	$d = $('.d'),
// 	$home = $('.home'),
// 	$aboutus = $('.aboutus'),
// 	$gallery = $('.gallery'),
// 	$contactus = $('.contactus');

// 	$a.click(function(){
// 		$home.fadeIn();
// 		$aboutus.fadeOut();
// 		$gallery.fadeOut();
// 		$contactus.fadeOut();
// 	});
// 	$b.click(function(){
// 		$aboutus.fadeIn();
// 		$home.fadeOut();
// 		$gallery.fadeOut();
// 		$contactus.fadeOut();
// 	});
// 	$c.click(function(){
// 		$gallery.fadeIn();
// 		$home.fadeOut();
// 		$aboutus.fadeOut();
// 		$contactus.fadeOut();
// 	});
// 	$d.click(function(){
// 		$contactus.fadeIn();
// 		$home.fadeOut();
// 		$gallery.fadeOut();
// 		$aboutus.fadeOut();
// 	});
// });