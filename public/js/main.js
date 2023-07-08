(function ($) {
    "use strict";

    // Spinner
    // var spinner = function () {
    //     setTimeout(function () {
    //         if ($('#spinner').length > 0) {
    //             $('#spinner').removeClass('show');
    //         }
    //     }, 1);
    // };
    // spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.nav-bar').addClass('sticky-top');
        } else {
            $('.nav-bar').removeClass('sticky-top');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
    function image() {
        var imageBox = document.getElementById("imageBox");
        var imgItem = document.querySelectorAll(".prouduct-sm-img-item");
        imgItem.forEach(function (e) {
          if (e.children[0].src == imageBox.src) {
            e.style.opacity = 1;
          }
          e.addEventListener("click", function () {
            imgItem.forEach((e) => (e.style.opacity = 0.6));
            imageBox.src = e.children[0].src;
            e.style.opacity = 1;
          });
        });
      }
      image();
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });
    
})(jQuery);
var $star_rating = $(".star-rating .fa");

var SetRatingStar = function () {
    return $star_rating.each(function () {
        if (
            parseInt($star_rating.siblings("input.rating-value").val()) >=
            parseInt($(this).data("rating"))
        ) {
            return $(this).removeClass("fa-star-o").addClass("fa-star");
        } else {
            return $(this).removeClass("fa-star").addClass("fa-star-o");
        }
    });
};

$star_rating.on("click", function () {
    $star_rating.siblings("input.rating-value").val($(this).data("rating"));
    return SetRatingStar();
});

SetRatingStar();
