//estructura de datos, de tipo de objeto
//almacena varios tipos de datos, incluso objetos

var frutas = ["Manzana", "Cereza", "Platano", "Fresa" ];   //forma sintaxica de hacer un array

console.log(frutas); //(4) ['Manzana', 'Cereza', 'Platano', 'Fresa']

console.log(frutas.length); //con el .length me devuelve el número de elementos, en este caso 4

//Para acceder a cada elemento se pone el nombre del array y entre llavves va el indice del elemento
console.log[1]; //"Cereza"
 
//Metodos para array
// .push()  , añade elementos al final del array
var masFrutas = frutas.push("Uvas");
// .pop()  , elimina el último elemento
var ultimo = frutas.pop();
// unshift() , agrega el elemento entre parentesis al inicio del array y si existe lo mueve al inicio
var nuevaLongitud = frutas.unshift("papas");
// shift() , elimina al primer elemento del array
var borrarFruta = frutas.shift();
// .indexOf()  , me trae el indice del elemento entre parentesis
var posicion = frutas.indexOf("Cereza");
//uno puede añadir sus indices personalizados
frutas["loQueSea"] = "Piña";
// Object.keys() , con esta puedes ver los indices del array entre parentesis
Object.keys(frutas);
//. concat() , une dos arrays
var bayas = ["Moras" ,"Arandanos", "Frambuesas"];
var frutasyBayas = frutas.concat(bayas);  //['Manzana', 'Cereza', 'Durazno', 'Mango', 'Pera', 'Moras', 'Arandano', 'Frambuesa']
// .copyEuthin() , copia el elemento del indice a los indicados
frutas.copyWithin(1 , 0 , 2); //copia el elemento del indice 1 en los indices 0 y 2
// splice() , se puede utilizar para agregar nuevos elementos a una matriz
frutas.splice(1 , 0, "Limón", "Kiwi");  //el primer parametro indica el indice donde se debe insertart
//el segundo cuantos elementos se deben eliminar y los siguientes son los elementos a insertar
// toSpliced(), termina creando una nueva matriz sin afectar la original
// slice() , crea una nueva matriz eligiendo los elementos, según los indices puestos en el parentesis
var otrasFrutas = frutas.slice(1, 3); //["Cereza", Durazno]
var masFrutas = frutas.slice(3); // ['Mango', 'Pera', 'Moras', 'Arandano', 'Frambuesa']


// console.table(), con esta imprime las arrays y objetos en una tabla
console.table(frutas)



