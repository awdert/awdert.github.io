$('.mark-num').eq(0).click(function(){
	$('.a-num>.num').eq(0).html("01号");
	$('.a-num>.num').eq(1).html("02号");
	$('.a-num>.num').eq(2).html("03号");
	$('.a-num>.num').eq(3).html("04号");
});
$('.mark-num').eq(1).click(function(){
	$('.a-num>.num').eq(0).html("05号");
	$('.a-num>.num').eq(1).html("06号");
	$('.a-num>.num').eq(2).html("07号");
	$('.a-num>.num').eq(3).html("08号");
});
$('.mark-num').eq(2).click(function(){
	$('.a-num>.num').eq(0).html("09号");
	$('.a-num>.num').eq(1).html("10号");
	$('.a-num>.num').eq(2).html("11号");
	$('.a-num>.num').eq(3).html("12号");
});
for(let j=0;j<$('.change').length;j++){
	$('.change').eq(j).click(function(){
		$('.change').eq(j).css({'background':'#67B8F7','color':'#fff','border-color':'#fff'});
		$('.change').not($('.change').eq(j)).css({'background':'#fff','color':'#51ABF7','border-color':'#51ABF7'});
	})
}

for(let i=0;i<$('.button1').length;i++){
	$('.button1').eq(i).click(function(){
		var x=$('.plus').eq(i).html();
		var y=parseInt(x)+1;
		$('.plus').eq(i).html(y);
	})	
}


