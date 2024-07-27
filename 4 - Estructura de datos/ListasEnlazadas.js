class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
    }
  }
  
  class ListaEnlazada {
    constructor() {
      this.cabeza = null;
      this.tamaño = 0;
    }
  
    // Añadir elemento al final de la lista
    append(valor) {
      const nuevoNodo = new Nodo(valor);
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
      } else {
        let actual = this.cabeza;
        while (actual.siguiente) {
          actual = actual.siguiente;
        }
        actual.siguiente = nuevoNodo;
      }
      this.tamaño++;
    }
  
    // Eliminar elemento por valor
    remove(valor) {
      if (!this.cabeza) return null;
      if (this.cabeza.valor === valor) {
        this.cabeza = this.cabeza.siguiente;
        this.tamaño--;
        return;
      }
      let actual = this.cabeza;
      while (actual.siguiente && actual.siguiente.valor !== valor) {
        actual = actual.siguiente;
      }
      if (actual.siguiente) {
        actual.siguiente = actual.siguiente.siguiente;
        this.tamaño--;
      }
    }
  
    // Ver el tamaño de la lista
    size() {
      return this.tamaño;
    }
  }
  
  let lista = new ListaEnlazada();
  lista.append(1);
  lista.append(2);
  console.log(lista.size()); // 2
  lista.remove(1);
  console.log(lista.size()); // 1
  