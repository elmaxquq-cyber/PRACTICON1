
const dificultadRespirar = prompt("Presenta dificultad para respirar? (si / no):").trim().toLowerCase();
const nivelDolor = parseInt(prompt("Ingrese el nivel de dolor del 1 al 10:"));
const presionArterial = parseFloat(prompt("Ingrese la presion arterial sistolica (mm Hg):"));

if (isNaN(nivelDolor) || isNaN(presionArterial)) {
    alert("Error: Por favor, ingrese valores numericos validos para dolor y presion.");
} else {
    let colorTriaje = "";
    let tiempoEspera = "";

    if (dificultadRespirar === "si" || presionArterial > 180) {
        colorTriaje = "Rojo";
        tiempoEspera = "Atencion Inmediata";
    } else if (nivelDolor >= 7 || (presionArterial >= 140 && presionArterial <= 180)) {
        colorTriaje = "Amarillo";
        tiempoEspera = "Urgencia Media (Demora estimada: 30 a 60 minutos)";
    } else {
        colorTriaje = "Verde";
        tiempoEspera = "Consulta Baja Prioridad (Demora estimada: 2 horas o mas)";
    }

    alert(`Nivel de Triaje: ${colorTriaje}\nTiempo maximo de espera sugerido: ${tiempoEspera}`);
}
