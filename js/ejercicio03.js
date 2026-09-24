const sueldoBrutoInput = prompt("Ingrese el Sueldo Bruto del trabajador (ARS):");

const sueldoBruto = parseFloat(sueldoBrutoInput);

if (isNaN(sueldoBruto) || sueldoBruto <= 0) {
    console.log("Error: Sueldo bruto invalido.");
} else {

    const jubilacion = sueldoBruto * 0.11;
    const obraSocial = sueldoBruto * 0.03;
    const ley19032 = sueldoBruto * 0.03;
    const totalRetencionesFijas = jubilacion + obraSocial + ley19032;

    const sueldoNetoProvisorio = sueldoBruto - totalRetencionesFijas;
    let impuestoGanancias = 0;

    if (sueldoNetoProvisorio > 1200000 && sueldoNetoProvisorio <= 2000000) {
        impuestoGanancias = (sueldoNetoProvisorio - 1200000) * 0.15;
    } else if (sueldoNetoProvisorio > 2000000) {
        impuestoGanancias = 120000 + (sueldoNetoProvisorio - 2000000) * 0.25;
    }

    const sueldoNetoFinal = sueldoNetoProvisorio - impuestoGanancias;

    console.log("--- RECIBO DE SUELDO ---");
    console.log(`Sueldo Bruto: $${sueldoBruto.toLocaleString()}`);
    console.log(`Descuentos de Ley (17%): $${totalRetencionesFijas.toLocaleString()} (Jubilacion: $${jubilacion.toLocaleString()}, O. Social: $${obraSocial.toLocaleString()}, Ley 19032: $${ley19032.toLocaleString()})`);
    console.log(`Retencion de Ganancias: $${impuestoGanancias.toLocaleString()}`);
    console.log(`Sueldo Neto Final: $${sueldoNetoFinal.toLocaleString()}`);
    
}
