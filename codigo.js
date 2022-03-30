var jugada, eleccionMaquina;
var introduceNombre = prompt("Nombre jugador: ");
var opciones = ["piedra", "papel", "tijera"];

jugada = (prompt("Piedra, papel o tijera"));
eleccionMaquina = (opciones[Math.floor(Math.random() * opciones.length)]);

if (jugada == "papel" && eleccionMaquina == "papel" || jugada == "tijera" && eleccionMaquina == "tijera" || jugada == "piedra" && eleccionMaquina == "piedra") {
    document.write(`Jugador ${introduceNombre} : ${jugada} <br> Maquina:  ${eleccionMaquina} <br>`);
    document.write("Empate");
} else if (jugada == "papel" && eleccionMaquina == "tijera" || jugada == "tijera" && eleccionMaquina == "piedra" || jugada == "piedra" && eleccionMaquina == "papel") {
    document.write(`Jugador ${introduceNombre} : ${jugada} <br> Maquina:  ${eleccionMaquina} <br>`);
    document.write("Pierde");
} else {
    document.write(`Jugador ${introduceNombre} : ${jugada} <br> Maquina:  ${eleccionMaquina} <br>`);
    document.write("Gana");
}

document.write("<br>");

document.write("Fin del juego.");