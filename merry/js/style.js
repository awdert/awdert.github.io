var oA=document.documentElement.clientHeight;
var mySwiper = new Swiper('.swiper-container',{
  on: {
    touchMove: function(event){
    	if(mySwiper.getTranslate('y')==0) {
			$('.page-one,.page-one-a').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			$(".aa").addClass("animated fadeIn");
			$(".bb,.cc,.dd,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
	  	}else if(mySwiper.getTranslate('y')==-oA) {
			$('.page-two,.page-one-b').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			$(".bb").addClass("animated fadeIn");
			$(".aa,.cc,.dd,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
	  	}else if(mySwiper.getTranslate('y')==-(oA*2)) {
	  		$('.page-three,.page-one-c').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			$(".cc").addClass("animated fadeIn");
			$(".aa,.bb,.dd,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
		}else if(mySwiper.getTranslate('y')==-(oA*3)) {
	  		$('.page-four,.page-one-d').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			})
			$(".dd").addClass("animated fadeIn");
			$(".aa,.cc,.bb,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
		}else if(mySwiper.getTranslate('y')==-(oA*4)) {
	  		$('.page-five,.page-one-e').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			$(".ee").addClass("animated fadeIn");
			$(".aa,.cc,.dd,.bb,.ff,.gg,.hh").removeClass("animated fadeIn");
		}else if(mySwiper.getTranslate('y')==-(oA*5)) {
	  		$('.page-six,.page-one-f,.page-one-fa').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			$(".ff").addClass("animated fadeIn");
			$(".aa,.cc,.dd,.ee,.bb,.gg,.hh").removeClass("animated fadeIn");
		}else if(mySwiper.getTranslate('y')==-(oA*6)) {
	  		$('.page-seven,.page-one-g,.page-one-ga').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			$(".gg").addClass("animated fadeIn");
			$(".aa,.cc,.dd,.ee,.ff,.bb,.hh").removeClass("animated fadeIn");
		}else if(mySwiper.getTranslate('y')==-(oA*7)) {
	  		$('.page-eight,.page-one-h,.page-one-ha').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			$(".hh").addClass("animated fadeIn");
			$(".aa,.cc,.dd,.ee,.ff,.bb,.bb").removeClass("animated fadeIn");
		}
    },
  },
});
function updater() {
	$('.mengban').show();
	$('.saomiao').show();
}
function over() {
	$('.mengban').hide();
	$('.saomiao').hide();
}
function reload() {
	location.reload();
}
