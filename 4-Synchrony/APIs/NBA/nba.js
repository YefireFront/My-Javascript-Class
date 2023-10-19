const apiUrl = 'https://www.balldontlie.io/api/v1/players';

// Realiza una solicitud para obtener datos de jugadores
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const players = data.data;
    players.forEach(player => {
      console.log('Nombre del jugador:', player.first_name, player.last_name);
      console.log('Imagen del jugador:', player.team.full_name, player.position);
    });
  })
  .catch(error => {
    console.error('Hubo un error al obtener los datos de los jugadores:', error);
  });
