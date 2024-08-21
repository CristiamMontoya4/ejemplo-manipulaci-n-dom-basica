//Coerción es transformar un tipo de dato a otro de una variable

//Coerción implicita, esto es mediante la ayuda de javascript, ya que es débil y dinámicamente tipado

//Al encontrar una incoherencia, el motor interpreta a su manera y arroja un valor que puede ser erróneo
/* 
Ejemplos:
4 + "7" // 47
4 * "7" // 28
2 + true // 3
false - 3 // -3
!3 // false
*/

var a = "7" + 4;
typeof(a);//retornas un srtring 
var b = "7" * 4;
typeof(b);//retorna un número
var c = "#" * 4;
typeof(c); //retorna un número, al imprimir retorna un Nan y un undefined 

//Coerción explicita, la transformación del tipo de dato que controla el resultado

/*
Ejemplo:
Number("47") // 47
String(51) // "51"
Boolean(1) // true
*/

var a = 20;
var b = a + "";
console.log(b);// tipo: String, se conviertio el 20 en string con una concatenación :)

var c = String(a); //tipo: String
var d = Number(c); //ahora es un number

