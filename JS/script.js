const palabras = ["programador", "riwi", "ingles", "python", "javascript"];
let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
let palabraMostrada = '_'.repeat(palabraSecreta.length);
let intentosRestantes = 7;
let letrasUsadas = [];

function mostrarPalabra() {
    document.getElementById("palabra").textContent = palabraMostrada;
    document.getElementById("intentos").textContent = intentosRestantes;
    document.getElementById("letrasUsadas").textContent = letrasUsadas.join(', ');
}

function adivinar() {
    let letra = document.getElementById("adivinarInput").value.toLowerCase();

    if (letrasUsadas.includes(letra)) {
        alert('Ya has usado esta letra.');
        return;
    }

    letrasUsadas.push(letra);
    let acierto = false;

    for (let i = 0; i < palabraSecreta.length; i++) {
        if (palabraSecreta[i] === letra) {
            acierto = true;
            palabraMostrada = palabraMostrada.substring(0, i) + letra + palabraMostrada.substring(i + 1);
        }
    }

    if (!acierto) {
        intentosRestantes--;
    }

    if (intentosRestantes === 0) {
        alert('¡Oh no!, has perdido. La palabra era: ' + palabraSecreta);
        reiniciarJuego();
    } else if (palabraMostrada === palabraSecreta) {
        alert('¡Muy bien!, has adivinado la palabra, date una estrella a ti mismo.');
        reiniciarJuego();
    }

    mostrarPalabra();
    document.getElementById("adivinarInput").value = '';
}

function reiniciarJuego() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraMostrada = '_'.repeat(palabraSecreta.length);
    intentosRestantes = 6;
    letrasUsadas = [];
    mostrarPalabra();
}

mostrarPalabra();