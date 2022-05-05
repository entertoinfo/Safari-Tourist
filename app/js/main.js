$(function () {
    $(".header__arrow-link").click(function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
    });

	});
    
