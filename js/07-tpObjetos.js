class Agenda {
  constructor(tamanioParam = 10, []) {
    this.listaDeContactos = [];
    this.tamanioAgenda = tamanioParam - 1;
  }
  get contactos_() {
    return this.listaDeContactos;
  }
  get tamanioAgenda_() {
    return this.tamanioAgenda;
  }
  aniadirContacto(contacto) {
    if (this.listaDeContactos.length <= this.tamanioAgenda) {
      this.listaDeContactos.push(contacto);
      console.log(`${contacto.nombre} fué añadido correctamente a la agenda`);
    } else {
      console.log(
        `${contacto.nombre} no pudo ser añadido, la agenda está llena`
      );
    }
  }
  existeContacto(nombreDeContacto) {
    const encontrarContacto = this.listaDeContactos.find(
      (contacto) => contacto.nombre === nombreDeContacto
    );
    if (encontrarContacto) {
      console.log(`El contacto ya se encuentra agendado`);
    } else {
      console.log(`El contacto no está en la agenda`);
    }
  }
  listarContactos() {
    console.log(`Los contactos en la agenda son:`);
    this.listaDeContactos.forEach((contacto) => console.log(contacto));
  }
  buscarContacto(nombreDeContacto) {
    const encontrarContacto = this.listaDeContactos.find(
      (contacto) => contacto.nombre === nombreDeContacto
    );
    if (encontrarContacto) {
      console.log(
        `Teléfono de ${nombreDeContacto}: ${encontrarContacto.telefono}`
      );
    } else {
      console.log(
        `No se encontró ningún contacto con el nombre ${nombre}. Asegúrese de agendarlo`
      );
    }
  }
  eliminarContacto(nombreDeContacto) {
    const indiceSplice = this.listaDeContactos.findIndex(
      (contacto) => contacto.nombre === nombreDeContacto
    );
    if (indiceSplice != -1) {
      this.listaDeContactos.splice(indiceSplice, 1);
      console.log(`${nombreDeContacto} fué eliminado de la agenda`);
    } else {
      console.log(`${nombreDeContacto} no se encuentra en la agenda`);
    }
  }
  agendaLlena() {
    if (this.listaDeContactos.length === this.tamanioAgenda + 1) {
      console.log(`La agenda está llena`);
    } else {
      console.log(`La agenda aún tiene espacio para agregar más contactos`);
      console.log(
        `Tiene ${
          this.listaDeContactos.length
        } espacios ocupados de un total de ${
          this.tamanioAgenda + 1
        } espacios disponibles`
      );
    }
  }
  huecosLibres() {
    console.log(
      `A la agenda le quedan ${
        this.tamanioAgenda + 1 - this.listaDeContactos.length
      } espacio/s disponible/s`
    );
  }
}

class Contacto {
  constructor(nombreParam, telefonoParam) {
    this.nombre = nombreParam;
    this.telefono = telefonoParam;
  }
  get nombre_() {
    return this.nombre;
  }
  get telefono_() {
    return this.telefono;
  }
  set nombre_(parametro) {
    this.nombre = parametro;
  }
  set telefono_(parametro) {
    this.telefono = parametro;
  }
}

const agenda = new Agenda(2, []);
const contactoUno = new Contacto("Sofia", 3816458294);
const contactoDos = new Contacto("Paula", 3814578413);
const contactoTres = new Contacto("Juan", 3818595497);
const contactoCuatro = new Contacto("Pedro", 381857873);
const contactoCinco = new Contacto("Fabian", 38187852);
const contactoSeis = new Contacto("Mentuhotep", 381234537);
const contactoSiete = new Contacto("Salmanasar", 381335112);
const contactoOcho = new Contacto("Tutankathon", 381888745);
const contactoNueve = new Contacto("Hammurabi", 38111123);
const contactoDiez = new Contacto("Saracatunga", 381979795);
const contactoOnce = new Contacto("Bonaparte", 38166352);

const contactosListados = [
  contactoUno,
  contactoDos,
  contactoTres,
  contactoCuatro,
  contactoCinco,
  contactoSeis,
  contactoSiete,
  contactoOcho,
  contactoNueve,
  contactoDiez,
  contactoOnce,
];
let opcion = parseInt(
  prompt(`Elija una opción para interactuar con la agenda
1- Añadir contacto
2- Verificar si un contacto existe en la agenda
3- Mostrar lista de contactos
4- Mostrar el número de telefono de un contacto
5- Eliminar un contacto
6- Verificar si la agenda estállena
7- Espacio disponible en la agenda`)
);
if (opcion > 7) {
  prompt(`Solo puede elegir las opciones que aparecen en pantalla`);
} else {
  switch (opcion) {
    case 1:
      const aniadirContacto_ = prompt(`Ingrese el contacto que desea añadir`);
      const contactoAniadir = contactosListados.find(
        (contacto) => contacto.nombre === aniadirContacto_
      );
      console.log(contactoAniadir);
      if (agenda.listaDeContactos.length <= agenda.tamanioAgenda) {
        agenda.listaDeContactos.push(contactoAniadir);
        console.log(
          `${contactoAniadir.nombre} fué añadido correctamente a la agenda`
        );
      } else {
        console.log(
          `${contacto.nombre} no pudo ser añadido, la agenda está llena`
        );
      }
      break;
      case 2: 
        const existeContacto_ = prompt(`Introduzca el nombre del contacto`)
        const encontrarContacto = agenda.listaDeContactos.find(
          (contacto) => contacto.nombre === existeContacto_
        );
        if (encontrarContacto) {
          console.log(`El contacto ya se encuentra agendado`);
        } else {
          console.log(`El contacto no está en la agenda`);
        }
        break;
  }
    
}
