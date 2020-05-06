var swiper = new Swiper('.swiper-container.mainslider', {
	initialSlide:0,
    effect: 'fade',
    // Enable lazy loading
    lazy: true,
    autoplay: {
        delay: 5000,
    }
    
    

});
 var swiperV = new Swiper('.swiper-container.swiper-slide', {
       
        height:'700px',
                
    });

$(document).ready(function() {
    var height = $(window).height();
    $(".slider .swiper-slide").css("height", height-50);
});