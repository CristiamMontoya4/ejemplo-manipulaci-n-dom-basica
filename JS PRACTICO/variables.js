// Formas de declarar variables
// var: de alcance global, puede ser reasignada y redeclarada
// let: de alcance local y bloque, puede ser reasignada 
// const: de alcance local y bloque, no puede ser reasignada, ni redeclarada

let nombre = 'Cristiam';
nombre = 'Sergio';//su valor si se puede cambiar
nombre; //Sergio

const apellido = 'Montoya';  //su valor siempre va a ser el mismo y no cambia
apellido; //Montoya
apellido = 'Martinez'; //error
apellido; //Montoya

