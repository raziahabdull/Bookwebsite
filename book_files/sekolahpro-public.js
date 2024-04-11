(function( $ ) {
	'use strict';

	/**
	 * All of the code for your public-facing JavaScript source
	 * should reside in this file.
	 *
	 * Note: It has been assumed you will write jQuery code here, so the
	 * $ function reference has been prepared for usage within the scope
	 * of this function.
	 *
	 * This enables you to define handlers, for when the DOM is ready:
	 *
	 * $(function() {
	 *
	 * });
	 *
	 * When the window is loaded:
	 *
	 * $( window ).load(function() {
	 *
	 * });
	 *
	 * ...and/or other possibilities.
	 *
	 * Ideally, it is not considered best practise to attach more than a
	 * single DOM-ready or window-load handler for a particular page.
	 * Although scripts in the WordPress core, Plugins and Themes may be
	 * practising this, we should strive to set a better example in our own work.
	 */
	 
	 function resize() {
            if (jQuery(window).width() > 982) {
                jQuery('#sekolahprolibmenu, .mading__one, .mading__two, .mading__three').removeClass('accord').addClass('desktop');
				jQuery('body').removeClass('is_mobile');
			} else if (jQuery(window).width() > 533) {
				jQuery('#sekolahprolibmenu, .mading__one, .mading__two, .mading__three').addClass('accord').removeClass('desktop');
				jQuery('body').removeClass('is_small').addClass('is_mobile');
            } else {
				jQuery('#sekolahprolibmenu, .mading__one, .mading__two, .mading__three').addClass('accord').removeClass('desktop');
				jQuery('body').addClass('is_mobile is_small');
	        }
        }

        jQuery(document).ready( function() {
            jQuery(window).resize(resize);
            resize();
        });
		
		jQuery(document).ready(function () {
	    	jQuery(".menu_is_toggle, .icon__menutwo").click(function(){
	    	    jQuery("body").toggleClass("menu__active");
			});
			jQuery(".ho__click").click(function(){
	    	    jQuery("body").addClass("ho__open");
			});
			jQuery(".menu__one").click(function(){
	    	    jQuery("body").removeClass("ho__open");
			});
			jQuery(".three__icon").click(function(){
	    	    jQuery("body").toggleClass("see__three");
			});
		});
		
		jQuery.noConflict(),
        jQuery("document").ready(function (e) {
            
			e(".is_mobile .nav__menu > ul > li:has(ul),.is_mobile .nav__menu > ul > li > ul > li:has(ul),.is_mobile .nav__menu > ul > li > ul > li > ul > li:has(ul)").addClass("has-sub"),
            e(".is_mobile .nav__menu > ul > li > a").click(function () {
                var l = e(this).next();
                return (
                    e(".is_mobile .nav__menu li").removeClass("active"),
                    e(this).closest("li").addClass("active"),
                    l.is("ul") && l.is(":visible") && (e(this).closest("li").removeClass("active"), l.slideUp("normal")),
                    l.is("ul") && !l.is(":visible") && (e(".is_mobile .nav__menu ul ul:visible").slideUp("normal"), l.slideDown("normal")),
                    !l.is("ul")
                );
            }),
            e(".is_mobile .nav__menu > ul > li > ul > li > a").click(function () {
                var l = e(this).next();
                return (
                    e(".is_mobile .nav__menu li ul li").removeClass("active"),
                    e(this).closest("li").addClass("active"),
                    l.is("ul") && l.is(":visible") && (e(this).closest("li").removeClass("active"), l.slideUp("normal")),
                    l.is("ul") && !l.is(":visible") && (e(".is_mobile .nav__menu ul ul ul:visible").slideUp("normal"), l.slideDown("normal")),
                    !l.is("ul")
                );
            }),
            e(".is_mobile .nav__menu > ul > li > ul > li > ul > li > a").click(function () {
                var l = e(this).next();
                return (
                    e(".is_mobile .nav__menu li ul li ul li").removeClass("active"),
                    e(this).closest("li").addClass("active"),
                    l.is("ul") && l.is(":visible") && (e(this).closest("li").removeClass("active"), l.slideUp("normal")),
                    l.is("ul") && !l.is(":visible") && (e(".is_mobile .nav__menu ul ul ul ul:visible").slideUp("normal"), l.slideDown("normal")),
                    !l.is("ul")
                );
            });
        });

})( jQuery );
