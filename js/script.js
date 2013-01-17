/**
 * Social Link 3d v1.0
 * https://github.com/felipeluiz/SocialLink3d
 * MIT LIcensed
 *
 * Copyright (C) 2013 Luiz Felipe, @felipe_web_dev
 */

(function(){

	var elementFront  = document.getElementsByClassName("front"),
		numberItens = elementFront .length,
		elementBack  = document.getElementsByClassName("back"),
		sizeItem = elementFront[0].offsetWidth,
		vendors = ["Webkit","Moz","O","ms"];


	document.addEventListener("mousemove",rotate,false);

	function rotate(event){
		var x = event.pageX,
			y = event.pageY;

		if(y >= elementFront[0].offsetTop - 100){
			for(var i = 0; i < numberItens; i++){
				if(x >= elementFront[i].offsetLeft-30 && x <= elementFront[i].offsetLeft + sizeItem + 30){
					for(var j = 0; j < vendors.length; j++){
						elementFront[i].style[vendors[j]+"Transform"] = "perspective(800px) rotateY(" + (x-elementFront[i].offsetLeft+30) + "deg)";

						elementBack[i].style[vendors[j]+"Transform"] = "perspective(800px) rotateY(" + (x-elementFront[i].offsetLeft+210) + "deg)";
					}
				}
				else{
					elementFront[i].setAttribute("style","");
					elementBack[i].setAttribute("style","");
				}
			}
		}
	}
})();