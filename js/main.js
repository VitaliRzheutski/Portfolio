$(document).ready(function(){

$('.about__toggle').click(function(event){

    event.preventDefault();
    console.log('Click!');


    $('.about-content__box').hide();

    var href= $(this).attr('href');
    console.log(href);

    $(href).fadeIn();
});
//следим за скролом и показываем /скрываем кнопку
$(window).scroll(function(){

    console.log($(this).scrollTop());
   
    if($(this).scrollTop()>800){
        $('#scrollToTop').fadeIn();
    }else{
        $('#scrollToTop').fadeOut();
    }
});


// При клике на кнопку -делаем прокрутку на верх страницы

$('#scrollToTop').click(function(event){
    
    event.preventDefault();
    $('html').animate({scrollTop: 0}, 800)

});


});