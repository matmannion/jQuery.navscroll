/**
 * Mat Mannion <M.Mannion@warwick.ac.uk>
 */

(function($) {

  $.fn.navscroll = function(options) {
    var defaults = {};

    if (options) {
      $.extend(defaults, options);
    }

    // This is for multiple calls. Look for existing buttons and remove them
    this.find('.navscroll').remove();

    var scrollables = this.filter(function() {
      var last = $(this).find('li:last-child');
      
      var isScrollable = (last.position().left + last.width()) > $(this).width();
      return isScrollable;
    });

    return scrollables.each(function() {
      
    }); 
  };
})(jQuery);
