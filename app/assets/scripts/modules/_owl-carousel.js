$(document).ready(function() {

  $("#owl-demo").owlCarousel({

     navigation : true, // Show next and prev buttons

     slideSpeed : 300,
     paginationSpeed : 400,

     items : 1,
     itemsDesktop : false,
     itemsDesktopSmall : false,
     itemsTablet: false,
     itemsMobile : false,
     autoPlay: false,
     responsive: true

 });

 // $(window).scroll(function() {
 //
 //  var top = $(window).scrollTop();
 //
 //    if(top >= 112) {
 //      $("header").addClass('scroll-bg');
 //    } else if ($("header").hasClass('secondary-dark-blue-bg')) {
 //      $("header").removeClass('secondary-dark-blue-bg');
 //    }
 //
 // });

});
