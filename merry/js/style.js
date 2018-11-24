var oA=document.documentElement.clientHeight;
var mySwiper = new Swiper('.swiper-container',{
  on: {
    touchEnd: function(event){
    	if(mySwiper.getTranslate('y')==0) {
    		$(".aa").show();
    		$(".bb,.cc,.dd,.ee,.ff,.gg,.hh").hide();
			$(".aa").addClass("animated fadeIn");
			$(".bb,.cc,.dd,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
			$('.page-one,.page-one-a').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});			
	  	}else if(mySwiper.getTranslate('y')==-oA) {
	  		$(".bb").show();
    		$(".aa,.cc,.dd,.ee,.ff,.gg,.hh").hide();
	  		$(".bb").addClass("animated fadeIn");
			$(".aa,.cc,.dd,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
			$('.page-two,.page-one-b').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
	  	}else if(mySwiper.getTranslate('y')==-(oA*2)) {
	  		$(".cc").show();
    		$(".bb,.aa,.dd,.ee,.ff,.gg,.hh").hide();
	  		$(".cc").addClass("animated fadeIn");
			$(".aa,.bb,.dd,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
	  		$('.page-three,.page-one-c').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
		}else if(mySwiper.getTranslate('y')==-(oA*3)) {
			$(".dd").show();
    		$(".bb,.cc,.aa,.ee,.ff,.gg,.hh").hide();
			$(".dd").addClass("animated fadeIn");
			$(".aa,.cc,.bb,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
	  		$('.page-four,.page-one-d').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			})
			
		}else if(mySwiper.getTranslate('y')==-(oA*4)) {
			$(".ee").show();
    		$(".bb,.cc,.dd,.aa,.ff,.gg,.hh").hide();
			$(".ee").addClass("animated fadeIn");
			$(".aa,.cc,.dd,.bb,.ff,.gg,.hh").removeClass("animated fadeIn");
	  		$('.page-five,.page-one-e').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
		}else if(mySwiper.getTranslate('y')==-(oA*5)) {
			$(".ff").show();
    		$(".bb,.cc,.dd,.ee,.aa,.gg,.hh").hide();
			$(".ff").addClass("animated fadeIn");
			$(".aa,.cc,.dd,.ee,.bb,.gg,.hh").removeClass("animated fadeIn");
	  		$('.page-six,.page-one-f,.page-one-fa').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
		}else if(mySwiper.getTranslate('y')==-(oA*6)) {
			$(".gg").show();
    		$(".bb,.cc,.dd,.ee,.ff,.aa,.hh").hide();
			$(".gg").addClass("animated fadeIn");
			$(".aa,.cc,.dd,.ee,.ff,.bb,.hh").removeClass("animated fadeIn");
	  		$('.page-seven,.page-one-g,.page-one-ga').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
		}else if(mySwiper.getTranslate('y')==-(oA*7)) {
			$(".hh").show();
    		$(".bb,.cc,.dd,.ee,.ff,.gg,.aa").hide();
			$(".hh").addClass("animated fadeIn");
			$(".aa,.cc,.dd,.ee,.ff,.bb,.bb").removeClass("animated fadeIn");
	  		$('.page-eight,.page-one-h,.page-one-ha').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
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
