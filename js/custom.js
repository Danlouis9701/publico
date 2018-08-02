new WOW().init();


$(window).scroll(function(){
   toogleClass(); 
});


function toogleClass(){
    
    if ($('nav').hasClass('top-nav-collapse')) {
           $('.logoWhite').fadeOut();
            $('.logoBlack').fadeIn(); 
    } else{
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


  $(".owl-carousel").owlCarousel({
    items:4,
    slideBy:2,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
      responsive:{
        0:{
            items:2
        },
        576:{
            items:3
        },
        768:{
           items:4 
        },  
        992:{
            items:4
        },
        1200:{
            items:5
        }  
    }
  });
