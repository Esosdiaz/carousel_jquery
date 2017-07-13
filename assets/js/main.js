$(document).ready(function(){
	var fotos = $('.imagenes li').length;//cantidad de fotos en el slider
	var fotosPosicion = 1;// variable que recogera la posicion de la imagen, inicia en uno, puesto que al cargar la pagina esta va a ser la primera en mostrarse, por defecto
	for(i=0; i< fotos; i++){//crea dinamicamente la cantidad de circulos para cambiar la foto, dependiendo de la cantidad de fotos. 
		$('.paginacion').append('<li><span class="fa fa-circle"></span></li>')
	}

	$('.imagenes li').hide(); //esconde todas las fotos
	$('.imagenes li:first').show();//muestra la primera foto
	
	//llamados a las funciones que se desarrollan mas adelante
	$('.paginacion li').click(paginacion); //cambiara la foto con los iconos de abajo
	$('.derecha span').click(siguiente);//cambiara la foto a la derecha
	$('.izquierda span').click(anterior);//cambiara la foto hacia la izquierda

	//para que el carrusel sea automatico, llamando a la funcion next y dando 5 segundos de cambio entre fotos
	setInterval(function(){
		siguiente();
	},5000);

	// desarrollo de las funciones
	function paginacion(){
		var paginacionPosicion = $(this).index()+1; //posicion de la paginacion seleccionada, mas 1, para que comience en 1 y termine en 5
		$('.imagenes li').hide(); // oculta todos los slides
		$('.imagenes li:nth-child('+ paginacionPosicion +')').fadeIn(); //cambia a traves de un fade la foto dependiendo del circulo que se toco
	}
	function siguiente(){
		if(fotosPosicion>=fotos){ //regresa de la ultima posicion a la primera
			fotosPosicion= 1;
		}else{ // si no es la ultima, sigue con la siguiente
			fotosPosicion++
		}
		$('.imagenes li').hide(); //esconde las otras fotos
		$('.imagenes li:nth-child('+ fotosPosicion +')').fadeIn(); //cambia la foto a la siguiente posicion, por medio de un fade
	}
	function anterior(){
		if(fotosPosicion<= 1){ //regresa de la primera posicion a la ultima
			fotosPosicion=fotos
		}else{ // si no es la primera, sigue con la anterior
			fotosPosicion--
		}
		$('.imagenes li').hide(); //esconde las otras fotos
		$('.imagenes li:nth-child('+ fotosPosicion +')').fadeIn(); //cambia la foto a la posicion anterior, por medio de un fade
	}
	});