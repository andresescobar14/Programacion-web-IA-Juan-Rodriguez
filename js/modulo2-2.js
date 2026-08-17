/*
  POO *PROGRAMACION ORIENTADA A OBJETOS*
*/
let usuario = {
  nombre: "Juan",
  edad: 30,
  usuario: "juan123",
  correo: "hola@hola.com"
}

//CLASES
class Usuario {
  constructor(nombre, edad, usuario, correo) {
    this.nombre = nombre;
    this.edad = edad;
    this.usuario = usuario;
    this.correo = correo;
  }

  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
}

let usuario2 = new Usuario("Pedro", 20, "pedro123", "pedro@gmail.com")
let usuario3 = new Usuario("Carla", 19, "carla123", "carla@gmail.com")

usuario2.saludar();
usuario3.saludar();

//ejemplo

class Personaje {
  constructor(nombre, vida, defensa, ataque) {
    this.nombre = nombre;
    this.vida = vida;
    this.defensa = defensa;
    this.ataque = ataque;
  }

  /**
   * @function atacar
   * @description Permite atacar a un objetivo, hacer calculo de daño y restar el daño a la vida del objetivo
   * @param {object} objetivo personaje el cual es atacado
   */
  atacar(objetivo) {
    /*
      Operador ternario
      Una forma de escribir condicionales
      condicion ? lo que pasa en caso de true : lo que pasa en caso de false
    */
    const opcionesDeAtaque = [
      // Físicos y absurdos
      `${this.nombre} saca la chancla voladora y apunta a ${objetivo.nombre}.`,
      `${this.nombre} se acerca a ${objetivo.nombre} con un pescado mojado en la mano.`,
      `${this.nombre} reta a ${objetivo.nombre} a un duelo a muerte con cuchillos de mantequilla.`,
      `${this.nombre} está midiendo la distancia para lanzarle un zapato a ${objetivo.nombre}.`,
      `${this.nombre} se abalanza sobre ${objetivo.nombre} como señora en oferta de viernes negro.`,
      `${this.nombre} corre hacia ${objetivo.nombre} con los brazos girando como aspas de helicóptero.`,
      `${this.nombre} intenta morderle el tobillo a ${objetivo.nombre}.`,
      `${this.nombre} le va a tirar un piano en la cabeza al estilo Looney Tunes a ${objetivo.nombre}.`,
      `${this.nombre} saca un fideo de piscina y jura venganza contra ${objetivo.nombre}.`,
      `${this.nombre} se pone un embudo en la cabeza y carga contra ${objetivo.nombre}.`,

      // Molestias cotidianas e informáticas
      `${this.nombre} planea desconectarle el router a ${objetivo.nombre}.`,
      `${this.nombre} va a esconderle el cargador del celular a ${objetivo.nombre}.`,
      `${this.nombre} amenaza con spoilearle el final de su serie favorita a ${objetivo.nombre}.`,
      `${this.nombre} se dispone a esparcir piezas de Lego en el camino de ${objetivo.nombre}.`,
      `${this.nombre} va a borrar la partida guardada de 100 horas de ${objetivo.nombre}.`,
      `${this.nombre} se prepara para desordenarle el escritorio a ${objetivo.nombre}.`,
      `${this.nombre} amenaza con suscribir el correo de ${objetivo.nombre} a catálogos de colchones.`,
      `${this.nombre} va a cambiarle el idioma de Netflix a chino mandarín a ${objetivo.nombre}.`,
      `${this.nombre} planea robarle la manta a ${objetivo.nombre} en plena madrugada.`,
      `${this.nombre} decide que hoy es el día para enredar los auriculares de ${objetivo.nombre}.`,

      // Anime, RPG y Gamer
      `${this.nombre} ajusta sus lentes, brillan de repente, y mira fijamente a ${objetivo.nombre}.`,
      `${this.nombre} empieza a cargar su ki durante 5 episodios para atacar a ${objetivo.nombre}.`,
      `${this.nombre} corre con los brazos hacia atrás a lo Naruto en dirección a ${objetivo.nombre}.`,
      `${this.nombre} activa su carta de trampa contra ${objetivo.nombre}.`,
      `${this.nombre} susurra "Nada personal, kid" y se teletransporta detrás de ${objetivo.nombre}.`,
      `${this.nombre} le grita el nombre de su ataque especial a ${objetivo.nombre}.`,
      `${this.nombre} canaliza el poder de la amistad para reventar a ${objetivo.nombre}.`,
      `${this.nombre} tira un d20 para intimidar a ${objetivo.nombre} pero saca un 1 pifiando miserablemente.`,
      `${this.nombre} gasta todos sus puntos de maná en un ataque desesperado contra ${objetivo.nombre}.`,
      `${this.nombre} entra en modo 'rage' y fija su aggro en ${objetivo.nombre}.`,
      `${this.nombre} intenta hacerle un 'parry' existencial a ${objetivo.nombre}.`,
      `${this.nombre} acusa de 'campero' a ${objetivo.nombre} y procede a atacarlo.`,
      `${this.nombre} le lanza un despiadado caparazón azul a ${objetivo.nombre}.`,
      `${this.nombre} intenta atrapar a ${objetivo.nombre} en una Pokeball.`,
      `${this.nombre} usa 'Salpicadura' contra ${objetivo.nombre}. ¡Pero no pasa nada!`,
      `${this.nombre} va a rushear B sin avisar y la culpa será de ${objetivo.nombre}.`,
      `${this.nombre} jura que va a banear a ${objetivo.nombre} del servidor de la vida.`,
      `${this.nombre} le va a meter un 360 no-scope a ${objetivo.nombre}.`,
      `${this.nombre} se prepara para hacerle un 'fatality' a ${objetivo.nombre}.`,
      `${this.nombre} le va a soltar un 'hadouken' en toda la cara a ${objetivo.nombre}.`,

      // Psicológico y pasivo-agresivo
      `${this.nombre} le va a dejar en 'Visto' a ${objetivo.nombre} de forma muy agresiva.`,
      `${this.nombre} empieza a darle like a fotos de hace 4 años de ${objetivo.nombre} para intimidarlo.`,
      `${this.nombre} juzga silenciosamente las decisiones vitales de ${objetivo.nombre}.`,
      `${this.nombre} amenaza con enviarle un audio de 10 minutos a ${objetivo.nombre}.`,
      `${this.nombre} le dice a ${objetivo.nombre} "tenemos que hablar" causando daño crítico.`,
      `${this.nombre} va a meter a ${objetivo.nombre} en un grupo de WhatsApp familiar sin previo aviso.`,
      `${this.nombre} le responde a ${objetivo.nombre} con un simple "Ok." (con punto final).`,
      `${this.nombre} le hace gaslighting de manual a ${objetivo.nombre}.`,
      `${this.nombre} procede a ignorar activamente todas las bromas de ${objetivo.nombre}.`,
      `${this.nombre} amenaza con "dooxear" la colección secreta de tazos de ${objetivo.nombre}.`,

      // Comida y cocina
      `${this.nombre} le lanza una tortilla de patatas a la cara a ${objetivo.nombre} (con cebolla, obvio).`,
      `${this.nombre} saca una baguette rancia de hace 3 días para apalear a ${objetivo.nombre}.`,
      `${this.nombre} amenaza con echarle trozos de piña a la pizza de ${objetivo.nombre}.`,
      `${this.nombre} intercambia el azúcar por la sal en el café de ${objetivo.nombre}.`,
      `${this.nombre} va a exprimir un limón directamente en el ojo de ${objetivo.nombre}.`,
      `${this.nombre} le roba una patata frita a ${objetivo.nombre}, desatando la tercera guerra mundial.`,
      `${this.nombre} se arma con un cucharón de sopa de metal y persigue a ${objetivo.nombre}.`,
      `${this.nombre} le echa kétchup al filete Kobe de ${objetivo.nombre}.`,
      `${this.nombre} amenaza con comerse el último trozo de tarta que ${objetivo.nombre} guardaba.`,
      `${this.nombre} se bebe el último café y no hace más, mirando fijamente a ${objetivo.nombre}.`,

      // Metáforas raras y magia negra
      `${this.nombre} reta a ${objetivo.nombre} a un duelo de miradas excesivamente incómodas.`,
      `${this.nombre} le lanza una mirada que podría marchitar plantas a ${objetivo.nombre}.`,
      `${this.nombre} invoca un ejército de palomas enfurecidas contra ${objetivo.nombre}.`,
      `${this.nombre} le lanza un "ok, boomer" súper destructivo a ${objetivo.nombre}.`,
      `${this.nombre} desafía a ${objetivo.nombre} a una batalla de rimas sin tener flow.`,
      `${this.nombre} le va a arrojar una maldición ancestral a ${objetivo.nombre}.`,
      `${this.nombre} ataca a ${objetivo.nombre} usando la legendaria técnica de la mantis borracha.`,
      `${this.nombre} se disfraza de maceta para emboscar traicioneramente a ${objetivo.nombre}.`,
      `${this.nombre} dibuja un túnel falso en la pared esperando que ${objetivo.nombre} se estrelle.`,
      `${this.nombre} le echa mal de ojo a ${objetivo.nombre} usando una berenjena.`,

      // Profesionales / Oficina
      `${this.nombre} envía un correo a ${objetivo.nombre} empezando con "Según mi último email...".`,
      `${this.nombre} agenda una reunión de 2 horas el viernes a las 17:00 para ${objetivo.nombre}.`,
      `${this.nombre} pone a ${objetivo.nombre} en copia oculta para que Recursos Humanos se entere.`,
      `${this.nombre} se roba el tupper de carne en salsa de ${objetivo.nombre} de la nevera.`,
      `${this.nombre} deja un post-it amarillo increíblemente pasivo-agresivo en el monitor de ${objetivo.nombre}.`,
      `${this.nombre} se niega a darle permisos de edición en el Google Doc a ${objetivo.nombre}.`,
      `${this.nombre} interrumpe a ${objetivo.nombre} diciendo "Solo para hacer de abogado del diablo...".`,
      `${this.nombre} le desconecta el cable HDMI a ${objetivo.nombre} justo antes de guardar.`,
      `${this.nombre} no le avisa a ${objetivo.nombre} que trajeron donas a la oficina.`,
      `${this.nombre} le desordena los clips del escritorio a ${objetivo.nombre}.`,

      // Violencia caricaturesca extra
      `${this.nombre} le ofrece un chicle de fresa explosivo a ${objetivo.nombre}.`,
      `${this.nombre} infla un globo gigante para reventarlo justo detrás de ${objetivo.nombre}.`,
      `${this.nombre} amenaza con convertir la casa de ${objetivo.nombre} en un NFT.`,
      `${this.nombre} desafía a ${objetivo.nombre} a un duelo de piedra, papel o tijeras a muerte.`,
      `${this.nombre} se acerca a ${objetivo.nombre} haciendo el moonwalk de forma amenazante.`,
      `${this.nombre} agarra una silla plegable de lucha libre y salta desde la tercera cuerda hacia ${objetivo.nombre}.`,
      `${this.nombre} le va a hacer un suplex a ${objetivo.nombre} contra una mesa de cristal.`,
      `${this.nombre} lanza un enjambre de abejas furiosas dentro del coche de ${objetivo.nombre}.`,
      `${this.nombre} rocía a ${objetivo.nombre} con una manguera de agua helada.`,
      `${this.nombre} le hace calzón chino a ${objetivo.nombre} hasta colgarlo de la puerta.`,

      // Miscelánea aleatoria
      `${this.nombre} se prepara para darle un sape monumental a ${objetivo.nombre}.`,
      `${this.nombre} levanta el puño y le grita '¡Me las pagarás!' a ${objetivo.nombre} como villano de los 80.`,
      `${this.nombre} decide que la existencia de ${objetivo.nombre} es un bug visual y va a borrarlo.`,
      `${this.nombre} se pone las gafas de sol pixeladas y empieza a disparar Doritos a ${objetivo.nombre}.`,
      `${this.nombre} amenaza a ${objetivo.nombre} con hacerle un bizum cobrándole los 3 céntimos que le debe.`,
      `${this.nombre} presiona todos los botones del teclado a la vez para hackear a ${objetivo.nombre}.`,
      `${this.nombre} se quita la camisa para mostrar superioridad física ante ${objetivo.nombre}.`,
      `${this.nombre} le hace un amague de choque de manos a ${objetivo.nombre} y luego se peina.`,
      `${this.nombre} grita '¡LEROOOY JENKINS!' y carga sin pensar hacia ${objetivo.nombre}.`,
      `${this.nombre} conjura un ataque de ansiedad espontáneo en la mente de ${objetivo.nombre}.`
    ];
    console.log(opcionesDeAtaque[Math.floor(Math.random() * opcionesDeAtaque.length)])
    let danio = this.ataque - objetivo.defensa > 1 ? this.ataque - objetivo.defensa : 1;
    objetivo.vida = objetivo.vida - danio < 0 ? 0 : objetivo.vida - danio;
    console.log(`${this.nombre} le hace ${danio} puntos de daño a ${objetivo.nombre}, le quedan ${objetivo.vida} puntos de vida`)
    if (objetivo.vida <= 0) {
      console.log(`el personaje ${objetivo.nombre} ha muerto a manos de ${this.nombre}`)
      return true;
    }
    return false;
  }
}

