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

//1
function contarPares(numero, limite, contador = 0) {
  if (numero <= limite) {
    if (numero % 2 == 0) {
      contador++;
      numero++
      contarPares(numero, limite, contador);
    } else {
      numero++
      contarPares(numero, limite, contador);
    }
  } else {
    console.log("Hay " + contador + " numeros pares");
  }
}

contarPares(0, 100);

//2
function contarDeADosEnReversa(numero, limite) {
  if (numero >= limite) {
    console.log(numero);
    numero -= 2;
    contarDeADosEnReversa(numero, limite)
  }
}

contarDeADosEnReversa(100, 0);

//3
function fibonacci(limite, resultadoAntiguo = 0, resultadoNuevo = 1, contador = 0) {
  if ((resultadoAntiguo + resultadoNuevo) < limite) {
    console.log("Resultado antiguo: " + resultadoAntiguo);
    console.log("Resultado nuevo: " + resultadoNuevo);
    let resultado = resultadoAntiguo + resultadoNuevo
    console.log("total: " + resultado);
    fibonacci(limite, resultadoNuevo, resultado);
  }
}

fibonacci(100)

/*
  LOOPS (Ciclos)
*/

//FOR
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//WHILE
let j = 0;
while (j < 10) {
  console.log(j);
  j++;
}

//DO WHILE
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 0);

/*
  ARRAYS
*/
let carros = ["Toyota", "Honda", "Ford", "Chevrolet", "Nissan"];
console.log(carros); // ['Toyota', 'Honda', 'Ford', 'Chevrolet', 'Nissan']
console.log(carros[0])

for (let i = 0; i < carros.length; i++) {
  console.log(carros[i]);
}

/*
  FOR OF
*/

for (let carro of carros) {
  console.log(carro);
}

let compras = [
  ["carne", "pollo", "pescado"],
  ["manzana", "pera", "platano"],
  ["pan", "tortilla", "galleta"]
]

console.log(compras[0]); //["carne", "pollo", "pescado"]
console.log(compras[0][0]); // carne

let inventario = [
  [
    ["nike", "adidas", "puma"],
    ["camisetas", "pantalones", "zapatos"]
  ],
  [
    ["apple", "samsung", "xiaomi"],
    ["celulares", "tablets", "laptops"]
  ],
  [
    [["cocacola zero", "cocacola cherry"], "pepsi", "fanta"],
    ["refrescos", "jugos", "agua"]
  ]
]
/*
for (let categoria of inventario) {
  //console.log(categoria);
  for (lista of categoria) {
    //console.log(lista);
    for (elemento of lista) {
      if (Array.isArray(elemento)) {
        for (miniElemento of elemento) {
          console.log(miniElemento)
        }
      } else {
        console.log(elemento)
      }
    }
  }
}
*/
function recursion(lista) {
  if (Array.isArray(lista)) {
    for (elemento of lista) {
      if (Array.isArray(elemento)) {
        recursion(elemento);
      } else {
        console.log(elemento);
      }
    }
  } else {
    console.error("Este elemento no se puede recorrer")
  }
}

recursion(inventario);

let nombre = "Juan"
nombre[1];

/*
  Objetos
*/

let persona = {
  nombre: "Juan",
  apellido: "Rodriguez",
  edad: 29,
  profesion: ["programador", "ceo", "entrenador pokemon"]
}

console.log(persona);
/*
  {
    nombre: "Juan",
    apellido: "Rodriguez",
    edad: 29,
    profesion: ["programador", "ceo", "entrenador pokemon"]
  }
*/

console.log(persona.nombre); //"Juan"

let carro = {
  marca: "nissan",
  anio: 2020,
  encender: function () {
    console.log("Encendido");
  }
}

carro.encender()

console.log(carro["marca"]); //nissan

/*
  FOR IN
*/

for (let propiedad in carro) {
  console.log(carro[propiedad]);
}

invetario = {
  carnes: {
    premium: [
      {
        nombre: "res",
        precio: 100,
        cantidad: 10
      },
      {
        nombre: "cerdo",
        precio: 80,
        cantidad: 20
      }
    ],
    regular: [
      {
        nombre: "pollo",
        precio: 50,
        cantidad: 30
      },
      {
        nombre: "pescado",
        precio: 70,
        cantidad: 40
      }
    ]
  },
  bebidas: {
    refrescos: [
      {
        nombre: "cocacola",
        precio: 20,
        cantidad: 50
      },
      {
        nombre: "pepsi",
        precio: 15,
        cantidad: 60
      }
    ],
    jugos: [
      {
        nombre: "jugo de naranja",
        precio: 25,
        cantidad: 70
      },
      {
        nombre: "jugo de manzana",
        precio: 30,
        cantidad: 80
      }
    ],
    quesos: [
      {
        nombre: "queso cheddar",
        variantes: [
          {
            nombre: "cheddar maduro",
            precio: 50,
            cantidad: 10
          },
          {
            nombre: "cheddar joven",
            precio: 40,
            cantidad: 20
          }
        ]
      },
      {
        nombre: "queso mozzarella",
        precio: 60,
        cantidad: 30
      }
    ]
  }
}

/*
  Ejercicio
  Crea un programa que imprima de forma organizada el inventario con sus categorias, subcategorias y productos.
*/