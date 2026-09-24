
const montoArs = parseFloat(prompt("Ingrese el monto en Pesos Argentinos (ARS):"));

const monedaDestino = prompt("Ingrese la moneda de destino (USD, EUR, BRL):").trim().toUpperCase();

const meses = parseInt(prompt("Ingrese los meses de proyeccion de inflacion (entero entre 1 y 12):"));

if (isNaN(montoArs) || isNaN(meses) || montoArs <= 0 || meses < 1 || meses > 12) {
    console.log("Error: Ingrese datos validos.");
} else {
    let cotizacion = 0;
    switch (monedaDestino) {
        case "USD":
            cotizacion = 1300;
            break;
        case "EUR":
            cotizacion = 1420;
            break;
        case "BRL":
            cotizacion = 220;
            break;
        default:
            console.log("Moneda de destino no soportada.");
    }

    if (cotizacion > 0) {
        const montoConComision = montoArs * 0.98;
        const montoMonedaExtranjera = montoConComision / cotizacion;

        const montoProyectadoArs = montoArs * (1 + 0.04 * meses);

        console.log("SIMULADOR FINANCIERO: ");
        console.log(`Monto recibido en ${monedaDestino}: ${montoMonedaExtranjera.toFixed(2)}`);
        console.log(`Valor equivalente proyectado por inflacion en ARS: $${montoProyectadoArs.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`);
    }
}
