$(function () {
    
    var $burger = $('.menu__btn');
    var $menu = $('.menu__items');  // ul dagi menular
    var $close = $('.menu__close');  // ul dagi menular


    $burger.click(function () {
        $menu.addClass('active_menu');
    })
    $close.click(function () {
        $menu.removeClass('active_menu');
    })



    /* IZOTOPE KUTIBXONASI  */
    var $navs__links = $('.Works-navs__links'); // ul li a

    var $grid = $('.tab__content').isotope({
        itemSelector: '.tab__item'
    })


    $navs__links.click(function(e) {
        e.preventDefault();
        $navs__links.parent().removeClass('Works-navs__items-active')
        $(this).parent().addClass('Works-navs__items-active')
        var attr = $(this).attr('data-filter')
        console.log(attr)
        $grid.isotope({
            filter: attr,
        })
    })


    /* LIGHT_BOX KUTUBXONASI  */
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': false,
        'positionFromTop': 100
    })



    /* OWL CAROUSEL  */
    $('.owl-carousel').owlCarousel({
        items: 4,
        loop: true,
        margin: 25,
        autoplay: true,
        responsive: {
            0: {   // 0 - 575
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            }
        }
    });


    /* COUNETR KUTUBXONASI  */
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

});