//JS Code first

//JQ
//Example-4
$('.js-preloader').preloadinator({
  minTime: 2000
});

//Example-1
$(document).ready(function(){
    $( '.counter' ).counterUp({
      delay: 10,
      time: 1000
    });
});
//Example-2
$(function(){

  $(".num").numScroll({
    number: 123456,
    time: 1500,
    delay:0,
    symbol:true,
    fromZero: true

  });

});
//Example-3
  $(function(){
    $('#demo').counto(12345);
  });

  $(function(){
    $('#demo').counto(12345, 5000);
  });

  $('#my-number').counto(12345, 5000,function(){  
      alert('Done!');
    });

//Example-5
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed:1000,
    margin:30,
    responsive : {      
      768 : {
          items : 2,
      }
    }
  }      
  );
});

    