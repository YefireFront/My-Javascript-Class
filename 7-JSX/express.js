
function contenedor({texto}) {
    return(
        <div className='contador'>
        {texto}
        </div>
    );
}


export default contenedor



function boton({texto ,tipo, evento}) {

    return(
        <button
        className = {tipo ? 'btnclicl' : 'btnRest'}
        onClic = {evento}
        > 
        {texto}
        </button>
    )
    
}


function megabutton(tipo) {

    return(
        <button
        className = {(tipo) ? 'azul yeffer canev' : 'rojo'}
        >

        </button>
    )
    
}