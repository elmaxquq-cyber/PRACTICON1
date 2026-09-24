
let saldo = 250000;

const opcion = prompt(
    "Seleccione una operacion:\n" +
    "1: Consultar Saldo\n" +
    "2: Extraer Dinero\n" +
    "3: Depositar Dinero\n" +
    "4: Salir"
);

switch (opcion) {
    case "1":
        alert(`Su saldo actual es: $${saldo.toLocaleString()} ARS`);
        break;

        //loll
    case "2":
        const extraccion = parseFloat(prompt("Ingrese la cantidad a extraer (multiplos de $1.000):"));
        if (isNaN(extraccion) || extraccion <= 0) {
            alert("Monto invalido.");
        } else if (extraccion % 1000 !== 0) {
            alert("Error: La cantidad debe ser un multiplo de $1.000 ARS.");
        } else if (extraccion > saldo) {
            alert("Error: Fondos insuficientes para realizar la extraccion.");
        } else {
            saldo -= extraccion;
            alert(`Extraccion exitosa. Su nuevo saldo es: $${saldo.toLocaleString()} ARS`);
        }
        break;
    case "3":
        const deposito = parseFloat(prompt("Ingrese el monto a depositar:"));
        if (isNaN(deposito) || deposito <= 0) {
            alert("Monto de deposito invalido.");
        } else {
            saldo += deposito;
            alert(`Deposito exitoso. Su nuevo saldo es: $${saldo.toLocaleString()} ARS`);
        }
        break;
    case "4":
        alert("Gracias por operar en nuestro cajero automatico.");
        break;
    default:
        alert("Opcion no valida.");
}
