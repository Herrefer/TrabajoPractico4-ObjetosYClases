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
    constructor(tamanioParam, []){
        this.listaDeContactos = []
        this.tamanioAgenda = limiteAgenda(this.listaDeContactos, tamanioParam) 
    }
    get contactos_(){
        return this.listaDeContactos
    }
    get tamanioAgenda_(){
        return this.tamanioAgenda
    }
    aniadirContacto(contacto){
        if(this.listaDeContactos.length <= this.tamanioAgenda){
            this.listaDeContactos.push(contacto.nombre)
            console.log(`${contacto.nombre} fué añadido correctamente a la lista`)
        }
        else{
            console.log (`No hay más espacio en la agenda para añadir a ${contacto.nombre}`)
        }
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


const agenda = new Agenda (10,[])
const contactoUno = new Contacto ("Sofia", 3816458294)
const contactoDos = new Contacto ("Paula", 3814578413)
const contactoTres = new Contacto ("Juan", 3818595497)