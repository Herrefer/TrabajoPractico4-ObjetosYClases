class Aeropuerto{
    constructor(nombreParam, []){
        this.nombre = nombreParam;
        this.listaDeAviones = [];
    }
    get nombre_(){
        return this.nombre
    }
    get listaDeAviones_(){
        return this.listaDeAviones 
    }
    set nombre_(parametro){
        this.nombre = parametro
    }
    set listaDeAviones_([]){
        this.listaDeAviones = []
    }
    agregarAvion(avion){
        this.listaDeAviones.push(avion.nombre)
        console.log(`El avión ${avion.nombre} fué agregado al aeropuerto correctamente`)
    }
    buscarAvion(nombreDeAvion){
    const encontrarAvion = this.listaDeAviones.find(avion => avion === nombreDeAvion)
    if(encontrarAvion === nombreDeAvion){
        console.log(`El avion ${nombreDeAvion} ya se encuentra en el aeropuerto`)
    }
    else{
        console.log(`El avion ${nombreDeAvion} no está en el aeropuerto`)
    }
    }
}
class Avion{
    constructor(nombreParam, capacidadParam, destinoParam, []){
        this.nombre = nombreParam;
        this.capacidad = capacidadParam;
        this.destino = destinoParam;
        this.listaDePasajeros = [];
    }
    abordar(nombre){
        if(this.listaDePasajeros.length < this.capacidad){
            this.listaDePasajeros.push(nombre)
            console.log(`${nombre} ha subido al avión!`)
        }
        else{
            console.log(`Lo sentimos, no hay espacio para más pasajeros en el avión :(`)
        }
    }
}

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional", [])
const avionUno = new Avion ("AutumnAir", 50, "Ciudad Lavanda", [])
const avionDos = new Avion ("BossaFly", 20, "Brasil", [])
const avionTres = new Avion ("ChihiroTravel", 30, "Japón", [])
