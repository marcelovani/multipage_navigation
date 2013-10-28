(function ($) {
    Drupal.behaviors.multipage_navigation_block= {
        attach: function (context, settings) {
            $(".block-multipage-navigation .pagination").click(function() {
                var timesClicked = 0;
                $(this).find("nav").toggle();
                $(this).find("span.arrow").toggleClass("upsidedown");

                // Close the navigation when click outside.
                var handler = function() {
                    timesClicked++;
                    if ( timesClicked > 1 ) {
                        $(this).find("nav").hide();
                        $(this).find("span.arrow").removeClass("upsidedown");
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
