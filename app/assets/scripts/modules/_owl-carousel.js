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

  $(document).ready(function() {

    $("#owl-demo2").owlCarousel({

        navigation : true, // Show next and prev buttons
        pagination: true,
        responsive: true,

        // autoPlay: 8000, //Set AutoPlay to 3 seconds

        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],        // itemsTablet: [768,2],
        itemsMobile : [479,1]

    });

  });

  $(document).ready(function() {

    $("#owl-demo3").owlCarousel({

        navigation : true, // Show next and prev buttons
        pagination: true,
        responsive: true,

        // autoPlay: 8000, //Set AutoPlay to 3 seconds

        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3],        // itemsTablet: [768,2],
        itemsMobile : [479,1]

    });

  });

  $("#owl-demo4").owlCarousel({

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


});
