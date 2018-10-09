$(function(){

$(window).ready(function(){
			alert("Bienvenido")
		});
		

//		$(window).on('load', function(){
//			alert("Bienvenido")
//		});


// --intento de corazon--

//$('.corazon__gris').click( function(e){
//		e.preventDefault();
//		$(this).toggleClass('.corazon-rojo');

//	});

//	$('.corazon__gris').on('click', function(e){

//		e.preventDefault();
//		e.stopPropagation();

//	});


		
 $('body').on('click', '.corazon__gris', function () {
        $(this).children('i').css('color', 'red');
        numero = parseInt($(this).text())
        numero = numero + 1;
        $(this).children('span').text(numero);
    });

}); 