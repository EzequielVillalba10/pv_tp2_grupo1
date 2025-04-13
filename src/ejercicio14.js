let numeros = [ 7,22,13,8,10];
let nuevoArreglo = duplicar(numeros);


function duplicar(numeros){
   return numeros.map(numeros => numeros * 2);
}

console.log(nuevoArreglo);