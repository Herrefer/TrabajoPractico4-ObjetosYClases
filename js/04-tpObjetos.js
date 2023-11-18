class Producto {
    constructor(nombreParam, codigoParam, precioParam){
        this.nombre = nombreParam;
        this.codigo = codigoParam;
        this.precio = precioParam;
    }
    get nombre_(){
        return this.nombre
    }
    get codigo_(){
        return this.codigo
    }
    get precio_(){
        return this.precio
    }
    set nombre_(parametro){
        this.nombre = parametro
    }
    set codigo_(parametro){
        this.codigo = parametro
    }
    set precio_(parametro){
        this.precio = parametro
    }
    imprimirDatos(){
        document.write(`<h1>Informacion del producto</h1>`)
        document.write(`<ul>`)
        document.write(`<li>Nombre: ${this.nombre}</li>`)
        document.write(`<li>Precio: $${this.precio}</li>`)
        document.write(`<li>Codigo: ${this.codigo} </li>`)
        document.write(`</ul>`)
    }
}

const bandejaHuevos = new Producto ("Bandeja de huevos", 17429, 50)
const lataAtun = new Producto ("Lata de atún", 9812, 1200)
const saracatunga = new Producto ("Bolsita con sorpresas Saracatunga", 94621, 500)

const listaProductos = [bandejaHuevos, lataAtun, saracatunga]