$('#owl-demo').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    responsive : {
        0 : {
            items : 1,
            autoplayTimeout: 3000,

        },
        917 : {
            items : 2,
            slideBy:2,
            autoplayTimeout: 6000,

        }
    }})