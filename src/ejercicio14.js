let numeros = [ 5,22,13,8,10];
console.log(numeros);
let nuevoArreglo = duplicar(numeros);


function duplicar(numeros){
   return numeros.map(numeros => numeros * 2);
}

console.log(nuevoArreglo);