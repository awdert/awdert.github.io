var oLi=document.getElementsByClassName("oLi");
	var osy=document.getElementsByClassName("sy");
	var odd=document.getElementsByClassName("dd");
	var owd=document.getElementsByClassName("wd");
		oLi[0].onmouseover=function(){
			osy[0].src="../img/index1.png";
		}
		oLi[0].onclick=function(){
			osy[0].src="../img/index1.png";
			window.location.href="../demo/enter.html?uid=1000";
		}
		oLi[0].onmouseout=function(){
			osy[0].src="../img/index2.png";
		}
		oLi[1].onmouseover=function(){
			odd[0].src="../img/book2.png";
		}
		oLi[1].onclick=function(){
			odd[0].src="../img/book2.png";
			window.location.href="../demo/enter.html?uid=2000";
		}
		oLi[1].onmouseout=function(){
			odd[0].src="../img/book.png";
		}
		oLi[2].onmouseover=function(){
			owd[0].src="../img/mine2.png";
		}
		oLi[2].onclick=function(){
			owd[0].src="../img/mine2.png";
			window.location.href="../demo/enter.html?uid=3000";
		}
		oLi[2].onmouseout=function(){
			owd[0].src="../img/mine.png";
		}