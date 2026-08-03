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
