var boton = document.getElementById("botoncito");
var texto = document.getElementById("texto_lineas");
boton.addEventListener("click", dibujoPorClick );


var d = document.getElementById("dibujito");
var ancho = d.width;

var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)    
    {
    lienzo.beginPath();
        lienzo.strokeStyle = color;
        lienzo.moveTo(xinicial,yinicial);
        lienzo.lineTo(xfinal,yfinal);
        lienzo.stroke();
        lienzo.closePath();
        
    }


function dibujoPorClick()
    {
        //alert(" hla " + x);
        var lineas = parseInt(texto.value);
        var l = 0;
        var yi , xf;
        var colorcito = "#0a0a0a";
        var espacio = ancho / lineas;
    
    
for(l = 0; l < lineas; l++)
        {
            yi = espacio * l;
            xf = espacio * (l + 1);
            dibujarLinea(colorcito, 0, yi, xf, 300);s
            //console.log("linea" + 1);
        }
     
    }