
const rol = prompt("Ingrese su rol (admin, editor, cliente):").trim().toLowerCase();

const estadoCuenta = prompt("Ingrese el estado de su cuenta (activa o suspendida):").trim().toLowerCase();

const horaInput = prompt("Ingrese la hora actual (entero de 0 a 23):");

const hora = parseInt(horaInput);

if (estadoCuenta === "suspendida") {
    alert("Acceso denegado: Su cuenta se encuentra suspendida.");
} else if (rol === "admin") {
    alert("Acceso total permitido.");
} else if (rol === "editor") {
    if (!isNaN(hora) && hora >= 8 && hora <= 18) {
        alert("Acceso permitido para editor (horario habil).");
    } else {
        alert("Acceso denegado: Los editores solo pueden ingresar entre las 8 y las 18 hs.");
    }
} else if (rol === "cliente") {
    if (estadoCuenta === "activa") {
        alert("Acceso permitido para cliente.");
    } else {
        alert("Acceso denegado: La cuenta del cliente no esta activa.");
    }
} else {
    alert("Rol no autorizado.");
}
