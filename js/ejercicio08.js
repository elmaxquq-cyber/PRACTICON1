const montoCarrito = parseFloat(prompt("Ingrese el monto total del carrito (ARS):"));
const categoriaUsuario = prompt("Ingrese la categoria del usuario (Bronce, Plata, Oro):").trim().toLowerCase();
const codigoCupon = prompt("Ingrese el codigo de descuento (DESC10, SUPER20 o ninguno):").trim().toUpperCase();

if (isNaN(montoCarrito) || montoCarrito < 0) {
    console.log("Error: Monto de carrito invalido.");
} else {
    let descuentoMembresia = 0;
    if (categoriaUsuario === "plata") {
        descuentoMembresia = 0.05;
    } else if (categoriaUsuario === "oro") {
        descuentoMembresia = 0.15;
    }

    let descuentoCupon = 0;
    switch (codigoCupon) {
        case "DESC10":
            descuentoCupon = 0.10;
            break;
        case "SUPER20":
            if (montoCarrito > 50000) {
                descuentoCupon = 0.20;
            } else {
                console.log("Aviso: El cupon SUPER20 requiere una compra superior a $50.000 y no fue aplicado.");
            }
            break;
        default:
            descuentoCupon = 0;
    }

    const montoConDescMembresia = montoCarrito * (1 - descuentoMembresia);
    const totalNetoConDescuentos = montoConDescMembresia * (1 - descuentoCupon);
    const totalDescuentoAplicado = montoCarrito - totalNetoConDescuentos;

    let costoEnvio = totalNetoConDescuentos > 100000 ? 0 : 4500;
    let totalPagar = totalNetoConDescuentos + costoEnvio;

    console.log("DETALLE DE COMPRA E-COMMERCE: ");
    
    console.log(`Monto inicial: $${montoCarrito.toLocaleString()}`);
    console.log(`Descuento total aplicado: $${totalDescuentoAplicado.toLocaleString()}`);
    console.log(`Costo de envio: $${costoEnvio.toLocaleString()}`);
    console.log(`Total neto a pagar: $${totalPagar.toLocaleString()}`);
}
