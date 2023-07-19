var teclas = {
                UP: 38,
                DOWN: 40,
                LEFT: 37,
                RIGTH: 39
            };

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
    {
        console.log(evento.keyCode);
    }