function resultadito() {
  var ratio = document.getElementById("ratio").value;
  var raciones = document.getElementById("raciones").value;
  var gactual = document.getElementById("gluco_actual").value;
  var gdeseada = document.getElementById("gluco_deseada").value;
  var fsensibilidad = document.getElementById("factor_sensibilidad").value;
  var resultadoUno = ratio * raciones;
  var resultadoDos = (gactual - gdeseada) / fsensibilidad;
  var resultadoFinal = resultadoUno + resultadoDos;
  var insu = document.getElementById("insulina");
  //document.getElementById('insulinaP').innerHTML= Math.round(resultadoFinal);
}
