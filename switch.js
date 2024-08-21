//establece casos, y se ejecutara el que coincida
var numero = 1;
//dentro del switch va una variable o un caso
switch (numero) {
    case 1://al frente de case, va el caso o resultado posible
        console.log("Soy uno!");//el código a ejecutar en caso de coincidir
        break; //permite salir del switch
    case 10:
        console.log("Soy un diez!");
        break; 
    case 100:
        console.log("Soy un cien!");
        break; 
    default: //se ejecuta en caso de no coincidir con ningún caso
        console.log("No soy nada");
        break;
}

//piedra, papel o tijeras

var player = prompt("Ingresa piedra, papel o tijera: ");
var pc = "papel";

switch(true) {
    case player == "piedra" && pc == "tijera" :
        alert("Ganaste crack! La maquina eligió: " + pc);
        break;
    case player == "papel" && pc == "piedra" :
        alert("Ganaste crack! La maquina eligió: " + pc);
        break;
    case player == "tijera" && pc == "papel" :
        alert("Ganaste crack! La maquina eligió: " + pc);
        break;
    case player == pc :
        alert("Es un Empate!, ambos sacaron " + player);//manda un mensaje de alerta
        break;
    default:
        alert("La computadora gana, ella saco " + pc + ", mientras tú sacaste " + player);//manda un mensaje de alerta
        break;

}