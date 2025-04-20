import {obtenerColorAleatorio} from "../assets/modules/modulo_ejercicio24.js";

const pantallaInicio = document.getElementById("pantallaInicio");
const pantallaColor = document.getElementById("pantallaColor");

const botonInicio = document.getElementById("cambiarColorBtn");
const botonCambiar = document.getElementById("cambiarColorBtn2");



const colorTexto= document.getElementById("colorActual");
const fraseTexto= document.getElementById("fraseColor");
const imagen = document.getElementById("imagenColor");

botonInicio.addEventListener("click", ()=> {
    pantallaInicio.style.display = "none";
    pantallaColor.style.display = "block";
    cambiarColor();
});

botonCambiar.addEventListener("click", cambiarColor);

function cambiarColor() {
    const color= obtenerColorAleatorio();
    document.body.style.backgroundImage = "none";

    document.body.style.backgroundColor = color.codigo;
    colorTexto.textContent = `Color actual: ${color.nombre}`;
    fraseTexto.textContent = color.frase;
    imagen.src = color.imagen;
    imagen.alt= `Imagen del color ${color.nombre}`;

    botonCambiar.style.backgroundColor = color.codigo;
    botonCambiar.style.color = "#000";
    console.log(`Color de fondo cambiado a: ${color.nombre} (${color.codigo})`);
}

document.body.style.backgroundImage = "url(https://i.pinimg.com/originals/7d/13/b3/7d13b30fff3fd079d8cd56c830091881.png)";
