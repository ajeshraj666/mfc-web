$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 235) {
      $(".header-otr").addClass("slim-header");
    } else {
      $(".header-otr").removeClass("slim-header");
          }
   });
  

   //Mobile Menu

$('.top-nav-clone').clone().appendTo('.main-nav').addClass('desk-hide');
$('.main-nav ul li:has(ul)').addClass('submenu');
$('.main-nav ul li:has(ul)').append("<i></i>");

$('.extra-link ul li:has(ul)').addClass('submenu');
$('.extra-link ul li:has(ul)').append("<i></i>");

$('.main-nav ul i').click(function() {
    $(this).parent('li').toggleClass('open');
    $(this).parent('li').children('ul').slideToggle();
})

//Mobile Menu
$('.mob-btn').click(function() {
    if (!$('html').hasClass('show-menu')) {
        $('html').addClass('show-menu');
    } else {
        $('html').removeClass('show-menu');
    }
});

$('.overlay').click(function() {
    if ($('html').hasClass('show-menu')) {
        $('html').removeClass('show-menu');
    }
});


$('.hmOurService').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: $('.prev-logos'),
  nextArrow: $('.next-logos'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
       
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: false,
      }
    }

  ]
});


$('.clint-logos').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: $('.prev-logos'),
    nextArrow: $('.next-logos'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
    
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      }

    ]
  });
	



  $('.awards-logos').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: $('.prev-logos'),
    nextArrow: $('.next-logos'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: false,
        }
      }

    ]
  });
	
   









$('.hero-sesction').slick({
  infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear',
  prevArrow: true,
  nextArrow: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

//FAQ

let contentBox = document.querySelectorAll('.content-box');

for(i=0; i<contentBox.length; i++){
contentBox[i].addEventListener('click', function(){
      this.classList.toggle('active')
});
}


$('.containerSliderr').slick({
infinite: true,
slidesToShow: 3,
slidesToScroll: 1,
speed: 300,
fade: true,
cssEase: 'linear',
prevArrow: true,
nextArrow: true,
autoplay: true,
autoplaySpeed: 3000,
arrows: true,
prevArrow: $('.prev'),
nextArrow: $('.next'),
});

$('.containerSlider').slick({
infinite: false,
slidesToShow: 3,
slidesToScroll: 3,
arrows: true,
dots:false,
responsive: [
  {
    breakpoint: 1199,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots:true,
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots:true,
    }
  }
]
});




$('.certificatesSlider').slick({
  slidesToShow:1,
  slideToScroll: 1,
  autoplay:true,
  centerMode:true,
  variableWidth:true,
  dots: false,
  arrows: true,
  responsive: [
   {
     breakpoint: 991,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1,
       centerMode:false,
       variableWidth:false,
       arrows: false,
       dots: true
       
     }
   }
   ],
  });