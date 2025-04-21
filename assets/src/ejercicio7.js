
let nombres = ["Gerardo", "Facundo", "Sofia", "Miguel", "Ezequiel", "Luna", "Carlos"];
console.log(nombres)

let nombreMasLargo = ""; // Inicializa como una cadena vacía

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i].length > nombreMasLargo.length) {
    nombreMasLargo = nombres[i]; // Actualiza si se encuentra un nombre más largo
  }
}

console.log("El nombre más largo es: ", nombreMasLargo);
console.log("La cantidad de letras del nombre más largo es:", nombreMasLargo.length)


