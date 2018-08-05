new WOW().init();


$(window).scroll(function () {
    toogleClass();
});


function toogleClass() {

    if ($('nav').hasClass('top-nav-collapse')) {
        $('.logoWhite').fadeOut();
        $('.logoBlack').fadeIn();
    } else {
        //No tiene la clase 
        $('.logoWhite').fadeIn();
        $('.logoBlack').fadeOut();
    }
}


//$(window).scroll(function(){
//   var top = $(this).scrollTop();
//   var menu = $('nav');    
//    
//    if(top >= 200){
//        menu.addClass('bg-dark2');
//       }else{
//           menu.removeClass('bg-dark2');
//       }
//    
//});


$(".owl-services").owlCarousel({
    items: 4,
    slideBy: 2,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 2
        },
        768: {
            items: 4
        },
        992: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
});

$(".owl-testimonial").owlCarousel({
    items: 4,
    slideBy: 2,
    loop: true,
    margin: 30,
    autoplay: true,
    margin: 50,
    stagePadding: 20,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});

$(".owl-colaboradores").owlCarousel({
    items: 1,
    slideBy: 2,
    animateOut: 'fadeOut',
    animateIn: 'fadeInRight',
    loop: true,
    margin: 30,
    autoplay: true,
    margin: 50,
    stagePadding: 20,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 750,
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});

$("nav.fixed-top").autoHidingNavbar();