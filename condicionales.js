if(true) {
    console.log("Hola"); //se ejecuta este código si la condicional es true
} else { //de lo contrario se ejecuta este código
    console.log("Soy falso");
}

//else if, 
var edad = 18;

if (edad === 18) {
    console.log("puedes votar, será tu primera votación");
}else if (edad > 18) { //se asigna una segunda condición que se ejecuta si las anteriores son falsas y esta true
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aún no puedes votar");
}

// se pueden anidar varios else if

var mascota = "pez";

if (mascota === "perro") {
    console.log("El mejor amigo que podrias tener");
} else if (mascota === "gato") {
    console.log("Los gatos son los mejores");
}else if (mascota === "hamster") {
    console.log("Pequeños y adorables");
}else if (mascota === "tortuga") {
    console.log("Un amoigo para toda la vida");
}else if (mascota === "loro") {
    console.log("Debes de tener charlas muy divertidas");
}else if (mascota === "pez") {
    console.log("Una mascota bastante tranquila");
}else {
    console.log(mascota + " es una mascota increible!");
}

//Condicionales de una linea: 

condition ? true : false;

var numero = 1;

var resultado = numero  === 1 ? "Si soy un uno" : "No soy un uno" ;

//se compone de una condicion, seguido del signo de pregunta, al frente de este el codigo en caso de verdadero
// despues dos puntos, para en caso contrario

//Piedra papel o tijeras

var player;
var pc = "papel";

function game (player) {
     if (player == pc){
        console.log("Empate!");
     }else{
        if (player == "piedra"){
            if (pc = "papel"){
                console.log("Pc gana!")
            } else {
                console.log("Tu ganas!")
            }
        } else if (player == "papel"){
            if (pc = "tijera"){
                console.log("Pc gana!")
            } else {
                console.log("Tu ganas!")
            }
        } else {
            if (pc = "piedra"){
                console.log("Pc gana!")
            } else {
                console.log("Tu ganas!")
            }
        }
     }
}

game("papel");