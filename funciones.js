//Declarativas

function miFuncion(){
    return 3;
};

miFuncion();

//De expresión o anonimas, al no llevar un nombre, sino una varable

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();

//Ejemplo

function saludarEstudiantes(estudiante) {

    console.log(`Hola ${estudiante}`);
}

// ejemplo de llamado

saludarEstudiantes("Sergio");
