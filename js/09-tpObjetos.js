class Animal{
    constructor(nombreParam, edadParam){
        this.nombre = nombreParam;
        this.edad = edadParam;
    }
    get nombre_(){
        return this.nombre
    }
    get edad_(){
        return this.edad
    }
    set nombre_(parametro){
        this.nombre = parametro
    }
    set edad_(parametro){
        this.edad = parametro
    }
    emitirSonido(sonido){
        console.log(sonido)
    }
}

class Perro extends Animal{
    constructor (nombreParam, edadParam){
        super(nombreParam, edadParam)
    }
    emitirSonido(){
        console.log("Grrrr guau guau!!")
    }
}
class Gato extends Animal{
    constructor (nombreParam, edadParam){
        super(nombreParam, edadParam)
    }
    emitirSonido(){
        console.log("Prrrrrbbbb")
    }
}
const gato = new Gato ("Paco", 3)
const perro = new Perro ("Oliver", 12)