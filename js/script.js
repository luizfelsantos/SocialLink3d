/**
 * Social Link 3d v1.0
 * https://github.com/felipeluiz/SocialLink3d
 * MIT Licensed
 *
 * Copyright (C) 2013 Luiz Felipe, @felipe_web_dev
 */

(function(){

	var elementFront = document.getElementsByClassName("front"),
		numberItens = elementFront.length,
		elementBack = document.getElementsByClassName("back"),
		sizeItem = elementFront[0].offsetWidth,
		vendors = ["Webkit","Moz","O","ms"],
		vendorsLen = vendors.length;

	document.addEventListener("mousemove",rotate,false);

	function rotate(event){
		var mouseX = event.pageX;

		if(event.pageY >= elementFront[0].offsetTop - 100){
			for(var i = 0; i < numberItens; i++){
				if(mouseX >= elementFront[i].offsetLeft - 30 && mouseX <= elementFront[i].offsetLeft + sizeItem + 30){
					for(var j = 0; j < vendorsLen; j++){
						elementFront[i].style[vendors[j]+"Transform"] = "perspective(800px) rotateY(" + (mouseX - elementFront[i].offsetLeft + 30) + "deg)";

						elementBack[i].style[vendors[j]+"Transform"] = "perspective(800px) rotateY(" + (mouseX - elementFront[i].offsetLeft + 210) + "deg)";
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