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

    animacion();
    mostrarPalabra();
    document.getElementById("adivinarInput").value = '';
}

function reiniciarJuego() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    palabraMostrada = '_'.repeat(palabraSecreta.length);
    intentosRestantes = 6;
    letrasUsadas = [];
    reinicioAnimacion()
    mostrarPalabra();
}

mostrarPalabra();

function animacion(){
    // Partes del avatar
    const cabeza = document.getElementById("cabeza");
    const torzo = document.getElementById("torzo");
    const brazoIz = document.getElementById("brazoIz");
    const brazoDe = document.getElementById("brazoDe");
    const pieIz = document.getElementById("pieIz");
    const pieDe = document.getElementById("pieDe");
    
    if (intentosRestantes==5){
        cabeza.style.display = "block";
    }
    else if (intentosRestantes==4){
        torzo.style.display = "block";
    }
    else if (intentosRestantes==3){
        brazoIz.style.display = "block";
    }
    else if (intentosRestantes==2){
        brazoDe.style.display = "block";
    }
    else if (intentosRestantes==1){
        pieIz.style.display = "block";
    }
    else if (intentosRestantes==0){
        pieDe.style.display = "block";
    }
}

function reinicioAnimacion(){
    cabeza.style.display = "none";
    torzo.style.display = "none";
    brazoIz.style.display = "none";
    brazoDe.style.display = "none";
    pieIz.style.display = "none";
    pieDe.style.display = "none";
}