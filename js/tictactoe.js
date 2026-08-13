/**
 * @function validarNumero
 * @description sirve para validar que el dato sea un numero y que ese numero sea uno entre 0 y 2
 * @param {number} numero es el numero a validar
 * @returns {boolean} false en caso de que no se pase la validacion y true si todo esta correcto
 */
function validarNumero(numero) {
  if (isNaN(numero)) {
    alert("El dato ingresado no es un numero")
    return false;
  } else if (numero > 3 || numero < 0) {
    alert("El numero ingresado no es valido")
    return false;
  } else {
    return true;
  }
}

/**
 * @function pedirJugada
 * @description sirve para pedirle una jugada valida al jugar
 * @param {string} mensaje puede contener "fila" o "columna" para imprimir el mensaje correspondiente 
 * @returns la jugada ingresada por el jugador (un numero del 0 al 2) 
 */
function pedirJugada(mensaje = "fila") {
  do {
    var jugada = Number(prompt(`Ingrese del 1 al 3 en que ${mensaje} desea jugar`)) - 1
  } while (!validarNumero(jugada))
  return jugada;
}

/**
 * @function validarCampo
 * @description sirve para validar que la posicion ingresada por el jugador no este ocupada
 * @param {array} tablero es el tablero de juego
 * @param {number} fila es la fila donde el jugador quiere jugar
 * @param {number} columna es la columna donde el jugador quiere jugar
 * @returns true si la posicion esta ocupada y false si esta libre
 */
function validarCampo(tablero, fila, columna) {
  if (tablero[fila][columna] != " ") {
    alert("Ingresa nuevos valores, esa posicion ya esta ocupada")
    return true;
  }
  return false;
}

/**
 * @function revisarGanador
 * @description sirve para revisar si hay un ganador o si el juego culmino en empate
 * @param {array} tablero es el tablero de juego
 * @param {string} jugador es el jugador que acaba de jugar
 * @returns true si no hay ganador y false si hay un ganador o si el juego culmino en empate
 */
function revisarGanador(tablero, jugador) {
  let ganador = " "
  // Evaluar victorias en filas y columnas al mismo tiempo
  for (let i = 0; i < 3; i++) {

    // Victoria por FILA
    if (tablero[i][0] === tablero[i][1] && tablero[i][1] === tablero[i][2] && tablero[i][0] !== " ") {
      alert(`El jugador ${tablero[i][0]} ha ganado por fila`);
      return false;
    }

    // Victoria por COLUMNA
    if (tablero[0][i] === tablero[1][i] && tablero[1][i] === tablero[2][i] && tablero[0][i] !== " ") {
      alert(`El jugador ${tablero[0][i]} ha ganado por columna`);
      return false;
    }
  }

  // Evaluar victoria en diagonal (de izquierda a derecha)
  if (tablero[0][0] === tablero[1][1] && tablero[1][1] === tablero[2][2] && tablero[0][0] !== " ") {
    alert(`El jugador ${tablero[0][0]} ha ganado por diagonal`);
    return false;
  }

  // Evaluar victoria en diagonal (de derecha a izquierda)
  if (tablero[0][2] === tablero[1][1] && tablero[1][1] === tablero[2][0] && tablero[0][2] !== " ") {
    alert(`El jugador ${tablero[0][2]} ha ganado por diagonal`);
    return false;
  }

  // Evaluar empate
  if (!tablero[0].includes(" ") && !tablero[1].includes(" ") && !tablero[2].includes(" ")) {
    alert("El juego ha culminado en empate");
    return false;
  }

  return true;
}

/**
 * @function juego
 * @description sirve para ejecutar el juego de tictactoe
 */
function juego() {
  //tablero
  let tablero = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
  ];
  //turno del jugador, valor inicial X
  let turno = "X";
  //Repito hasta que haya un ganador o no haya lugar
  do {
    //Ejecuto hasta que el jugador ingrese posiciones validas donde no se ha jugado
    do {
      var fila = pedirJugada("fila");
      var columna = pedirJugada("columna");
    } while (validarCampo(tablero, fila, columna))
    //Coloco la jugada en el tablero
    tablero[fila][columna] = turno;
    //Cambio el turno
    if (turno == "X") {
      turno = "O"
    } else {
      turno = "X"
    }
    alert(`
      ${tablero[0][0]} | ${tablero[0][1]} | ${tablero[0][2]}\n
      ${tablero[1][0]} | ${tablero[1][1]} | ${tablero[1][2]}\n
      ${tablero[2][0]} | ${tablero[2][1]} | ${tablero[2][2]}\n
    `)
  } while (revisarGanador(tablero, turno))
}

//Ejecuto el juego
juego();