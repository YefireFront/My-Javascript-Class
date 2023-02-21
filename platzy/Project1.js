const Papeto = 48
console.log(`${Papeto} y`)

function Hijo (){
    const yeffer = 30
    console.log(`${Papeto} y ${yeffer} `)
    
    
    function nieto(){
        const Christopher = 9
        console.log(`${Papeto} y ${yeffer} y ${Christopher}`)
        
        function bisnieto(){
            const Damianl = 1
            console.log(`${Papeto} y ${yeffer} y ${Christopher} y ${Damianl}`)
        }
        return bisnieto()
    }

    return nieto()
}

Hijo() 