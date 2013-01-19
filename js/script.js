/**
 * Social Link 3d v1.1
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
		vendorsLen = vendors.length,
		spinSpace = (360 - sizeItem)/2,
		rotation = [].slice.call(document.getElementsByClassName("setRotate"));

	document.addEventListener("mousemove", rotate, false);
	document.addEventListener("click", OnClick, false);

	function rotate(event){
		var mouseX = event.pageX;

		if(event.pageY >= elementFront[0].offsetTop - 100){
			for(var i = 0; i < numberItens; i++){

				if(mouseX >= (elementFront[i].offsetLeft - spinSpace) &&
					mouseX <= (elementFront[i].offsetLeft + sizeItem + spinSpace) &&
					rotation[i].getAttribute("data-rotation") == "active"){

					var posFront = (mouseX - elementFront[i].offsetLeft + spinSpace),
						posBack = (mouseX - elementFront[i].offsetLeft + (180 + spinSpace));

					for(var j = 0; j < vendorsLen; j++){
						elementFront[i].style[vendors[j]+"Transform"] = "perspective(800px) rotateY(" + posFront + "deg)";
						elementBack[i].style[vendors[j]+"Transform"] = "perspective(800px) rotateY(" + posBack + "deg)";
					}
				}
				else{
					elementFront[i].setAttribute("style","");
					elementBack[i].setAttribute("style","");
				}
			}
		}
	}

	function OnClick(event){
		var element = event.target,
			index = rotation.indexOf(element);

		if(rotation[index].getAttribute("data-rotation") == "active"){
			rotation[index].setAttribute("data-rotation","deactive");
			element.innerHTML = "Destravar";

			elementFront[index].classList.add("close");
			elementBack[index].classList.add("open");
		}
		else{
			rotation[index].setAttribute("data-rotation","active");
			element.innerHTML = "Travar";

			elementFront[index].classList.remove("close");
			elementBack[index].classList.remove("open");
		}
	}
})();