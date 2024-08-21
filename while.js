var estudiantes = ["Pedro", "Maria", "Claudia", "Sergio", "Olga"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//do while, primero ejecuta y luego revisa

var i = 0;

//do-while
do {
    saludarEstudiante(estudiantes[i]);
    i++;
} while (i < estudiantes.length);


//while, mientras la condición del parentesis sea true

while(estudiantes.length > 0) {
    console.log(estudiantes);
    var estudiante = estudiantes.shift();//va a sacar el primer elemento, hasta dejarlo en cero elementos
    saludarEstudiantes(estudiante);
}

/* Resultado:
(5) ['Pedro', 'Maria', 'Claudia', 'Sergio', 'Olga']
VM284:4 Hola, Pedro
VM290:2 (4) ['Maria', 'Claudia', 'Sergio', 'Olga']
VM284:4 Hola, Maria
VM290:2 (3) ['Claudia', 'Sergio', 'Olga']
VM284:4 Hola, Claudia
VM290:2 (2) ['Sergio', 'Olga']
VM284:4 Hola, Sergio
VM290:2 ['Olga']
VM284:4 Hola, Olga
undefined
*/

