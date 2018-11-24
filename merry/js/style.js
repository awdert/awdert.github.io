var oA=document.documentElement.clientHeight;
var mySwiper = new Swiper('.swiper-container',{
  on: {
     slideChangeTransitionEnd: function(){
    	if(mySwiper.getTranslate('y')==0) {
    		$(".bb,.cc,.dd,.ee,.ff,.gg,.hh").hide();
			$(".bb,.cc,.dd,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
    		$(".aa").show();
			$(".aa").addClass("animated fadeIn");
			$('.page-one,.page-one-a').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});			
	  	}else if(mySwiper.getTranslate('y')==(-oA)) {
    		$(".aa,.cc,.dd,.ee,.ff,.gg,.hh").hide();
			$(".aa,.cc,.dd,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
	  		$(".bb").show();
	  		$(".bb").addClass("animated fadeIn");
			$('.page-two,.page-one-b').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
	  	}else if(mySwiper.getTranslate('y')==-(oA*2)) {
	  		$(".bb,.aa,.dd,.ee,.ff,.gg,.hh").hide();
			$(".aa,.bb,.dd,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
	  		$(".cc").show();
	  		$(".cc").addClass("animated fadeIn");
	  		$('.page-three,.page-one-c').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
		}else if(mySwiper.getTranslate('y')==-(oA*3)) {
			$(".bb,.cc,.aa,.ee,.ff,.gg,.hh").hide();	
			$(".aa,.cc,.bb,.ee,.ff,.gg,.hh").removeClass("animated fadeIn");
			$(".dd").show();
 			$(".dd").addClass("animated fadeIn");   			
	  		$('.page-four,.page-one-d').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			})
			
		}else if(mySwiper.getTranslate('y')==-(oA*4)) {
			$(".ee").show();
			$(".ee").addClass("animated fadeIn");
    		$(".bb,.cc,.dd,.aa,.ff,.gg,.hh").hide();
    		$(".aa,.cc,.dd,.bb,.ff,.gg,.hh").removeClass("animated fadeIn");						
	  		$('.page-five,.page-one-e').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
		}else if(mySwiper.getTranslate('y')==-(oA*5)) {
			$(".aa,.cc,.dd,.ee,.bb,.gg,.hh").removeClass("animated fadeIn");
			$(".bb,.cc,.dd,.ee,.aa,.gg,.hh").hide();					
			$(".ff").show();
			$(".ff").addClass("animated fadeIn");  		
	  		$('.page-six,.page-one-f,.page-one-fa').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
		}else if(mySwiper.getTranslate('y')==-(oA*6)) {
			$(".gg").show();
			$(".gg").addClass("animated fadeIn");
    		$(".bb,.cc,.dd,.ee,.ff,.aa,.hh").hide();
    		$(".aa,.cc,.dd,.ee,.ff,.bb,.hh").removeClass("animated fadeIn");					
	  		$('.page-seven,.page-one-g,.page-one-ga').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
		}else if(mySwiper.getTranslate('y')==-(oA*7)) {
			$(".bb,.cc,.dd,.ee,.ff,.gg,.aa").hide();			
			$(".aa,.cc,.dd,.ee,.ff,.bb,.bb").removeClass("animated fadeIn");
			$(".hh").show();
			$(".hh").addClass("animated fadeIn");
	  		$('.page-eight,.page-one-h,.page-one-ha').css({
				'-webkit-animation-play-state':'running',
				'animation-play-state':'running'
			});
			
		}
    },
  },
})
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
