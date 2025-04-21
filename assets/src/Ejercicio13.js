//13. Escribir una función llamada mostrarArreglo que reciba un arreglo numérico como
//parámetro e imprima cada elemento en una línea a parte.

let numeros=[2,4,6,8,10];

const mostrarArreglo = numeros =>{
    numeros.forEach(numero => {
        console.log(numero);
    });
}
mostrarArreglo(numeros);