// ( function() {

//  var fecha = new Date();
//  document.write(fecha);

//  console.log(fecha.getHours());
//  console.log(fecha.getMinutes());
//  console.log(fecha.getSeconds());

//  console.log(fecha.getDay());
//  console.log(fecha.getMonth());
//  console.log(fecha.getFullYear());
//  console.log(fecha.getDate());


// } ())



(function(){
	var actualizarHora = function() {
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm = '',
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();


		var pHoras = document.getElementById('horasID'),
			pAMPM = document.getElementById('ampmID'),
			pMinutos = document.getElementById('minutosID'),
			pSegundos = document.getElementById('segundosID')
			pDiaSemana = document.getElementById('diaSemanaID'),
			pDia = document.getElementById('diaID'),
			pMes = document.getElementById('mesID'),
			pYear = document.getElementById('yearID'); 

		var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];		
		pDiaSemana.textContent = semana[diaSemana];

		pDia.textContent = dia;

		var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
		pMes.textContent = meses[mes]

		pYear.textContent = year;

		if (horas >= 12) {
			ampm = 'PM';
		}

		else {
			ampm = 'AM';
		}

		if (horas == 0) {
			horas = 12;
		}

		pHoras.textContent = horas;
		pAMPM.textContent = ampm;

		if (minutos < 10) {
			minutos = "0" + minutos 
		};

		if (segundos < 10) {
			segundos = "0" + segundos
		};

		pMinutos.textContent =  minutos;
		pSegundos.textContent = segundos;

	};

	actualizarHora();
	var intervalo = setInterval(actualizarHora, 1000);

} ())











// (function () {

// 	var contador = 0;

// 	var saludo = function () {
// 		contador++;
// 		console.log(contador);
		
// 		if (contador === 5) {
// 			clearInterval(contadorIntervalo)
// 		}

// 	};

// 	setTimeout(saludo, 1000);

// 	var  contadorIntervalo = setInterval(saludo, 1000);

// }()	)