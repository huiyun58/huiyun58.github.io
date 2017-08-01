(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

})(jQuery); // End of use strict

$('button1').on('click', function() {
    var m = $('#mass').val()
    var r = $('#radius').val()
    var h = $('#height').val()
    m = Number(m)
    h = Number(h)
    r = Number(r)
    Ixy = 1 / 12 * m * (3 * r * r + h * h)
    $('#result1').val(Ixy)
})
$('button2').on('click', function() {
    var m = $('#mass').val()
    var r = $('#radius').val()
    var h = $('#height').val()
    m = Number(m)
    h = Number(h)
    r = Number(r)
    Ixy = 1 / 12 * m * (3 * r * r + h * h)
    $('#result1').val(Ixy)
})
$('button3').on('click', function() {
    var m = $('#mass').val()
    var r = $('#radius').val()
    var h = $('#height').val()
    m = Number(m)
    h = Number(h)
    r = Number(r)
    Iz = 1 / 2 * m * r * r
    $('#result1').val(Iz)
})
$('button4').on('click', function() {
    var m = $('#mass').val()
    var r = $('#radius').val()
    var h = $('#height').val()
    m = Number(m)
    h = Number(h)
    r = Number(r)
    Ishell = m * r * r
    $('#result1').val(Ishell)
})

$('button5').on('click', function() {
    var m = $('#spheremass').val()
    var r = $('#sphereradius').val()
    m = Number(m)
    r = Number(r)
    Isolid = 2 / 5 * m * r * r
    $('#result2').val(Isolid)
})
$('button6').on('click', function() {
    var m = $('#spheremass').val()
    var r = $('#sphereradius').val()
    m = Number(m)
    r = Number(r)
    Ishallow = 2 / 3 * m * r * r
    $('#result2').val(Ishallow)
})

$('button7').on('click', function() {
    var h = $('#plateheight').val()
    var w = $('#platewidth').val()
    h = Number(h)
    w = Number(w)
    Imiddle = 1 / 12 * m * (h * h + w * w)
    $('#result3').val(Imiddle)
})
$('button8').on('click', function() {
    var h = $('#plateheight').val()
    var w = $('#platewidth').val()
    h = Number(h)
    w = Number(w)
    Iend = 1 / 12 m * (4 * h * h + w * w)
    $('#result3').val(Iend)
})