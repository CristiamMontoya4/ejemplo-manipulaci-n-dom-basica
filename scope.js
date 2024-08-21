//Scope global, lo pueden utilizar en todos lados

var miNombre = "Diego";

//Scope local, solo lo pueden utilizar entre llaves

function  nombre() {
    var miApellido = "De Granda";
    console.log(miNombre + " " + miApellido);
}


//llamamos la función

nombre(); //Diego De Granda, puede utilizar la global y la local

//si llamamos la variable en en el scope local

console.log(miApellido); //error de inexistente