/**
 * Social Link 3d v1.0
 * https://github.com/felipeluiz/SocialLink3d
 * MIT LIcensed
 *
 * Copyright (C) 2013 Luiz Felipe, @felipe_web_dev
 */

(function(){

	var item = document.getElementsByClassName("content-social"),
		numberItens = item.length,
		contentSocial = document.getElementsByClassName("social"),
		sizeItem = item[0].getBoundingClientRect().width,
		vendors = ["Webkit","Moz","O","ms"];


	document.addEventListener("mousemove",rotate,false);

	function rotate(event){
		var x = event.pageX,
			y = event.pageY;

		if(y >= item[0].offsetTop - 100){
			for(var i = 0; i < numberItens; i++){
				if(x >= item[i].offsetLeft-30 && x <= item[i].offsetLeft + sizeItem + 30){
					for(var j = 0; j < vendors.length; j++){
						item[i].style[vendors[j]+"Transform"] = "perspective(800px) rotateY(" + (x-item[i].offsetLeft+30) + "deg)";

						contentSocial[i].style[vendors[j]+"Transform"] = "perspective(800px) rotateY(" + (x-item[i].offsetLeft+210) + "deg)";
					}
				}
				else{
					item[i].setAttribute("style","");
					contentSocial[i].setAttribute("style","");
				}
			}
		}
	}
})();