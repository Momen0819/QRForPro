// preloader

$(window).on('load', function() {
    $('.loader-container').fadeOut(300);
    $('.loader').fadeOut(300);
    $('body').css('overflow', 'auto');
    $('body').css('overflow-x', 'hidden');
 });
