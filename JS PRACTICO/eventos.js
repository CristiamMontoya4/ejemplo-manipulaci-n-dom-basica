const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.getElementById('calculo2');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');
const btn = document.querySelector('#btnCalcular');


form.addEventListener('click', sumarInputValues)    //El addEventListener es un escuchador de eventos, 
//primer parametro esta el evento que queremos escuchar, y el segundo la función que quiere ejecutar, sin parentesis en la función, ya que JS ya lo hace
//A QUIÉN -    QUÉ ACCIÓN - CUAL FUNCION
// btn.addEventListener('click',btnOnClick);


function sumarInputValues(event) {  //función que es llamada en el addEventListener
    console.log({event});
    event.preventDefault();//evita que se recargue la pagina y que se envie el formulario a la misma ruta, con metodo GET
    const sumarInputs = Number(calculo1.value) + Number(calculo2.value);
    pResult.innerText = "Resultado: " + sumarInputs;
}

// Los eventos pueden ser:

// blur: Cuando el elemento pierde el foco.

// click: El usuario hace clic sobre el elemento.

// dblclick: El usuario hace doble clic sobre el elemento.

// focus: El elemento gana el foco.

// keydown: El usuario presiona una tecla.

// keypress: El usuario presiona una tecla y la mantiene pulsada.

// keyup: El usuario libera la tecla.

// load: El documento termina su carga.

// mousedown: El usuario presiona el botón del ratón en un elemento.

// mousemove: El usuario mueve el puntero del ratón sobre un elemento.

// mouseout: El usuario mueve el puntero fuera de un elemento.

// mouseover: El usuario mantiene el puntero sobre un elemento.

// mouseup: El usuario libera el botón pulsado del ratón sobre un elemento.

// unload: El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página.
