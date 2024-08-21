//Con document, permite leer html, estan el getElemnt, con muchas funcionalidades
//y esta querySelectr(), dentro del parentesis se escribe las etiquetas, id o clase
//parecido a como se hace en css
const h1 = document.querySelector('h1');
//querySelectorAll me devuelve un array de todos los existentes
//const p = document.querySelectorAll('p');
const p = document.querySelector('p');
//SI fuera elements seleccionaria todos, en este caso selecciona los de tipo clase, no requiere punto .
const parrafito = document.getElementsByClassName('parrafito');
//Este lee los elementos identificados con id, no requiere #
const pid = document.getElementById('pid');
// const input1 = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input1,
});//Nos mostrará un objeto con la variable y tipo, ejemplo pid : p#pid o parrafito: p.parrafito

// Cada uno tiene un monton de propiedades

console.log(h1); //Nos muestra toda la etiqueta de h1 e inclusive su linea

//Podemos escuchar un elemento, de cada acción que se ejecute sobre el
console.log(input1.value);//Leera lo que contenga el input

//con .innerHTML permite modificar el html, que este dentro de la etiqueta
//h1.innerHTML = 'Hola <br> a todos!';
h1.innerHTML = input1.value;
//tambien esta .innerText, que solo acepta texto y si tuviera una etiqueta html seria texto
console.log(h1.getAttribute('pantalla'));//retorna el valor del atributo indicado de una etiqueta
h1.setAttribute('pantalla', 'gatitos'); //con setAttribute se modifica el valor de un atributo


//Con classList se pueden manipular las clases, en este caso se le añade una clase
h1.classList.add('luna');
h1.classList.remove('sol');

//h1.classList.toggle('verde'); para eventos, si ya tiene la clase se la ponga y se la quite
//h1.classList.contains('rojo'); devulve true o false si el elemnto tiene esa clase o no

//con los inputs se puede acceder directamente a su value
input1.value = '456';

//Crea elementos html, para ponerlo lo metemos en un elemento del html
const img = document.createElement('img');
//establecemos sus atributos
img.setAttribute('src', 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img);


//lo insertamos en un contenedor html que ya existia, agrega el elemento y luego el elemento html
pid.appendChild(img);

//En este caso usaremos el replaceWith
// pid.replaceWith(img);

//otra forma

//borrando todo lo que haya por dentro y luego se agrega la imagen
pid.innerHTML = "";
pid.appendChild(img);

