

const distancia = parseFloat(prompt("Ingrese la distancia del recorrido en kilometros:"));
const tiempo = parseFloat(prompt("Ingrese el tiempo estimado en minutos:"));
const demanda = prompt("Ingrese el nivel de demanda (baja, media, alta):").trim().toLowerCase();

if (isNaN(distancia) || isNaN(tiempo)) {
    alert("Error: Ingrese valores numericos validos para distancia y tiempo.");
} else {
    
    const bajadaBandera = 800;
    const costoKm = 350;
    const costoMinuto = 80;

    let factorDemanda = 1.0;
    switch (demanda) {
        case "baja":
            factorDemanda = 1.0;
            break;
        case "media":
            factorDemanda = 1.3;
            break;
        case "alta":
            factorDemanda = 1.8;
            break;
        default:
            alert("Nivel de demanda no reconocido. Se aplicara factor estandar (1.0).");
            factorDemanda = 1.0;
    }

    let costoBase = (bajadaBandera + (distancia * costoKm) + (tiempo * costoMinuto)) * factorDemanda;

    let peaje = distancia > 20 ? 1500 : 0;
    let costoTotal = costoBase + peaje;

    alert(`El costo estimado total del viaje es: $${costoTotal.toFixed(2)} ARS`);
}
