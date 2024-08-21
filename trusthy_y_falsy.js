//Todo lo que no contenga nada o cero, es falso
Boolean(); //false
Boolean(null); //false
Boolean(Nan); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false
Boolean(0); //false

//Todo lo que contenga 1 o mayor, una letra, un array, un objeto o funcion ya es verdadero
Boolean(1); //true
Boolean(50); //true
Boolean([]); //true
Boolean({}); //true
Boolean(function(){}); //true
Boolean("a"); //true

