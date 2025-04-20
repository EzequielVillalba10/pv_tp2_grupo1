
import { actualizarTexto } from '../assets/modules/modulo_ejercicio21.js';  
 
const texto = document.getElementById('texto');  

texto.addEventListener('input', () => {  
    actualizarTexto(texto.value);  
});  