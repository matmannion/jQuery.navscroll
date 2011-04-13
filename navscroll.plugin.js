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
   
      var list = this;
      var $list = $(this);
      var width = $list.width();
      
      // move offset to a variable so we can track its value easily
      var marginLeft = 0;

      var prev = $('<a/>').attr({ href: '#' }).addClass('navscroll').addClass('prev').html('&laquo;').hide();
      var next = $('<a/>').attr({ href: '#' }).addClass('navscroll').addClass('next').html('&raquo;');

      next.click(function() {
        prev.show();      
        if (!isScrollable(list, width)) {
          next.hide();
        }
      
        marginLeft -= width;
        $list.animate({
          marginLeft: marginLeft
        });

        return false;
      });

      prev.click(function() {
        next.show();
        if (parseInt($list.css('margin-left')) + width >= 0) {
          prev.hide();
        }

        marginLeft += width;
        $list.animate({
          marginLeft: marginLeft
        });
    
        return false;
      });

      $(this).before(prev).after(next);
    }); 
  };
})(jQuery);
