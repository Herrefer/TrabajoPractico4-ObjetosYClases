class Libro{
    constructor(isbnParam, tituloParam, autorParam, numeroDePaginasParam){
        this.isbn = isbnParam;
        this.titulo = tituloParam;
        this.autor = autorParam;
        this.numeroDePaginas = numeroDePaginasParam;
    }
    get isbn_(){
        return this.isbn
    }
    get titulo_(){
        return this.titulo
    }
    get autor_(){
        return this.autor
    }
    get numeroDePaginas_(){
        return this.numeroDePaginas
    }
    set isbn_(parametro){
        this.isbn = parametro
    }
    set titulo_(parametro){
        this.titulo = parametro
    }
    set autor_(parametro){
        this.autor = parametro
    }
    set numeroDePaginas_(parametro){
        this.numeroDePaginas = parametro
    }
    mostrarLibro(){
        console.log(`El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroDePaginas} páginas`)
    }
}
const libroUno = new Libro (21574, "Para volerse loco, una historia sobre los límites de la mente", "A.K Benjamin", 231)
const libroDos = new Libro (8522, "La historia del loco", "John Katzenbach", 591)