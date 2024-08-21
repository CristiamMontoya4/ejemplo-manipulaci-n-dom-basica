//se utilizan las llaves {}

var miAuto = {
    marca: "Toyota", //palabra clave, dos puntos y el valor
    modelo: "Corolla",
    annio: 2020,
    //las propiedades, que llevan funciones, son metodos
    detalle: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`); //this hace referencia al mismo objeto
    }
}// {marca: "Toyota", modelo: "Corolla", annio: 2020}

//para acceder a los valores de un objeto, se utiliza un punto ejemplo:
miAuto.marca; //"Toyota"
//para llamar un metodo se llama como si fuera una función
miAuto.detalle(); //Auto Corolla 2020

//Función constructora
function auto(marca, modelo, annio) {  //dentro del parentesis van las propiedades, que espera mi función
    this.marca = marca;  //en este caso this, hace referencia a la función constructora
    this.modelo = modelo;
    this.annio = annio;
}

//instanciar un objeto

var autoNuevo = new auto("Tesla", "Model 3", 2020);

//se crea la variable, palabra clave "new", seguida por el constructor y dentro el parentesis los parametros

//una forma de hacer varios registros de carros

var autos = [];
var cantidadAutos;

cantidadAutos = prompt("Cuantos autos desea registrar: ");

for(var i = 0 ; i < cantidadAutos ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, annio));
}

for(var i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}