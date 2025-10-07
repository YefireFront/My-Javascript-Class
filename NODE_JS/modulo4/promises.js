const PC = true
const miPromesa = new Promise((resolve, reject)=>{

    setTimeout(()=>{

        if(PC){
            resolve({
                playerName: 'Lebron Jame',
                puntuacion: 9.8,
                valor : 5000

            })
        }else{
            reject('Fail this shit')
        }

    }, 3000)

})


miPromesa
.then(res=> res)
.then(data=>{
    console.log(data)
})
.catch(res=>{
    console.log(res)
})





// Ejemplo completo: encadenando Promesas y usando async/await
function obtenerContrato(nombre, liga) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				nombre,
				liga,
				salarioAnualUSD: 42000000
			})
		}, 800)
	})
}

// 1) Encadenamiento clásico con Promesas (.then / .catch)
obtenerJugadorFutbol('Kylian Mbappé')
.then((futbolista) => {
	console.log('Futbolista (chain):', futbolista)
	return obtenerJugadorNBA('Stephen Curry')
})
.then((basquetbolista) => {
	console.log('Jugador NBA (chain):', basquetbolista)
	return obtenerContrato(basquetbolista.nombre, 'NBA')
})
.then((contrato) => {
	console.log('Contrato (chain):', contrato)
})
.catch((error) => {
	console.error('Error en cadena de promesas:', error)
})

// 2) Versión equivalente usando async/await
async function flujoJugadores() {
	try {
		const futbolista = await obtenerJugadorFutbol('Erling Haaland')
		console.log('Futbolista (async):', futbolista)

		const basquetbolista = await obtenerJugadorNBA('Giannis Antetokounmpo')
		console.log('Jugador NBA (async):', basquetbolista)

		const contrato = await obtenerContrato(basquetbolista.nombre, 'NBA')
		console.log('Contrato (async):', contrato)
	} catch (error) {
		console.error('Error en async/await:', error)
	}
}

flujoJugadores()

// Ejemplo: Promesas con jugadores de fútbol y de la NBA
function obtenerJugadorFutbol(nombre) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				tipo: 'futbol',
				nombre,
				posicion: 'Delantero',
				goles: 25
			})
		}, 1000)
	})
}

function obtenerJugadorNBA(nombre) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				tipo: 'nba',
				nombre,
				posicion: 'Alero',
				promedioPuntos: 27.4
			})
		}, 1200)
	})
}

// Ejemplo básico con encadenamiento de Promesas (sin Promise.all)
obtenerJugadorFutbol('Lionel Messi')
.then((futbolista) => {
	console.log('Futbolista:', futbolista)
	return obtenerJugadorNBA('LeBron James')
})
.then((basquetbolista) => {
	console.log('Jugador NBA:', basquetbolista)
})
.catch((error) => {
	console.error('Error obteniendo jugadores:', error)
})



