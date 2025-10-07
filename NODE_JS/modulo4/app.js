const EventEmitter = require('events');


// console.log(EventEmitter)


const emisorPlayer = new EventEmitter();

emisorPlayer.on('play', (message) => {
    console.log("Evento play: ", message);
});

emisorPlayer.emit('play', 'Shooting the ball');



emisorPlayer.on('Pass', (plpayerName) => {

    console.log(`El jugador ${plpayerName} a tirado`)

})


emisorPlayer.emit('Pass', 'Yeffer Brown')


emisorPlayer.on('Anotar', (namePlayer, pointsPlayer) => {
    if (pointsPlayer == 4) {
        console.log(`Amagzing Play by ${namePlayer} for ${pointsPlayer} points`)
    } else if (pointsPlayer == 3) {
        console.log(`Grate Play by ${namePlayer} for ${pointsPlayer} points`)

    } else if (pointsPlayer <= 2) {
        console.log(`Good Play by ${namePlayer} for ${pointsPlayer} points`)

    }

})





emisorPlayer.emit('Anotar', 'Yefire', 3)
emisorPlayer.emit('Anotar', 'Abdulja', 2)
emisorPlayer.emit('Anotar', 'KCO', 4)