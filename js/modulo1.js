//Comentario de una sola linea
/*
  Comentario de 
  multiples lineas
*/

//VARIABLES
/*
  Espacio de memoria que se utiliza para almacenar datos,
  se puede cambiar su valor a lo largo del tiempo.
*/
let nombre = "Juan Rodriguez"; //string
let edad = 29; //number
let esMayor = true; //boolean
let apellido; //undefined
let ciudad = null; //null
let hobbies = ["futbol", "videojuegos", "leer"]; //array
let persona = {
  //object
  nombre: "Juan",
  edad: 29,
  esMayor: true,
  hobbies: ["futbol", "videojuegos", "leer"],
};

console.log(nombre);
let num1 = 10;
let num2 = "5";

let resultado = num1 + num2; //concatenacion
console.log(resultado);

let mensaje1 = "hola";
let mensaje2 = "mundo";

resultado = mensaje1 + " " + mensaje2;
console.log(resultado);

let prueba = 10 + "hola";
console.log(prueba); //10hola string

//OPERADORES DE ASIGNACION
/*
  = Asignacion
  += Suma y asignacion
  -= Resta y asignacion
  *= Multiplicacion y asignacion
  /= Division y asignacion
  **= Potencia y asignacion
  %= Modulo y asignacion
*/

let numero = 10;
numero += 5; //numero = numero + 5
numero -= 3; //numero = numero - 3
numero *= 2; //numero = numero * 2
numero /= 4; //numero = numero / 4
numero **= 3; //numero = numero ** 3
console.log(numero);

/*
  OPERADORES ARITMETICOS
  + Suma
  - Resta
  * Multiplicacion
  / Division
  ** Potencia
  % Modulo
*/

2 % 2; //0
5 % 2; //1

/*
  OPERADORES DE COMPARACION
  == Igualdad (compara solo el valor)
  === Igualdad estricta (compara valor y tipo de dato)
  != Diferente (compara solo el valor)
  !== Diferente estricta (compara valor y tipo de dato)
  > Mayor que
  < Menor que
  >= Mayor o igual que
  <= Menor o igual que
*/

2 == "2"; //true
2 === "2"; //false
2 != "2"; //false
2 !== 5; //true
2 < 1; //false
5 > 5; //false
5 >= 5; //true
5 <= 3; //false

/*
  OPERADORES LOGICOS
  && AND (y)
  || OR (o)
  ! NOT (no)
*/

2 > 5 && 3 === 3; //false

// (Facil)
let uno = !true || false; //false
let dos = false && !false; //false
let tres = true && !false; //true

//(Medio)
let cuatro = 5 === 5 || !true; //true
let cinco = !0 || 5 < 0; //true
let seis = 3 > 4 && !0; //false

//Avanzado
let siete = ((false || true) && !false && true) || (true && false); //true
let ocho = 6 === 3 + 3 && 9 / 3 >= 3; //true
let nueve = !!false || ("1" == 1 && !false === true); //true

//Hardcore
let diez = !!true === !!(5 >= 5); //true
let once = !(true && !true === !!(8 === 4 * 2)); //true

//Ultra-Hardcore
let doce = !(true && !true === !!(16 === 4 * 2 + 8)) !== false; //true

//Leyenda
let trece = !(
  (!(!(10 / 5 == "2") === false) != false) === 5 * 5 <= 100 / 4 &&
!(1 + 1 !== 10 / 5) !== true
); //true

//Inmortal
let catorce = !!(
  (10 % 3 != 1 || typeof ("10" - 5) !== "number" || !!([] && {})) &&
  (12 * 4 === "48" || (7 <= "7" && "7" <= 7) || Boolean(0) === Boolean("0"))
); //true

/*
  CONDICIONALES
*/
/*
  if(condicion){
    se realiza si la condicion se cumple
    //bloque de codigo
  } else if(condicion){
    se realiza si la condicion se cumple
    //bloque de codigo 
  } else{
    se realiza si nada de lo anterior se cumplio
  }
*/

let dinero = true;
let tiempo = false;
if (tiempo) {
  console.log("salgo");
} else if (dinero) {
  console.log("salgo por poco tiempo");
} else {
  console.log("mejor me quedo en casa");
}

/*
  SWITCH
*/

let dia = "martes";

switch (dia) {
  case "lunes":
    console.log("hoy es lunes");
    break;
  case "martes":
    console.log("hoy es martes");
    break;
  case "miercoles":
    console.log("hoy es miercoles");
    break;
  case "jueves":
    console.log("hoy es jueves");
    break;
  case "viernes":
    console.log("hoy es viernes");
    break;
  case "sabado":
    console.log("hoy es sabado");
    break;
  case "domingo":
    console.log("hoy es domingo");
    break;
  default:
    console.log("no es un dia valido");
    break;
}

dia = prompt("Ingrese un dia de la semana");
console.log(dia);
/*
  - Realiza un programa que funcione como una calculadora simple, preguntandole
  al usuario que operacion desea realizar (suma, resta, multiplicar, dividir) y 
  los dos numeros a operar, luego mostrar el resultado de la operacion.

  - Realiza los ejercicios de operadores logicos

  fecha de entrega: 03/08/26
*/
