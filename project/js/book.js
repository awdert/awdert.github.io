var oSel=document.getElementsByClassName("select");
var oSbox=document.getElementsByClassName("sbox");
var oCon=document.getElementById("containner");
var oOne=document.getElementsByClassName("one");
var oTwo=document.getElementsByClassName("two");
var oThree=document.getElementsByClassName("three");
var oStand=document.getElementsByClassName("stand");
var oX=oStand[0].children;
for(let i=0;i<oSel.length;i++){
	oSel[i].onmouseover=function(){
		oSbox[i].style.display="block";
	};	
	oSel[i].onclick=function(){
		oSbox[i].style.display="block";
	};
	oSel[i].onmouseout=function(){
		oSbox[i].style.display="none";
	};
}
oSel[0].onclick=function(){
	oCon.style.background="url(../img/background1.png) no-repeat";
	oCon.style.backgroundSize="100%";
	oOne[0].style.display="block";
	oTwo[0].innerHTML="给自己定一个小目标，先下一单"
	oThree[0].style.display="block";
	for(let i=0;i<oX.length;i++){
		oX[i].style.display="block";
	}
};
oSel[1].onclick=function(){
	oCon.style.background="url(../img/other_2.png) no-repeat";
	oCon.style.backgroundSize="100%";
	oOne[0].style.display="none";
	oTwo[0].innerHTML="没有待评价的订单哦~"
	oThree[0].style.display="none";
	for(let i=0;i<oX.length;i++){
		oX[i].style.display="none";
	}
};
oSel[2].onclick=function(){
	oCon.style.background="url(../img/other_2.png) no-repeat";
	oCon.style.backgroundSize="100%";
	oOne[0].style.display="none";
	oTwo[0].innerHTML="没有待退款的订单哦~"
	oThree[0].style.display="none";
	for(let i=0;i<oX.length;i++){
		oX[i].style.display="none";
	}
};
