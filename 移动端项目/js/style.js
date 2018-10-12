var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
$('body').scroll(function(){
  console.log($('body').scrollTop());
  var x=$('body').scrollTop();
  if(x>200){
    $('.search').css('background','red');
  }else{
    $('.search').css('background','transparent');
  }
});


