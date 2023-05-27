// jQuery(document).ready(function() {
//     var testimonialCarousel=$('.testimonial-carousel');
// testimonialCarousel.owlCarousel({
//             items:3,
//             rtl:false,
//             autoplay:true,
//             autoplayTimeout:1000,
//             autoplayHoverPause:true
//         });



// });


jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 1500,
        smartSpeed: 450,
        autoplayHoverPause:true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });


    $(".next").click(function(){
      $(".product3").fadeIn(500);
      $(".product2").fadeOut(500);
      $(".h2").animate({top:"-100%"});
      $(".h3").animate({top:"-3%"});
      $(".imgSection").addClass("color-change");
      $(".imgSection").removeClass("color-change1");

});

$(".pre").click(function(){
      $(".product2").fadeIn(500);
      $(".product3").fadeOut(500);
      $(".h2").animate({top:"-3%"});
      $(".h3").animate({top:"133%"});
      $(".imgSection").addClass("color-change1");
      $(".imgSection").removeClass("color-change");
      
});
$(".product2 .c1").click(function(){
  $(".product2 .c2").css("box-shadow","none");
  $(".product2 .c3").css("box-shadow","none");
  $(".product2 .c1").css("box-shadow","0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843");
  $(".h2").animate({opacity:0},function(){
          $(".h2").attr("src","https://s9.postimg.cc/5opmjwydb/image.png");
  });
  $(".h2").animate({opacity:1});
});

$(".product2 .c2").click(function(){
  $(".product2 .c1").css("box-shadow","none");
  $(".product2 .c3").css("box-shadow","none");
  $(".product2 .c2").css("box-shadow","0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843");
  $(".h2").animate({opacity:0},function(){
          $(".h2").attr("src","https://s9.postimg.cc/u6hq7l3fz/H2_2.png");
  });
  $(".h2").animate({opacity:1});
});
$(".product2 .c3").click(function(){
  $(".product2 .c1").css("box-shadow","none");
  $(".product2 .c2").css("box-shadow","none");
  $(".product2 .c3").css("box-shadow","0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843");
  $(".h2").animate({opacity:0},function(){
          $(".h2").attr("src","https://s9.postimg.cc/wnthf1xov/H2_3.png");
  });
  $(".h2").animate({opacity:1});
}); 

});


$(document).ready(function(){
  
  
  
});





