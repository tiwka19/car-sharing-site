$(function(){
    $('.top__slider').slick({
        arrows : false,
        dots : true, 
        autoplay : false,
        fade : true,
        responsive: [
            {
                breakpoint : 1200, 
                settings : {
                    dots : false
                }
            },
        ]
    });

    $('.reviews__slider').slick({
        arrows : false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.menu__btn').on('click', function(){
          $('.menu__list').toggleClass('menu__list--active')
      });
});