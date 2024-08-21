//Ciclos o Bucles

var estudiantes = ["Pedro", "Maria", "Claudia", "Sergio", "Olga"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}
 //Bucle for, utiliza una variable, en el primer segmento inicio, luego final y tercero el incremento
for(var i=0 ;i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//for of, recorre los valores de un objeto iterable
for(var estudiante of estudiantes) { //estudiante se convierte en un index 0 del array, para luego ir recorriendo
    //cada elemento del array
    saludarEstudiantes(estudiante);
}
/*ejemplo
Hola, Pedro
Hola, Maria
Hola, Claudia
Hola, Sergio
Hola, Olga  */

//for in, recorre las propiedades de un objeto, en este caso trae los indices
for(var estudiante in estudiantes) { //estudiante se convierte en un index 0 del array, para luego ir recorriendo
    //cada elemento del array
    saludarEstudiantes(estudiante);
}
/*ejemplo
Hola, 0
Hola, 1
Hola, 2
Hola, 3
Hola, 4  */

