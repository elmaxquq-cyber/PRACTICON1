const ingresosBrutos = parseFloat(prompt("Ingrese los ingresos brutos anuales (ARS):"));
const superficie = parseFloat(prompt("Ingrese la superficie afectada (m2):"));

if (isNaN(ingresosBrutos) || isNaN(superficie)) {
    alert("Error: Ingrese datos numericos validos.");
} else {
    let categoria = "";

    if (ingresosBrutos <= 6000000 && superficie <= 30) {
        categoria = "Categoria A";
    } else if (ingresosBrutos <= 12000000 && superficie <= 45) {
        categoria = "Categoria B";
    } else if (ingresosBrutos <= 18000000 && superficie <= 85) {
        categoria = "Categoria C";
    } else {
        categoria = "Regimen General (Supera los limites del Monotributo)";
    }

    alert(`La categoria tributaria asignada es: ${categoria}`);
}
