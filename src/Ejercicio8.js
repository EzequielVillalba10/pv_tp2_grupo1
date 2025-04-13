//8.Declarar una función con nombre calcularMayor() y pasarle como
//parámetros (numero1,numero2). Dentro de la función mostrar un alert que diga cuál de los
//números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de un
//alert también.
//Invocar la función y enviar los argumentos con diferentes números para probar.

function calcularMayor(num1,num2){

    if(num1>num2){
        window.alert(num1+" es mayor a "+num2);

    }else if(num2>num1){
            window.alert(num2+" es mayor a "+num1);

    }else{
        window.alert("los numeros son iguales");
    }

}
calcularMayor(422,424);