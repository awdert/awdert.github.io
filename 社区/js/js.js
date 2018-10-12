var Oh2=document.getElementsByTagName("h2");
var Oh4=document.getElementsByTagName("h4");
var Op=document.getElementsByTagName("p");
var Oi=document.getElementsByTagName("i")
for(var i=0;i<Op.length;i++){
Op[i].index=i; Oh2[i].index=i; Oh4[i].index=i;
	Op[i].onmouseover=function(){		
			Oh2[this.index].style.display="block";
			Oh4[this.index].style.display="block";
			Op[this.index].style.opacity="0.5";
			Oi[this.index].style.transform="scale(0.6,0.6)";
			Oi[this.index].style.transition="1s";
		}
	Op[i].onmouseleave=function(){
			Oh2[this.index].style.display="none";
			Oh4[this.index].style.display="none";
			Op[this.index].style.opacity="0";
			Oi[this.index].style.transform="scale(1,1)";
			Oi[this.index].style.transition="1s";
		}
	Oh2[i].onmouseover=function(){		
			Oh2[this.index].style.display="block";
			Oh4[this.index].style.display="block";
			Op[this.index].style.opacity="0.5";
			Oi[this.index].style.transform="scale(0.6,0.6)";
			Oi[this.index].style.transition="1s";
		}
	Oh2[i].onmouseleave=function(){
			Oh2[this.index].style.display="none";
			Oh4[this.index].style.display="none";
			Op[this.index].style.opacity="0";
			Oi[this.index].style.transform="scale(1,1)";
			Oi[this.index].style.transition="1s";
		}
	Oh4[i].onmouseover=function(){		
			Oh2[this.index].style.display="block";
			Oh4[this.index].style.display="block";
			Op[this.index].style.opacity="0.5";
			Oi[this.index].style.transform="scale(0.6,0.6)";
			Oi[this.index].style.transition="1s";
		}
	Oh4[i].onmouseleave=function(){
			Oh2[this.index].style.display="none";
			Oh4[this.index].style.display="none";
			Op[this.index].style.opacity="0";
			Oi[this.index].style.transform="scale(1,1)";
			Oi[this.index].style.transition="1s";
		}
	}
	