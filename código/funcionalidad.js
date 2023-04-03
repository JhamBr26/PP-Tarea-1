function cargar() {
	var quantum1 = prompt('Ingresa el quantum de la primera ventana:', '1');
	var quantum2 = prompt('Ingresa el quantum de la segunda ventana:', '2');

	//Definición de la posición de la ventana 1
	//Se agrega left=700, top=500 para centrar las ventanas abiertas por el navegardor

	// Animar la barra de carga de la primera ventana
	var barra1 = document.querySelector('#barra1');
	var porcentaje1 = 0;
	var intervalo1 = setInterval(function () {
		if (porcentaje1 >= 100) {
			clearInterval(intervalo1);
			return;
		}
		porcentaje1 += 10;
		barra1.style.width = porcentaje1 + '%';
		barra1.style.backgroundColor = 'green';
		barra1.style.height = '10px';
	}, quantum1 * 100);

	// Animar la barra de carga de la segunda ventana
	var barra2 = document.querySelector('#barra2');
	var porcentaje2 = 0;
	var intervalo2 = setInterval(function () {
		if (porcentaje2 >= 100) {
			clearInterval(intervalo2);
			return;
		}
		porcentaje2 += 10;
		barra2.style.width = porcentaje2 + '%';
		barra2.style.backgroundColor = 'blue';
		barra2.style.height = '10px';
	}, quantum2 * 100);
    cargar2(quantum1 , quantum2);
}

function cargar2(quantum1 , quantum2) {
	// var quantum1 = prompt('Ingresa el quantum de la primera ventana:', '1000');
	// var quantum2 = prompt('Ingresa el quantum de la segunda ventana:', '2000');

	//Definición de la posición de la ventana 1
	//Se agrega left=700, top=500 para centrar las ventanas abiertas por el navegardor

	// Crear la primera ventana
	var ventana1 = window.open(
		'',
		'Ventana 1',
		'width=300, height=200, left=700, top=450'
	);
	ventana1.document.write('<h1>Ventana 1</h1>');
	ventana1.document.write("<div id='barra1'></div>");

	// Crear la segunda ventana
	var ventana2 = window.open(
		'',
		'Ventana 2',
		'width=300, height=200,left=1200, top=450'
	);  
	ventana2.document.write('<h1>Ventana 2</h1>');
	ventana2.document.write("<div id='barra2'></div>");

	// Animar la barra de carga de la primera ventana
	var barra1 = ventana1.document.getElementById('barra1');
	var porcentaje1 = 0;
	var intervalo1 = setInterval(function () {
		if (porcentaje1 >= 100) {
			clearInterval(intervalo1);
			return;
		}
		porcentaje1 += 10;
		barra1.style.width = porcentaje1 + '%';
		barra1.style.backgroundColor = 'green';
		barra1.style.height = '10px';
	}, quantum1 / 10);

	// Animar la barra de carga de la segunda ventana
	var barra2 = ventana2.document.getElementById('barra2');
	var porcentaje2 = 0;
	var intervalo2 = setInterval(function () {
		if (porcentaje2 >= 100) {
			clearInterval(intervalo2);
			return;
		}
		porcentaje2 += 10;
		barra2.style.width = porcentaje2 + '%';
		barra2.style.backgroundColor = 'blue';
		barra2.style.height = '10px';
	}, quantum2 / 10);
}
