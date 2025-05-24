class Libro {
  constructor(titulo, autor, isbn) {
    this.titulo = titulo;
    this.autor = autor;
    this.isbn = isbn
  }

  mostrar(){
    
  }
}

class Usuario{
    constructor(nombre , idUsuario){
        this.nombre = nombre;
        this.idUsuario = idUsuario;
        this.librosPrestados=[];
    }

    prestar(){

    }

    devolver(){

    }

    listarLibros(){

    }
}

class Biblioteca{
    constructor(nombre){
        this.nombre = nombre;
        this.libros=[]
    }

    agregar(){

    }

    registarUsario(){

    }

    presentar(){

    }

    devolver(){

    }
}