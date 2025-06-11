const persona = {
  nombre: "Laura",
  saludar: function () {
    console.log(this);
    function s2() {
        console.log(this)
    }
    s2()
  }
};
persona.saludar(); // "Hola, soy Laura"
