let palabra = prompt ("Por favor, Ingrese una palabra");

let  contarLetraA = palabra =>{
    let contar = 0;
    for (let i = 0; i< palabra.length; i++ ){
        if (palabra[i]== 'a' || palabra [i] =='A')
            contar++;
    }
    return contar;
        
}
alert("La cantidad de veces que aparece la letra a es: " +contarLetraA (palabra));
