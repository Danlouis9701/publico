new WOW().init();

/*
$(window).scroll(function(){
    var top = window.scrollTop();
    var logoWhite = $('.logoWhite');
    var logoBlack = $('.logoBlack');
    
  
    if(top>=500){
       
        
    }
    
    
});



 if ($('nav.navbar').hasClass('top-nav-collapse')) {
        $('.logoWhite').fadeOut();
        $('.logoBlack').fadeIn();
    } else {
        $('.logoWhite').fadeIn();
        $('.logoBlack').fadeOut();
}
*/

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