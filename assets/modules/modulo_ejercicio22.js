export function actualizarTexto(input) {
    const salida = document.getElementById("salidaTexto");
    salida.textContent = input;
  
    if (input.length > 20) {
      salida.style.backgroundColor = "#ffe0e0"; //Esto sirve para cambiar de color
    } else {
      salida.style.backgroundColor = "transparent";
    }
  }