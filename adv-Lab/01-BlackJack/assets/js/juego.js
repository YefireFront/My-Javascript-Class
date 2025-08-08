

let deck         =[]
const tipos      = ['-Corazon','-Diamante','-Trebol','-Espada']
const especiales = ['A','J','Q','K']

const crearDeck = () =>{
    for (let i = 2; i <= 10 ; i++) {
        for (const tipo of  tipos) {
            deck.push(i + tipo)
        }
    }

    for(const esp of especiales ){
        for (const tipo of tipos) {
            deck.push(esp + tipo)
            
        }
    }

    deck = _.shuffle(deck)
    // console.log(deck)
    
}
crearDeck()



const perdirCartas = () => {
    if(deck.length === 0){
        throw 'no hay cartas en el deck'
    }
    let carta = deck.pop()

    console.log({deck})
    console.log({carta})
    return carta

}



const valorCarta = (carta) => {

    numeroCarta = carta[0];
    let valor = 0;
    
    if (isNaN(numeroCarta)){
        valor = numeroCarta === 'A' ? 11 : 10;
        
    }else{

        if(numeroCarta == 1){valor = (numeroCarta * 1) * 10};
        valor = numeroCarta * 1;
        
    }

    console.log({valor});
    return valor;
    
}


valorCarta(perdirCartas())


