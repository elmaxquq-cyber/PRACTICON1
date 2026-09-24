
const ingresoNeto = parseFloat(prompt("Ingrese su ingreso mensual neto (ARS):"));

const antiguedad = parseFloat(prompt("Ingrese su antiguedad laboral en anos:"));

const deudas = prompt("Posee deudas pendientes? (si / no):").trim().toLowerCase();

const montoCredito = parseFloat(prompt("Ingrese el monto del credito solicitado (ARS):"));

if (isNaN(ingresoNeto) || isNaN(antiguedad) || isNaN(montoCredito)) {
    
    alert("Error: Por favor, ingrese valores numericos validos.");
} else {
    let aprobado = true;
    let motivoRechazo = "";

    if (deudas === "si") {
        aprobado = false;
        motivoRechazo = "Posee deudas pendientes en su historial.";
    } else if (antiguedad < 1) {
        aprobado = false;
        motivoRechazo = "Antiguedad laboral menor a 1 ano.";
    } else {
        const cuotaMensual = (montoCredito * 1.30) / 12;
        const maxCuotaPermitida = ingresoNeto * 0.30;

        if (cuotaMensual > maxCuotaPermitida) {
            aprobado = false;
            motivoRechazo = `La cuota estimada ($${cuotaMensual.toFixed(2)}) supera el 30% del ingreso mensual neto.`;
        }
    }

    if (aprobado) {
        alert("Felicidades! Su solicitud ha sido Pre-Aprobada.");
    } else {
        alert(`Solicitud Rechazada. Motivo: ${motivoRechazo}`);
    }
}
