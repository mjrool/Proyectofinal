$(function(){

$(window).ready(function(){
			alert("Bienvenido")
		});
		
//me gusta//
		
 $('body').on('click', '.corazon__gris', function () {
        $(this).children('i').css('color', 'red');
        numero = parseInt($(this).text())
        numero = numero + 1;
        $(this).children('span').text(numero);
    });

 //formulario//

 var Form = document.getElementById('form');

form .addEventListener('submit', function(e){
	e.preventDefault();
	console.log('hiciste click')

	var datos = new FormData(form);

	console.log(datos)
	console.log(datos.get('usuario'))
	console.log(datos.get('email'))
	console.log(datos.get('medidas'))
	console.log(datos.get('text-area'))
});

}); 