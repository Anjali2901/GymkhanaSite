
 /* jQuery Pre loader
  -----------------------------------------------*/


$(document).ready(function() {
  $("#navg").hide();
$(window).on('load', function() { // makes sure the whole site is loaded
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
    $("#navg").show(1200);
});
});


$(document).ready(function() {
  $("#techwala, #presidwala, #sportswala, #acadwala, #cultwala, #contact").hide();
    $("#tech").click(function() {
      $("#home, #about, #gallery, #presidwala, #sportswala, #acadwala, #cultwala,#contact").hide();
      $("#techwala").show();
    });
    $("#cult").click(function() {
      $("#home, #about, #gallery, #techwala, #presidwala, #sportswala, #acadwala,#contact").hide();
      $("#cultwala").show();
    });
    $("#presid").click(function() {
      $("#home, #about, #gallery, #sportswala, #acadwala, #cultwala, #techwala,#contact").hide();
      $("#presidwala").show();
    });
    $("#sports").click(function() {
      $("#home, #about, #gallery, #acadwala, #cultwala, #techwala, #presidwala,#contact").hide();
      $("#sportswala").show();
    });
    $("#acad").click(function() {
      $("#home, #about, #gallery, #techwala, #presidwala, #sportswala, #cultwala,#contact").hide();
      $("#acadwala").show();
    });
    $("#backhome").click(function() {
       $("#techwala, #presidwala, #sportswala, #acadwala, #cultwala,#contact").hide();
       $("#home, #about, #gallery").show(1000);
    });
    $("#cont").click(function() {
      $("#home, #about, #gallery, #techwala, #presidwala, #sportswala, #acadwala, #cultwala").hide();
      $("#contact").show(1000);
    });
  });

    $(document).ready(function(){
      $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
          $("#navg").css("background-color", "#000");
          $(".navbar-right li a").css("color", "white");
          $(".navbar-right li a").css("font-weight", "500"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
          $("#navg").css("background-color", "transparent");
           $(".navbar-right li a").css("color", "#999");
          $(".navbar-right li a").css("font-weight", "500"); // if not, change it back to transparent
        }
      });
    });




$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
      $("#navg").hide();
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* Smoothscroll js
  -----------------------------------------------*/
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


 /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/slide-img1.jpg' },
            { src: 'images/slide-img2.jpg' },
            { src: 'images/slide-img3.jpg' }
        ],
        timer: false,
        transition: [ 'zoomIn', ],
        animation: ['kenburns']
    });
  });


  /* Team carousel
  -----------------------------------------------*/
  $(document).ready(function() {
      $("#team-carousel").owlCarousel({
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          slideSpeed: 300,
          itemsDesktop : [1199,2],
          itemsTablet: [768,1],
          itemsTabletSmall: [985,2],
          itemsMobile : [479,1],
      });
    });
    

    /* Back to Top
    -----------------------------------------------*/
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });   
          // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

