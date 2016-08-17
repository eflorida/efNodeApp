// main.js
// erikflorida.com
// by: Erik Florida

$(document).ready(function () {

    //Set the top section height to 52px less than the window height, revealing the next section below
    $('#homePage header').css('height', ($(window).height() - 80));
    $('#portSamples').css('min-height', ($(window).height() - 216));
    $('#resumeSamples').css('min-height', ($(window).height() - 288));

    //Create looping header text with sliding animation
    //--------------------------------------------------------------------
    var loopCycle = 0;

    function scrollText() {

        if (loopCycle === $('.scrolling-item').length) {
            loopCycle = 0;
        }
        $('.scrolling-item.active').hide().removeClass('active');

        $('.scrolling-item').each(function (index, value) {
            if (index === loopCycle) {
                $(this).slideDown();
                $(this).addClass('active');
            }
        });
        loopCycle = loopCycle + 1;

        setTimeout(scrollText, 3000);
    }

    scrollText();
    //--------------------------------------------------------------------

    //When the window is re-sized, adjust the top section height to still be 52px less than window height
    $(window).on('resize', function () {
        $('#homePage header').css('height', ($(window).height() - 80));
        $('#portSamples').css('min-height', ($(window).height() - 216));
        $('#resumeSamples').css('min-height', ($(window).height() - 288));
    });

    //Portfolio popup controls
    //--------------------------------------------------------------------
    $('article.overlayCard').on('click', function () {
      console.log('Card Clicked!');
        var overlayID = '#' + $(this).attr('data-overlay');
        $(overlayID).addClass('open');
    });

    $('.overlay-close').on('click', function () {
        $('.overlay.open').removeClass('open');
    });


    //Resume Links
    //--------------------------------------------------------------------
    $('#resume-linkedin').on('click', function () {
        window.open('http://www.linkedin.com/in/erikflorida/', '_blank');
    });
    $('#resume-text').on('click', function () {
      window.open('img/Erik_Florida_resume.pdf', '_blank');
    });

});
