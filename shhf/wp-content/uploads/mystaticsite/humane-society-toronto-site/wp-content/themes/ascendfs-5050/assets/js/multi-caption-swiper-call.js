var width = $(window).width();
if (width < 992) {
    var galleryTop = new Swiper('.swiper-container.multiple', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        
        effect: 'coverflow',
        autoplay: false,
        noSwiping: false,
        allowTouchMove: true,
        shortSwipes: true,
        longSwipes: true,
        centeredSlides: true,
        followFinger: false,
        slidesPerView: 'auto',
        slideToClickedSlide: false,
        speed: 1000,
        initialSlide: 1,
        loop: true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
    });
} else {
    var galleryTop = new Swiper('.swiper-container.multiple', {
        effect: 'coverflow',
        noSwiping: false,
        allowTouchMove: false,
        shortSwipes: false,
        longSwipes: false,
        centeredSlides: true,
        followFinger: false,
        slidesPerView: 'auto',
        slideToClickedSlide: true,
        speed: 1000,
        initialSlide: 1,
        loop: true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}


/*galleryTop.on('slideChange', function (e) {
    setTimeout(function () {
        var _position = ($('.multiple .swiper-slide-active img').height() / 2) + 30;
        $('.multiple .swiper-button-prev').css('top', _position);
        $('.multiple .swiper-button-next').css('top', _position);
    }, 1000);
});*/
$(document).ready(function () {
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (is_safari) {
        setTimeout(function () {
            $('body').addClass('safari-browser');
            var _height = $('.multicaption-slider .multicaption-slider-outer img').height();
            $('.multicaption-slider .swiper-slide .swiper-slide-shadow-left').height(_height);
            $('.multicaption-slider .swiper-slide .swiper-slide-shadow-right').height(_height);
        }, 1000);
    }

    setTimeout(function () {
        var _positionfirst = ($('.multiple .swiper-slide-active img').height() / 2) + 30;
        var dotposition = $('.multiple .swiper-slide-active img').height() - 30;
        /*$('.multiple .swiper-button-prev').css('top', _positionfirst);
        $('.multiple .swiper-button-next').css('top', _positionfirst);*/
        $('.multiple .swiper-pagination').css('top', dotposition);
    }, 1000);
});