function limiteAgenda(array, limite){
    if(limite == undefined){
        array.length = 10
    }
    else{
        array.length = limite
    }
}
// const prueba = [1,2,3,4,5,6,7,8,9,10,11,12,13,14] array para probar la funcion
class Agenda{
    constructor(tamanioParam = 10, []){
        this.listaDeContactos = []
        this.tamanioAgenda = (tamanioParam - 1)
    }
    get contactos_(){
        return this.listaDeContactos
    }
    get tamanioAgenda_(){
        return this.tamanioAgenda
    }
    aniadirContacto(contacto){
        if(this.listaDeContactos.length <= this.tamanioAgenda){
            this.listaDeContactos.push(contacto)
            console.log(`${contacto.nombre} fué añadido correctamente a la agenda`)
        }
        else{
            console.log(`${contacto.nombre} no pudo ser añadido, la agenda está llena`)
        }
    }
    existeContacto(nombreDeContacto){
        const encontrarContacto = this.listaDeContactos.find(contacto => contacto.nombre === nombreDeContacto)
        if(encontrarContacto){
            console.log(`El contacto ya se encuentra agendado`)
        }
        else{
            console.log(`El contacto no está en la agenda`)
        }
    }
    listarContactos(){ 
        console.log(`Los contactos en la agenda son:`)
        this.listaDeContactos.forEach((contacto) => console.log(contacto))
    }
    buscarContacto(nombreDeContacto) {
        const encontrarContacto = this.listaDeContactos.find(contacto => contacto.nombre === nombreDeContacto)
        if (encontrarContacto) {
            console.log(`Teléfono de ${nombreDeContacto}: ${encontrarContacto.telefono}`);
        } else {
            console.log(`No se encontró ningún contacto con el nombre ${nombre}. Asegúrese de agendarlo`);
        }
    }
    eliminarContacto(nombreDeContacto){
        const indiceSplice = this.listaDeContactos.findIndex((contacto) => contacto.nombre === nombreDeContacto)
        if(indiceSplice != -1){
            this.listaDeContactos.splice(indiceSplice, 1)
            console.log(`${nombreDeContacto} fué eliminado de la agenda`)
        }
        else{
            console.log(`${nombreDeContacto} no se encuentra en la agenda`)
        }
    }
    agendaLlena(){
        if(this.listaDeContactos.length === (this.tamanioAgenda + 1)){
            console.log(`La agenda está llena`)
        }
        else{
            console.log(`La agenda aún tiene espacio para agregar más contactos`)
            console.log(`Tiene ${this.listaDeContactos.length} espacios ocupados de un total de ${(this.tamanioAgenda + 1)} espacios disponibles`)
        }
    }
    huecosLibres(){
        console.log(`A la agenda le quedan ${(this.tamanioAgenda + 1)-(this.listaDeContactos.length)} espacio/s disponible/s`)
    }
}

class Contacto{
    constructor(nombreParam, telefonoParam){
        this.nombre = nombreParam
        this.telefono = telefonoParam
    }
    get nombre_(){
        return this.nombre
    }
    get telefono_(){
        return this.telefono
    }
    set nombre_(parametro){
        this.nombre = parametro
    }
    set telefono_(parametro){
        this.telefono = parametro
    }
}


const agenda = new Agenda (2,[])
const contactoUno = new Contacto ("Sofia", 3816458294)
const contactoDos = new Contacto ("Paula", 3814578413)
const contactoTres = new Contacto ("Juan", 3818595497)
const contactoCuatro = new Contacto ("Pedro", 3818595497)
const contactoCinco = new Contacto ("Fabian", 3818595497)
const contactoSeis = new Contacto ("Mentuhotep", 3818595497)
const contactoSiete = new Contacto ("Salmanasar", 3818595497)
const contactoOcho = new Contacto ("Tutankathon", 3818595497)
const contactoNueve = new Contacto ("Hammurabi", 3818595497)
const contactoDiez = new Contacto ("Saracatunga", 3818595497)
const contactoOnce = new Contacto ("Bonaparte", 3818595497)