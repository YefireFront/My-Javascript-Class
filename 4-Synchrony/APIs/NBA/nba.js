const apiUrl = 'https://www.openligadb.de/api/getTeamsByLeagueName/bl1/2022';

// Realiza una solicitud para obtener datos de equipos de la Premier League
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const teams = data;
    teams.forEach(team => {
      console.log('Nombre del equipo:', team.TeamName);
      console.log('País:', team.ShortName);
      console.log('Estadio:', team.StadiumName);
      console.log('----------------------------------------');
    });
  })
  .catch(error => {
    console.error('Hubo un error al obtener los datos de los equipos de la Premier League:', error);
  });
