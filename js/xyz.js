			var lis = document.getElementById("vivo_ul1");
			var obj_lis = lis.getElementsByTagName("li");
			for(i=1;i<7;i++){
				obj_lis[i].onmouseover = function(){
					obj_lis[0].style.backgroundColor='#FFFFFF';
					obj_lis[0].style.color = '#666666';
				}
				obj_lis[i].onmouseout = function(){
					obj_lis[0].style.backgroundColor='#008cd6';
					obj_lis[0].style.color = '#fff';
				}  
			}
			document.getElementById("chanpin1").onmouseover = function(){
					document.getElementById("chanpin").style.display="block";
					obj_lis[0].style.backgroundColor='#FFFFFF';
					obj_lis[0].style.color = '#666666';
				}
			document.getElementById("chanpin").onmouseover = function(){
					document.getElementById("chanpin").style.display="block";
					obj_lis[0].style.backgroundColor='#FFFFFF';
					obj_lis[0].style.color = '#666666';
				}
				document.getElementById("chanpin").onmouseout = function(){
					document.getElementById("chanpin").style.display="none";
					obj_lis[0].style.backgroundColor='#008cd6';
					obj_lis[0].style.color = '#fff';
				}
				document.getElementById("chanpin1").onmouseout = function(){
					document.getElementById("chanpin").style.display="none";
					obj_lis[0].style.backgroundColor='#008cd6';
					obj_lis[0].style.color = '#fff';
				}
			