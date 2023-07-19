var d = document.getElementById("dibujito")
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var l_2 = 30
var xf_;



while(l < lineas)
{
yi = 10 * l;
xf = 10 * (l + 1);
xf_ = 10 * l_2
dibujarLinea("red",0,yi,xf,300);
//dibujarLinea("blue",600,yi,xf,0);
dibujarLinea("black",300,yi,xf_,300);
//dibujarLinea("orange",yi,300,300,xf);
l = l + 1;
//console.log("lineas" + l);
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
    
}


