combustible=prompt("Ingrese la cantidad de litros de combustible consumidos: ");
kilometros=prompt("Ingrese el numero de kilometros recorridos: ");

let consumo = combustible/kilometros

if (kilometros < combustible || combustible <= 0 || kilometros <= 0)
{
    alert("Por favor, ingrese valores numéricos válidos y mayores que cero.");
}
else
{
alert("El consumo segun la cantidad de litros y cantidad de kilometros recorrido es: " + consumo);

}