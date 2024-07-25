class Libro {
  constructor(titulo, autor, fecha, ){
    this.titulo = titulo;
    this.autor = autor;
    this.fecha = fecha;
    this.prestado = false
  }

}

const libro1 = new Libro("Harry Potter", "J.K. Rowling", "2001");
const libro2 = new Libro("To Kill a Mockingbird", "Harper Lee", "1960");
const libro3 = new Libro("The Great Gatsby", "F. Scott Fitzgerald", "1925");
const libro4 = new Libro("1984", "George Orwell", "1949");
const libro5 = new Libro("The Catcher in the Rye", "J.D. Salinger", "1951");



class Biblioteca{
  constructor(nombre, direccion){
    this.nombre = nombre;
    this.direccion = direccion;
  }

  prestarLibro(libro){
      if (libro.prestado === true) {
        console.log(`El libro ${libro.titulo} no esta diusponible `)
      }else{
        libro.prestado = true
        console.log(`has prestado el libro ${libro.titulo}`)
      }
  }

  
}

