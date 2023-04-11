$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 235) {
      $(".header-otr").addClass("slim-header");
    } else {
      $(".header-otr").removeClass("slim-header");
          }
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