class Rectangulo{
    constructor(altoParam, anchoParam){
        this.alto_=altoParam;
        this.ancho_=anchoParam;
    }
    get alto(){
        return this.alto_
    }
    get ancho(){
        return this.ancho_
    }
    set alto(parametro){
        this.alto_ = parametro;
    }
    set ancho(parametro){
        this.ancho_ = parametro;
    }
    mostrarAlto(){
        console.log(this.alto_)
    }
    mostrarAncho(){
        console.log(this.ancho_)
    }
    modificarAlto(parametro){
        this.alto_ = parametro
    }
    modificarAncho(parametro){
        this.ancho_ = parametro
    }
    calcularPerimetro(){
        console.log((this.alto_ * 2) + (this.ancho_ *2))
    }
    calcularArea(){
        console.log(this.alto_ * this.ancho_)
    }
}



const rectanguloUno = new Rectangulo (10, 20)