$(function () {
  $('.jcarousel').jcarousel({
    // Configuration goes here
  });
});
(function ($) {
  $(function () {
    $('.jcarousel').jcarousel();

    $('.jcarousel-control-prev').jcarouselControl({
        target: '-=1'
      });

    $('.jcarousel-control-next').jcarouselControl({
        target: '+=1'
      });

  });
})(jQuery);