			var vivo_ul1=document.getElementById("vivo_ul1");
			var vivo_li1=document.getElementsByTagName("li");
			for(var i=0;i<7;i++){
				vivo_li1[i].onmouseover = function(){
					vivo_li1[0].style.backgroundColor='#FFFFFF';
					vivo_li1[0].style.color = '#666666';
				}
				vivo_li1[i].onmouseout = function(){
					vivo_li1[0].style.backgroundColor=  '#008cd6';
					vivo_li1[0].style.color = '#fff';
				}
			}