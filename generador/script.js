var gris = document.getElementById("tesorosBuscar");
var amarillo = document.getElementById("praticarMejor");
var rojo = document.getElementById("copiarJeus");
var discursoNumero = document.getElementById("numeroAsignacion");
var dibujar = document.getElementById("imagenFinal");
var crearCanvas = dibujar.getContext("2d");
crearCanvas.imageSmoothingEnabled = true;
var imageLoader = document.getElementById('imageLoader');
imageLoader.addEventListener('change', handleImage, false);

var borrarTodo = document.getElementById("borrarTextos");

gris.addEventListener("click", dibujoGris );
amarillo.addEventListener("click", dibujoAmarillo );
rojo.addEventListener("click", dibujoRojo );
document.addEventListener("change", textear);


var $text1 = document.getElementById("txt1");
var $text2 = document.getElementById("txt2");
var $text3 = document.getElementById("txt3");
var $text4 = document.getElementById("txt4");

$text1.onkeyup=function(e){ redrawTexts(); }
$text2.onkeyup=function(e){ redrawTexts(); }
$text3.onkeyup=function(e){ redrawTexts(); }
$text4.onkeyup=function(e){ redrawTexts(); }


function redrawTexts(){
//crearCanvas.clearRect(0,0,dibujar.width,dibujar.height);
fillText(crearCanvas, $text1.value,726,260,1021,260,"Ubuntu");
fillText(crearCanvas, $text2.value,726,340,1021,340,"Ubuntu");
fillText(crearCanvas, $text3.value,726,420,1021,420,"Ubuntu");
fillText(crearCanvas, $text4.value,726,500,1021,500,"Ubuntu");
}

function fillText(context, text, x, y, maxWidth, fontSize, fontFace){
      var words = text.split(' ');
      var line = '';
      var lineHeight=fontSize;

      context.font=fontSize+" "+fontFace;

      for(var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;
        if(testWidth > maxWidth) {
          context.fillText(line, x, y);
          line = words[n] + ' ';
          y += lineHeight;
        }
        else {
          line = testLine;
        }
      }
      context.fillText(line, x, y);
      return(y);
    }


function handleImage(e){
    var reader = new FileReader();
    reader.onload = function(event)
    {
        var img = new Image();
        img.onload = function()
        {
          crearCanvas.drawImage(img,719,293);
        }
        img.src = event.target.result;
    }
    reader.readAsDataURL(e.target.files[0]);
}

function textear()
{
  crearCanvas.fillStyle="#FFFFFF";
  crearCanvas.font="70px Ubuntu";
  crearCanvas.textBaseline="top";
  crearCanvas.fillText(discursoNumero.value,726,162);
}

function dibujoGris()
{
  crearCanvas.fillStyle = "#606970";
  crearCanvas.fillRect(0,0,1280,720);
  var img = new Image();
  img.onload = function()
  {
    crearCanvas.drawImage(img, 140, 155);
  }
  img.src = "img/libro.png";
}

function dibujoAmarillo()
{
  crearCanvas.fillStyle = "#c08527";
  crearCanvas.fillRect(0,0,1280,720);
  var img = new Image();
  img.onload = function()
  {
    crearCanvas.drawImage(img, 140, 155);
  }
  img.src = "img/espiga.png";
}

function dibujoRojo()
{
  crearCanvas.fillStyle = "#941325";
  crearCanvas.fillRect(0,0,1280,720);
  var img = new Image();
  img.onload = function() {
    crearCanvas.drawImage(img, 140, 155);
  }
  img.src = "img/ovejita.png";
}

var navegadorChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
if(navegadorChrome != true)
{
  alert("Este sitio funciona con Google Chrome, descarguelo para usar el generador de imágenes.")
}
