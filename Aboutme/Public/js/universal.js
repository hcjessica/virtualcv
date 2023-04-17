function inicializarSideNav(elemento_sidenav){

	$(elemento_sidenav).sidenav();

}

function abrirSideNav(elemento_sidenav){

	$(elemento_sidenav).sidenav('open');

}

function inicializarDropdown(elemento_dropdown){

	$(elemento_dropdown).dropdown();

}

function inicializarMaterialBoxed(elemento_material_boxed){

	$(elemento_material_boxed).materialbox();

}

function inicializarTooltip(elemento_tooltip){

	$(elemento_tooltip).tooltip();

}

/*Para animar el progreso como barras
Necesita el IdBarra(div), el ancho de un idBarra para saber hasta donde incrementará el div
*/
function aumentarAnchoDivProgreso(arrayNombreElementoProgreso,arrayAnchoElementoProgreso){
  
  var tamArregloProgreso = arrayNombreElementoProgreso.length;
  
  for(var i = 0; i < tamArregloProgreso; i++){
  
      $(arrayNombreElementoProgreso[i]).css({"width": arrayAnchoElementoProgreso[i],"transition": "width 3s, background 3s"});
  
  }
  
}

/*Retornar las opciones para el doughnut con porcentaje de tooltip
 */
function retornarOpcionesDoughnutPorcentaje(){

	var doughnutPorcentajeOptions = {
			  responsive:false,
			  rotation: -0.5 * Math.PI,
			  cutoutPercentage: 50,
			  circumference: 2 * Math.PI,
			  legend: {
			    display: false
			  },
			  tooltips:{
			    bodyFontSize: 13,
			    callbacks: {
			        label: function(tooltipItem, data) {
			        	var dataset = data.datasets[tooltipItem.datasetIndex];
			          var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
			            return previousValue + currentValue;
			          });
			          var currentValue = dataset.data[tooltipItem.index];
			          var precentage = Math.floor(((currentValue/total) * 100)+0.5);         
			          return precentage + "%";
			        }
			      }
			  },
			  animation: {
			    animateRotate: false,
			    animateScale: true
			  }
	};

	return doughnutPorcentajeOptions;

}




