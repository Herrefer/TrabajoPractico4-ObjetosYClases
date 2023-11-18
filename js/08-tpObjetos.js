class Persona{
    constructor(nombreParam, edadParam, profesionParam){
        this.nombre = nombreParam;
        this.edad = edadParam;
        this.profesion = profesionParam;
    }
    get nombre_(){
        return this.nombre
    }
    get edad_(){
        return this.edad
    }
    get profesion_(){
        return this.profesion
    }
    set nombre_(parametro){
        this.profesion = parametro
    }
    set edad_(parametro){
        this.edad = parametro
    }
    set profesion_(parametro){
        this.profesion = parametro
    }
    saludar(){
        console.log(`Hola ¿cómo estas? Me presento, soy ${this.nombre}, tengo ${this.edad} años de edad y mi profesion es ${this.profesion}`)
    }
    despedirse(){
        console.log(`Adios, espero que tengas buen día!`)
    }
}
const personaUno = new Persona ("Sofia", 19, "estudiante de licenciatura en historia")
const personaDos = new Persona ("Tomas", 22, "jugador profesional de lol")