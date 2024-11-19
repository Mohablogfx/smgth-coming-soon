(function ($) {

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    

    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/slide-image01.jpg' },
            { src: 'images/slide-image02.jpg' },
            { src: 'images/slide-image03.jpg' },
            { src: 'images/slide-image04.jpg' },
            { src: 'images/slide-image05.jpg' },
            { src: 'images/slide-image06.jpg' },
            { src: 'images/slide-image07.jpg' },
            { src: 'images/slide-image08.jpg' }
        ],
        timer: false,
        delay: 2000,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
