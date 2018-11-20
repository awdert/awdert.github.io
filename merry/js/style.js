var oA=document.documentElement.clientHeight;
var mySwiper = new Swiper('.swiper-container',{
  on: {
    touchEnd: function(event){
     		if(mySwiper.getTranslate('y')==-oA) {
			$('.page-two,.page-one-b').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			})
	  	}else if(mySwiper.getTranslate('y')==-(oA*2)) {
	  		$('.page-three,.page-one-c').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			})
		}else if(mySwiper.getTranslate('y')==-(oA*3)) {
	  		$('.page-four,.page-one-d').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			})
		}else if(mySwiper.getTranslate('y')==-(oA*4)) {
	  		$('.page-five,.page-one-e').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			})
		}else if(mySwiper.getTranslate('y')==-(oA*5)) {
	  		$('.page-six,.page-one-f,.page-one-fa').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			})
		}else if(mySwiper.getTranslate('y')==-(oA*6)) {
	  		$('.page-seven,.page-one-g,.page-one-ga').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			})
		}else if(mySwiper.getTranslate('y')==-(oA*7)) {
	  		$('.page-eight,.page-one-h,.page-one-ha').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			})
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