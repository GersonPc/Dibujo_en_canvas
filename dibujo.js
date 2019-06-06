var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton_lineas");

var tex_color = document.getElementById("color_rojo");
var tex_color1 = document.getElementById("color_azul");
var tex_color2 = document.getElementById("color_amarillo");
var tex_color3 = document.getElementById("color_blanco");
var tex_color4 = document.getElementById("color_verde");

tex_color.addEventListener("click",colorDeLinea);
function colorDeLinea(){
    x = "red";
    return
}
tex_color1.addEventListener("click",colorDeLinea2);
function colorDeLinea2(){
    x = "blue";
    return
}
tex_color2.addEventListener("click",colorDeLinea3);
function colorDeLinea3(){
    x = "yellow";
    return
}
tex_color3.addEventListener("click",colorDeLinea4);
function colorDeLinea4(){
    x = "white";
    return
}

tex_color4.addEventListener("click",colorDeLinea5);
function colorDeLinea5(){
    x = "green";
    return
}


boton.addEventListener("click", dubujoPorClik);

var d = document.getElementById("hola");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dubujoPorClik()
{
    var lol = parseInt(texto.value);
    console.log(texto);
    var lineas = lol;
    var g = x;
    //var g = tex_color.value;
var x1, y1;
var x2, y2;
var l = 0;
var nxf, nyf;
var colorPro = g
var espacio = ancho / lineas

for(l = 0; l < lineas; l++)
{
    x1 = espacio * l;
    y1 = espacio * (l + 1);
    x2 = espacio * l;
    y2 = espacio * (l + 1);
    nxf = ancho - x1;
    nyf = ancho - y2;
    dibujarLinea(colorPro, ancho, x2, y2, 0);
    dibujarLinea(colorPro, 0, x1, y1, ancho);
    dibujarLinea(colorPro, x2, ancho, ancho, nxf);
    dibujarLinea(colorPro, 0, y2, nyf, 0);
}
}
dibujarLinea(colorPro, 1, 1, 0, ancho);
dibujarLinea(colorPro, ancho, ancho, 0, ancho);
dibujarLinea(colorPro, ancho, 0, ancho, ancho);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}