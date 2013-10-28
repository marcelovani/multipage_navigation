(function ($) {
    Drupal.behaviors.multipage_navigation_block= {
        attach: function (context, settings) {
            $(".block-multipage-navigation .pagination").click(function() {
                var timesClicked = 0;
                $(".block-multipage-navigation .pagination nav").toggle();
                $(".block-multipage-navigation .pagination span.arrow").toggleClass("upsidedown");

                // Close the navigation when click outside.
                var handler = function() {
                    timesClicked++;
                    if ( timesClicked > 1 ) {
                        $(".block-multipage-navigation .pagination nav").hide();
                        $("body").unbind("click.navigation");
                    }
                };
                $("body").bind("click.navigation", handler);

                // Catch keyboard events.
                $(document).keydown(function(e) {
                    // Esc key pressed.
                    if (e.keyCode == 27) {
                        $("body").trigger("click");
                    }
                });
            });
        }
    };
})(jQuery);
