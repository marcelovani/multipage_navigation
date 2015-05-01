(function ($) {
  Drupal.behaviors.multipage_navigation = {
    attach: function () {
      var nav, arrow;
      var isOpen = 0;

      /**
       * Toggle the isOpen flag value
       * we are holding it as a separate function to just create it once
       */
      function deferFlagToggle() {
        isOpen = 1;
      }

      /**
       * Hide the opened navigation
       * @param {Event} evt
       */
      var close = function (evt) {
        // do not do anything if no nav is open, or the event is a keydown but not Esc
        if (isOpen === 0 || (evt.type === 'keydown' && evt.keyCode !== 27)) {
          return;
        }

        nav.hide();
        arrow.removeClass('mn_upsidedown');

        isOpen = 0;     // set flag to false
        nav = arrow = null;     // null the references
      };

      /**
       * Show the navigation
       * @param {Event} evt
       */
      var open = function (evt) {
        // if the previous nav was open, close it
        if (isOpen === 1) {
          close(evt);
        }

        var element = $(this);

        // save nodes references
        nav = element.find('nav');
        arrow = element.find('span.arrow');

        nav.show();
        arrow.addClass('mn_upsidedown');
        setTimeout(deferFlagToggle, 100);       // defer the flag change due to events race
      };

      $(document)
        .delegate('.pagination .multipage-navigation', 'click', open)   // open on click for particular selector
        .bind('click', close)       // close on click anywhere on the page
        .bind('keydown', close);    // close on keypress (Esc)
    }
  };
})(jQuery);
