
const edad = parseInt(prompt("Ingrese la edad del conductor:"));

const cobertura = prompt("Ingrese el tipo de cobertura (terceros, terceros_completo, todo_riesgo):").trim().toLowerCase();

const accidentes = parseInt(prompt("Ingrese la cantidad de accidentes en el ultimo ano:"));

if (isNaN(edad) || isNaN(accidentes)) {
    alert("Error: Por favor, ingrese valores numericos validos.");
} else {
    let tarifaBase = 0;

    if (cobertura === "terceros") {
        tarifaBase = 45000;
    } else if (cobertura === "terceros_completo") {
        tarifaBase = 70000;
    } else if (cobertura === "todo_riesgo") {
        tarifaBase = 110000;
    } else {
        alert("Tipo de cobertura invalido.");
    }

    if (tarifaBase > 0) {
        if (accidentes >= 3 && cobertura === "todo_riesgo") {
            alert("Contratacion denegada: Con 3 o mas accidentes no se puede contratar cobertura 'Todo Riesgo'.");
        } else {
            let valorFinal = tarifaBase;

            if (edad < 25) {
                valorFinal += tarifaBase * 0.20;
            }

            if (accidentes === 0) {
                valorFinal -= tarifaBase * 0.10;
            }

            if (accidentes >= 3) {
                valorFinal += tarifaBase * 0.30;
            }

            alert(`El valor final de su poliza es: $${valorFinal.toLocaleString()} ARS`);
        }
    }
}
