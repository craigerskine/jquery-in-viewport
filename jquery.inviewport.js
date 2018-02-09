// inViewport 1.0.0
(function($){
  $.fn.inViewport = function(paramOffset){
    var elOffset = ~~Math.round(parseFloat(paramOffset)) || 0;
    var elTop = $(this).offset().top;
    var elBot = elTop + $(this).outerHeight();
    var viewTop = $(window).scrollTop();
    var viewBot = viewTop + ($(window).height() + elOffset);
    return elBot > viewTop && elTop < viewBot;
  };
}(jQuery));