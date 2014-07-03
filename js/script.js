
jQuery(document).ready(function() {
  "use strict";
  // ----------------------------------------------------------------
  // IE placeholders
  // ----------------------------------------------------------------
  if (navigator.userAgent.toLowerCase().indexOf('msie') > -1) {
    jQuery('[placeholder]').focus(function() {
      var input = jQuery(this);
      if (input.val() === input.attr('nplaceholder')) {
        if (this.originalType) {
          this.type = this.originalType;
          delete this.originalType;
        }
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = jQuery(this);
      if (input.val() === '') {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur();
  }

  // ----------------------------------------------------------------
  // Bootstrap tooltip
  // @see: http://getbootstrap.com/javascript/#tooltips
  // ----------------------------------------------------------------
  // invoke by adding data-toggle="tooltip" to a tags (this makes it validate)
  if(jQuery().tooltip) {
    jQuery('body').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    });
  }

  // ----------------------------------------------------------------
  // Bootstrap popover
  // @see: http://getbootstrap.com/javascript/#popovers
  // ----------------------------------------------------------------
  // invoke by adding data-toggle="popover" to a tags (this makes it validate)
  if(jQuery().popover) {
    jQuery('body').popover({
      selector: "[data-toggle=popover]",
      container: "body",
      trigger: "hover"
    });
  }
  
  // ----------------------------------------------------------------
  // allow any page element to set page class
  // ----------------------------------------------------------------
  jQuery('[data-page-class]').each(function() {
    jQuery('html').addClass(jQuery(this).data('page-class'));
  });

  // ----------------------------------------------------------------
  // Plugin: clingify (sticky navbar)
  // @see: http://theroux.github.io/clingify/
  // ----------------------------------------------------------------

  jQuery('[data-toggle=clingify]').clingify({
    breakpoint: 1010
  });
});
