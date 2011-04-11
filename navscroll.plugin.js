/**
 * Mat Mannion <M.Mannion@warwick.ac.uk>
 */

(function($) {
  var isScrollable = function(el, offset) {
    offset = offset || 0;
    var last = $(el).find('li:last-child');

    var isScrollable = (last.position().left + last.width()) > ($(el).width() + offset);
    return isScrollable;
  };

  $.fn.navscroll = function(options) {
    var defaults = {};

    if (options) {
      $.extend(defaults, options);
    }

    // This is for multiple calls. Look for existing buttons and remove them
    this.find('.navscroll').remove();

    return this.filter(function() { return isScrollable(this); }).each(function() {
      var width = $(this).width();

      var prev = $('<a/>').attr({ href: '#' }).addClass('navscroll').addClass('prev').html('&laquo;').hide();
      var next = $('<a/>').attr({ href: '#' }).addClass('navscroll').addClass('next').html('&raquo;');

      next.click($.proxy(function() {
        prev.show();      
        if (!isScrollable(this, width)) {
          next.hide();
        }
      
        $(this).animate({
          marginLeft: '-=' + width
        });

        return false;
      }, this));

      prev.click($.proxy(function() {
        next.show();
        if (parseInt($(this).css('margin-left')) + width >= 0) {
          prev.hide();
        }

        $(this).animate({
          marginLeft: '+=' + width
        });
    
        return false;
      }, this));

      $(this).before(prev).after(next);
    }); 
  };
})(jQuery);
