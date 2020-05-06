jQuery.noConflict();
jQuery(document).ready(function($){

		var jackpot_url=fundraise_object.jackpot_url;
 $.ajax({
        url: jackpot_url,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            
            $(".draw-amt").text(result.total);
            $(".draw-amt").number( true);
        }
    });

   /* fund raise amount code for footer */
    var request_url=fundraise_object.fundraise_url;

 $.ajax({
        url: request_url,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
        
            $(".fund-raise-amt").text(result.total);
            $(".fund-raise-amt").number( true);
        }
    });
	
$(".read-more-supplement").click(function(){
    
   $(".supplement-ruls-content").slideToggle();
});

$(".learn-more-btn").click(function(){
	$(".expanded-description").slideToggle();
	$(this).text($(this).text() == 'CLOSE' ? 'Learn All About This Experience' : 'CLOSE');
});

$(".slider-content-read-more").click(function(){
	$(".hidden-slider-content").slideToggle();
  });
var offset=0;
 $(".faqs-link").click(function(){
       $(".faq-outer").css('display','block');
 	   offset = $(".faq-outer").offset().top;
 		
 		$('html, body').animate({
        scrollTop: offset-50
        }, 2000);
 });

 $(".faq-close").click(function(){
 	$(".faq-outer").css('display','none');
 });

});


/*jQuery(function(){

	$('.rules').niceScroll({
		cursorcolor:"#fff",
		emulatetouch:true,
		autohidemode:false,
		smoothscroll: true,
		
	});

});*/


