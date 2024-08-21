console.log(miNombre); //undefined

var miNombre = "Cristiam";

hey();//lleva la función arriba que las variables

function hey() {
    console.log("Hola " + miNombre);    
}

/*
Contexto de ejecución
-FAse creación:
1. Valor this, dentro del scope, es el objeto que la esta ejecutando, si hay use strict, este this es undefined
2. argumentos, similar un array y pasa los argumentos a la funcion
3. variables, son una copia de los valores de los argumentos, para poder acceder por su nombre
4. espacio para cada variable declarada con var, asignandole undefined

-Fase de ejecución
Como ya esta asignadas en memoria, y luego ya le asigna el valor al leer el código
Con las funciones la elevan y por eso se puede primero llamar la función y luego escribirla

Coloca la función en memoria

Si la función esta dentro de una variable, solo eleva la variable

Las clases solo se pueden usar despues de haberlas declaradas

Tambien eleva las importaciones, pero no las que esten dentro de un bloque de código

Resumen:

var        |   declaración
function   |   completa
import     |   completa
class      |   no

let y const se elevan a la dead zone, donde se marcan como no inicializadas

Región del código, donde no podemos acceder a una variable porque la ejecución del programa
todavía no paso por la linea de código donde es declarada

Ejemplo:

let miEdad = getEdad();
const edad = 29;

function getEdad() {
    return edad;
}

let nombre = nombre; 

Genera un error porque edad aun no esta inicializada

*/