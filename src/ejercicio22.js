import { actualizarTexto } from "../assets/modules/modulo_ejercicio22.js";

const inputTexto = document.getElementById("entradaTexto");

inputTexto.addEventListener("input", (e) => {
  actualizarTexto(e.target.value);
});