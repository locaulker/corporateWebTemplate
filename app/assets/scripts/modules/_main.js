jQuery(document).ready(function(){

  /** -- Waypoints: Scroll to -- **/
  $('.animation').each(function() {

    var waypoint = new Waypoint({
      element: this,
      handler: function(direction) {
        var animation = $(this.element).attr('data-animation');
        $(this.element).css('opacity', '1');
        $(this.element).addClass("animated " + animation);
      },
      offset: '30%'
    });

  });

  /** -- Smooth Scrolling -- **/
  $('a').smoothScroll({
    speed: 1000,
    offset: -50
  });

});
