class Persona {
    constructor (nombreParam, edadParam, dniParam, sexoParam, pesoParam, alturaParam, anioDeNacimientoParam){
        this.nombre_ = nombreParam;
        this.edad_ = edadParam;
        this.dni_ = dniParam;
        this.sexo_ = sexoParam;
        this.peso_ = pesoParam;
        this.altura_ = alturaParam;
        this.anioNacimiento_ = anioDeNacimientoParam;
    }
    get nombre(){
        return this.nombre_
    }
    get edad(){
        return this.edad_
    }
    get dni(){
        return this.dni_
    }
    get sexo(){
        return this.sexo_
    }
    get peso(){
        return this.peso_
    }
    get altura(){
        return this.altura_
    }
    get nacimiento(){
        return this.anioNacimiento_
    }
    set nombre (parametro){
        this.nombre_ = parametro
    }
    set edad (parametro){
        this.edad_ = parametro
    }
    set dni (parametro){
        this.dni_ = parametro
    }
    set sexo (parametro){
        this.sexo_ = parametro
    }
    set peso (parametro){
        this.peso = parametro
    }
    set altura (parametro){
        this.altura = parametro
    }
    set nacimiento (parametro){
        this.anioNacimiento = parametro
    }
    mostrarGeneracion(){
        if(this.anioNacimiento_ >= 1994 && this.anioNacimiento_ <= 2010){
            console.log(`${this.nombre_} pertenece a la Generación Z`)
            console.log(`Su rasgo característico es la irreverencia`)
        }
        else if (this.anioNacimiento_ >= 1981 && this.anioNacimiento_ <= 1993){
            console.log(`${this.nombre_} pertenece a la Generación Y`)
            console.log(`Su rasgo característico es la frustración`)
        }
        else if (this.anioNacimiento_ >= 1969 && this.anioNacimiento_ <= 1980){
            console.log(`${this.nombre_} pertenece a la Generación X`)
            console.log(`Su rasgo característico es la obsesión por el éxito`)
        }
        else if (this.anioNacimiento_ >= 1949 && this.anioNacimiento_ <= 1968){
            console.log(`${this.nombre_} pertenece a la Generación Baby Boom`)
            console.log(`Su rasgo característico es la ambición`)
        }
        else if (this.anioNacimiento_ >= 1930 && this.anioNacimiento_ <= 1948){
            console.log(`${this.nombre_} pertenece a la Generación Silenciosa`)
            console.log(`Su rasgo característico es la austeridad`)
        }
        else{
            console.log(`Generación no asignada`)
        }
    }
    esMayorDeEdad(){
        if(this.edad_ >= 18){
            console.log(`${this.nombre_} es mayor de edad`)
        }else{
            console.log(`${this.nombre_} es menor de edad`)
        }
    }
    mostrarDatos(){
        console.log(`Nombre: ${this.nombre_}`)
        console.log(`Edad: ${this.edad_}`)
        console.log(`DNI: ${this.dni_}`)
        console.log(`Sexo: ${this.sexo_}`)
        console.log(`Peso: ${this.peso_}`)
        console.log(`Altura: ${this.altura_}`)
        console.log(`Año de nacimiento: ${this.anioNacimiento_}`)
    }
    generarDNI(){
        let dniAleatorio = Math.floor(Math.random() * 100100100)
        console.log(`Su DNI es: ${dniAleatorio}`)
    }
}
const sujetoUno = new Persona ("Fernando", 22, 43225728, "M", 70, "180 cm", 2001)
const sujetoDos = new Persona ("Carlos Adrian", 58, 17240824, "M", 87, "168 cm", 1965)