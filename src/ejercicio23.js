//EJERCICIO 23
import { holamundo } from "../assets/modules/modulo_ejercicio23.js";

const seleccion = document.getElementsByName("leng");

seleccion.forEach(function(seleccion) {
    seleccion.addEventListener('change',() => {
        holamundo(seleccion.value)
    })
});