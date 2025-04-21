const sumarRango = (inicio, fin) => {
    if (fin < inicio) {
        alert("Error, el valor fin no puede ser menor que el valor numerico inicio!");
        return 0;
    } else {
        let suma = 0;
        for (let i = inicio; i <= fin; i++) {
            suma += i;
        }
        return suma;
    }
};

let inicio = parseInt(prompt("Ingrese el valor inicial: "));
let fin = parseInt(prompt("Ingrese el valor final: "));

let suma = sumarRango(inicio, fin);
alert("La suma de los valores entre esos rangos es: " + suma);