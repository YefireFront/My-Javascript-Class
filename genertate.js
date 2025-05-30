function calAge(burthyear) {
    const age = 2037 - burthyear
    function printAge() {
        const output = `You'r ${age}, born in ${burthyear}`
    }

    printAge()
    
    return age
}


const firtsName = 'Jonas'

calAge(1992)