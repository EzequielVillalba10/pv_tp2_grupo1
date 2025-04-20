//EJERCICIO 23 - modulo
export let holamundo = elemento => {
    const texto = document.getElementById("hl");
    switch(elemento)
        {
            case "js":
                texto.textContent = 'Console.log("Hola Mundo!");'
                console.log(elemento);
                break;
            case "java":
                texto.textContent = `public class HolaMundo {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");
    }
}`;
                console.log(elemento);
                break;
            case "c#":
                texto.textContent = `using System;
class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Hola Mundo");
    }
}`;
                console.log(elemento);
                break;
            case "c++":
                texto.textContent = `#include <iostream>
using namespace std;
main() {
    cout << "Hola Mundo" << endl;
}`;
                console.log(elemento);
                break;
        }
}