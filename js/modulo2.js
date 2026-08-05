/*
  Funciones
  Las funciones son bloques de código que se pueden reutilizar y ejecutar en cualquier momento. 
  Se definen con la palabra clave "function" seguida del nombre de la función y paréntesis 
  que pueden contener parámetros. 
  
  El código dentro de la función se ejecuta cuando se llama a la función por su nombre.
*/

//Funcion sin parametros
function saludar() {
  console.log("Hola, bienvenido a la programación web");
}

saludar(); // Llamada a la función
saludar(); // Llamada a la función
saludar(); // Llamada a la función

//Funcion con parametros
function saludarPersona(nombre) {
  console.log("Hola " + nombre + ", bienvenido a la programación web");
}

saludarPersona("Juan"); // Llamada a la función con argumento
saludarPersona("Maria"); // Llamada a la función con argumento
saludarPersona("Pedro"); // Llamada a la función con argumento

function calculadora(operacion, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    console.log("los valores no son validos");
  } else {
    let resultado;
    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "dividir":
        if (num2 === 0) {
          console.log("La operacion no es valida");
        } else {
          resultado = num1 / num2;
        }
        break;
      case "multiplicar":
        resultado = num1 * num2;
        break;
      default:
        console.log("operacion no valida");
    }
    if (resultado || resultado === 0) {
      console.log("El resultado es " + resultado);
    }
  }
}

calculadora("resta", 5, 5);

/*
  Ejercicio
  Crea un programa que funcione como un piedra papel o tijera.
  Debes pedirle a los dos jugadores que ingresen su jugada y 
  luego mostrar el resultado de quien gano.

  (Debes de utilzar funciones y condicionales)
*/


/*
  FUNCIONES CON RETORNO
*/
function sinRetorno() {
  console.log("Esta funcion no tiene retorno");
}

let variable1 = sinRetorno(); // Llamada a la función
console.log(variable1); // undefined

function conRetorno() {
  return "Esta funcion tiene retorno";
}

let variable2 = conRetorno(); // Llamada a la función
console.log(variable2); // Esta funcion tiene retorno

function ejemplo(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else if (num1 < num2) {
    return num2;
  }
  console.log("Los numeros son iguales");
}

let ejemplo1 = ejemplo("b", "a"); // Llamada a la función
console.log(ejemplo1)

function validarEntrada() {
  entrada = prompt("Ingresa piedra, papel o tijera").toLowerCase();
  if (entrada == "piedra" || entrada == "papel" || entrada == "tijera") {
    return entrada;
  } else {
    entrada = prompt("El valor no fue valido, ingresalo nuevamente");
    validarEntrada(entrada)
  }
}

function ppt() {
  let jugador1 = validarEntrada();
  let jugador2 = validarEntrada();
  if (
    (jugador1 === "piedra" && jugador2 === "tijeras") ||
    (jugador1 === "papel" && jugador2 === "piedra") ||
    (jugador1 === "tijeras" && jugador2 === "papel")
  ) {
    return "El jugador 1 gano";
  } else if (
    (jugador2 === "piedra" && jugador1 === "tijeras") ||
    (jugador2 === "papel" && jugador1 === "piedra") ||
    (jugador2 === "tijeras" && jugador1 === "papel")
  ) {
    return "El jugador 2 gano";
  } else {
    return "de alguna forma, algo salio mal";
  }
}

alert(ppt());

/*
  Detalles curiosos de las funciones
*/

let ejemplo3 = ppt; // Asignando la funcion a una variable
ejemplo3(); // Llamando a la funcion desde la variable

/*
  La linea anterior es muy diferente a escribir
  let ejemplo3 = ppt(); 
  ya que en este caso la funcion se ejecuta y se le asigna el valor de retorno a la variable, 
  mientras que en el primer caso se le asigna la funcion en si.
*/

console.log(ejemplo3); // Muestra la funcion en si

/*
  Alcance de las variables (Scope)
*/
let variableLocal = "Soy una variable local"; // Variable global
var variableGlobal = "Soy una variable global"; // Variable global
const constante = "Soy una constante"; // Variable global

if (true) {
  let ejemploLet = "Soy una variable local dentro de un bloque"; // Variable local
  var ejemploVar = "Soy una variable global dentro de un bloque"; // Variable global

}

if (true) {
  let ejemploLet = "Soy una variable local dentro de un bloque"; // Variable local
  var ejemploVar = "Soy una variable global dentro de un bloque"; // da error porque ya fue declarada en el bloque anterior
  const PI = 3.1416; // Variable local
}

console.log(ejemploLet); // Error: ejemploLet is not defined
console.log(ejemploVar); // Muestra Soy una variable global dentro de un bloque
console.log(PI); // Error: PI is not defined

if (true) {
  const K = 4;
  if (true) {
    var color = "Rojo";
    if (true) {
      let hobby = "nadar"
      console.log(K) //4
    }
  } else {
    console.log(hobby) // undefined
  }
  console.log(K) // 4
}
console.log(color) // "Rojo"

/*
  Recursion
*/

function contador(numero, limite) {
  if (numero < limite) {
    console.log(numero);
    numero++;
    contador(numero, limite)
  }
}

contador(0, 10);

/*
  var++ -> var = var + 1;
  var-- -> var = var - 1;
*/

/*
  Ejercicios de recursion
  1) Crea una funcion que cuente todos los numeros pares entre un numero de inicio y un limite
  2) Crea una funcion que cuente todos los numeros de dos en dos en reversa en una serie de numeros, ejemplo.
  Ej: Desde el 100 a 0... 100, 98, 96, 94, 92, 90....
  3) Crea una funcion que recree la sucesion de Fibonacci hasta el numero deseado mas cercano.
*/