class Juego {
  constructor(personajes) {
    this.personajes = personajes;
  }

  iniciar() {
    do {
      //Selecciono quien ataca
      let numeroAleatorioAtacante = Math.floor(Math.random() * this.personajes.length);
      //Selecciono a quien atacara
      let numeroAleatorioObjetivo = Math.floor(Math.random() * this.personajes.length);
      //Si el atacante y objetivo son la misma persona, genero nuevo numero para el objetivo
      while (numeroAleatorioAtacante === numeroAleatorioObjetivo) {
        numeroAleatorioObjetivo = Math.floor(Math.random() * this.personajes.length);
      }
      if (this.personajes[numeroAleatorioAtacante].atacar(this.personajes[numeroAleatorioObjetivo])) {
        this.personajes.splice(numeroAleatorioObjetivo, 1);
      }
    } while (this.personajes.length > 1)
    console.log(`${this.personajes[0].nombre} ha ganado`);
  }
}

let batman = new Personaje("batman", 100, 5, 10);
let goku = new Personaje("goku", 100, 5, 10);
let darth = new Personaje("dath vader", 100, 5, 10);
let kratos = new Personaje("kratos", 100, 5, 10);
let wolverine = new Personaje("wolverine", 100, 5, 10);
let john = new Personaje("john wick", 100, 5, 10);
let terminator = new Personaje("terminator", 100, 5, 10);
let lara = new Personaje("lara croft", 100, 5, 10);

let juego = new Juego([batman, goku, darth, kratos, wolverine, john, terminator, lara])
juego.iniciar()

class Mago extends Personaje {
  constructor(nombre, vida, defensa, ataque, mana, hechizos) {
    super(nombre, vida, defensa, ataque);
    this.mana = mana;
    this.hechizos = hechizos;
  }

  lanzarHechizo() {
    //Logica para lanzar hechizos
  }
}