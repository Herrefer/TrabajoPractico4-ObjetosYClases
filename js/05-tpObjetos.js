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
}