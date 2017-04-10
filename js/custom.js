

 $('.square-box').on('mouseover',function(){
    $(this).find('.square-content').css('background','#fff');
    $(this).find('.bordered').css('color','#000');
    $(this).find('.bordered').addClass('bordered-over');
    $(this).find('.news').css('color','#000');
  });

 $('.square-box').on('mouseout',function(){
    $(this).find('.square-content').css('background','#000');
    $(this).find('.bordered').css('color','#fff');
    $(this).find('.bordered').removeClass('bordered-over');
    $(this).find('.news').css('color','#fff');
  });

$('.pax-1').parallax({imageSrc: 'images/chicken.jpg'});

$('.pax-2').parallax({imageSrc: 'images/wine.jpg'});

$('.pax-3').parallax({imageSrc: 'images/pinkdessert.jpg'});

$('.pax-4').parallax({imageSrc: 'images/cocktails.jpeg'});