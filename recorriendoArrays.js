
var articulo = [
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
    { nombre: "Mouse", costo: 800},
]

//Este metodo no modifica el array, sino que genera uno nuevo
//metodo filter, devuelve una o todas las filas, o en este caso los objetos

//primero nombre de la variable, seguido del nombre del array y el metodo
//dentro del parentesis se genera una nueva función que lleva como parametro el articulo que estamos buscando
//en este caso articulo
var articulosFiltrados = articulo.filter(function(articulo){
    return articulo.costo <= 500;
})

console.log(articulosFiltrados); /*Array (2)[
    {
    costo:
    320
    nombre:
    Libro
    }
    {
    costo:
    500
    nombre:
    Teclado
    }
    ]*/

//metodo map, con este se devuelven columnas o las propiedades
//trae los resultados de la llamada a la función aplicada a cada uno de los elementos

var articulosFiltrados = articulo.map(function(articulo){
    return articulo.nombre;
})

console.log(articulosFiltrados); //Array (8)[ Bici,Tv,Libro,Celular,Laptop,Teclado,Audifonos,Mouse ]

//metodo find, en caso de que exista devuelve true y de lo contrario false
//devuelve el primer valor que encuentra de la colección

var encuentraArticulo = articulo.find(function(articulo){
    return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo); // {nombre: "Laptop", costo: 20000}

//metodo forEach, ejecuta lo que le definamos una vez por cada elemento de nuestro array

articulosFiltrados.forEach(function(articulo){
    console.log(articulo.nombre);
});// nos regresa los nombres del array 

//metodo some, devuelve true si al menos uno de los elementos cumple la condición

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
})

console.log(articulosBaratos); //true

//metodo every, devuelve true si todos los elementos cumplen la condición

var articulosBaratos = articulos.every(function(articulo){
    return articulo.costo <= 700
})

console.log(articulosBaratos); //false

//metodo reduce, devuelve un solo valor, en este caso suma el costo de todos los productos

var total = articulos.reduce(function(total, articulo){
    return total + articulo.costo;
}, 0);

console.log(total); //38820
