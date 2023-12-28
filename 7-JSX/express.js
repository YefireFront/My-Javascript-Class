function contenedor({ texto }) {
  return <div className="contador">{texto}</div>;
}

export default contenedor;

function boton({ texto, tipo, evento }) {
  return (
    <button className={tipo ? "btnclicl" : "btnRest"} onClic={evento}>
      {texto}
    </button>
  );
}




secunclass = (c) => {
  if (c == "Broly") {
    return "Broly";
  }
  if (c == "Clark") {
    return "Clark";
  }

};

function megabutton(tipo) {
  return (
  <button className={`Anilio ${secunclass(param)}`}></button>
  );
}
function megabuttonII(tipo) {
  return (
  <button className={`Anilio ${secunclass(param)}`}></button>
  );
}
