const edades = [18, 20, 22, 19, 25, 32, 52, 24];

const calcularPromedio = (arr) => {
  let suma = 0; // Variable en la que se acumula el promedio de las edades mediante sumas sucesivas...
  arr.forEach(edad => {
    suma += edad;
  });
  return suma / arr.length; // dividimos la suma de las edades por el tamaño del arreglo para obtener el promedio
};

const promedio = calcularPromedio(edades);


console.log("El promedio de las edades es: ", promedio);