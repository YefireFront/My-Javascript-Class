const NBAplayerarray = [
    "LeBron James",
    "Kevin Durant",
    "Stephen Curry",
    "Giannis Antetokounmpo",
    "Luka Dončić",
    "Nikola Jokić",
    "Joel Embiid",]

const NBA_player_OBJ= {
    "LeBron James": {
        team: "Los Angeles Lakers", 
        position: "Small Forward",
        height: "6 ft 9 in",
        weight: "250 lb",
        college: "None",
        birthdate: "December 30, 1984", 
    },
    "Kevin Durant": {   
        team: "Brooklyn Nets", 
        position: "Small Forward",
        height: "6 ft 10 in",
        weight: "240 lb",
        college: "Texas",
        birthdate: "September 29, 1988", 
    }}



const {team : equipo = 'Eats' , position: lugar, ring : anillos = 0 } = NBA_player_OBJ["LeBron James"]

equipo
lugar
anillos
// team
// position



const [player1 , player2, ...RestyPlayers] = NBAplayerarray

player1
player2
RestyPlayers


const {team , position, ...data} =  NBA_player_OBJ["LeBron James"];
data

