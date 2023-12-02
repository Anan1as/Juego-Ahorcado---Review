let palabras = ["programacion", "riwi", "ingles", "python", "javascript"];
let palabraSecreta = palabras[Math.floor(Math.random()*palabras.length)];
let palabraMostrada = '_ '.repeat (palabraSecreta.length);
let intentosRestantes = 6;
let letrasUsadas = [];

function mostrarPalabra () {
    document.getElementById("palabra").textContent = palabraMostrada;
    document.getElementById("intentos").textContent = intentosRestantes;
    document.getElementById("letrasUsadas").textContent = letrasUsadas.join(', ');
}

function adivinar () {
    let letra = document.getElementById("adivinarInput").ariaValueMax.toLowerCase();

    if (letrasUsadas.includes(letra)) {
        alert("Ya has usado esta letra.");
        return;
    };

    letrasUsadas.push(letra);
    let acierto = false;

    for (let seguidor = 0; seguidor < palabraSecreta.length; seguidor++) {
        if (palabraSecreta[seguidor] === letra) {
            acierto = true;
            palabraMostrada = palabraMostrada.substring(0, seguidor) + letra + palabraMostrada.substring(seguidor + 1);
        };
    };

    if (!acierto) {
        intentosRestantes--;
    };

    if (intentosRestantes === 0) {
        alert("¡Oh no!, has perdido, la palabra era: " + palabraSecreta);
        reiniciarJuego();
    } else if (palabraMostrada === palabraSecreta) {
        alert("¡Muy bien!, has ganado el juego, date a ti mismo una estrellita.");
        reiniciarJuego();
    };

    mostrarPalabra();
        document.getElementById("adivinarInput").value = "";
    
    function reiniciarJuego() {
        palabraSecreta = palabras[Math.floor(Math.random()*palabras.length)];
        palabraMostrada = '_ '.repeat (palabraSecreta.length);
        intentosRestantes = 6;
        letrasUsadas = [];
        mostrarPalabra();
    };

    mostrarPalabra();
}