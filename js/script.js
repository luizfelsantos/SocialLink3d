/**
 * Social Link 3d v1.1
 * https://github.com/felipeluiz/SocialLink3d
 * MIT Licensed
 *
 * Copyright (C) 2013 Luiz Felipe, @felipe_web_dev
 */

(function(){

	var elementFront = document.getElementsByClassName( 'front' ),
		numberItens = elementFront.length,
		elementBack = document.getElementsByClassName( 'back' ),
		sizeItem = elementFront[0].offsetWidth,
		vendors = [ 'Webkit', 'Moz', 'O', 'ms' ],
		vendorsLen = vendors.length,
		spinSpace = ( 360 - sizeItem )/2,
		buttonLock = [].slice.call(document.getElementsByClassName( 'setRotate' ));

	// variable by hakim.se
	var supports3DTransforms =  'WebkitPerspective' in document.body.style ||
								'MozPerspective' in document.body.style ||
								'msPerspective' in document.body.style ||
								'OPerspective' in document.body.style ||
								'perspective' in document.body.style;

	if(supports3DTransforms){

		document.addEventListener( 'mousemove', rotate, false );
		buttonLock.forEach(function( element, i ){
			element.addEventListener( 'click', OnClick, false );
		});

		// estiliza o elemento com base na posição do mouse
		function rotate( event ){
			var mouseX = event.pageX;

			if( event.pageY >= elementFront[0].offsetTop - 100 ){
				for( var i = 0; i < numberItens; i++ ){

					if(mouseX >= ( elementFront[i].offsetLeft - spinSpace ) &&
						mouseX <= ( elementFront[i].offsetLeft + sizeItem + spinSpace ) &&
						buttonLock[i].getAttribute( 'data-rotation' ) == 'active' ){

						var posFront = ( mouseX - elementFront[i].offsetLeft + spinSpace ),
							posBack = ( mouseX - elementFront[i].offsetLeft + ( 180 + spinSpace ));

						for(var j = 0; j < vendorsLen; j++){
							elementFront[i].style[vendors[j] + 'Transform'] = 'perspective(800px) rotateY(' + posFront + 'deg)';
							elementBack[i].style[vendors[j] + 'Transform'] = 'perspective(800px) rotateY(' + posBack + 'deg)';
						}
					}
					else{
						elementFront[i].setAttribute( 'style' , '');
						elementBack[i].setAttribute( 'style' , '');
					}
				}
			}
		}

		function OnClick( event ){
			var element = event.target,
				index = buttonLock.indexOf( element );

			if(buttonLock[index].getAttribute( 'data-rotation' ) == 'active'){
				applyStyle( element, index, 'Unlock' );
			}
			else{
				applyStyle( element, index, 'Lock' );
			}		
		}

		// avalia o atributo data dos botões de travamento decidindo se
		// adiociona ou subtrai ao estilos, travando ou destravando a rotação
		function applyStyle( element, i, text ){
			var state = buttonLock[i].getAttribute( 'data-rotation' ) == 'active' ? 'deactive' : 'active';
			buttonLock[i].setAttribute( 'data-rotation', state );
			
			element.innerHTML = text;

			elementFront[i].classList.toggle( 'close' );
			elementBack[i].classList.toggle( 'open' );
		}
	}
	else{
		buttonLock.forEach(function( element, i ){
			element.parentNode.removeChild( element );
		});
	}
})();