

class Team {
    constructor(name) {
        this.name = name;
        this.points = 0;
    }

    addPoints(points) {
        this.points += points;
    }

    getPoints() {
        return this.points;
    }

    getName() {
        return this.name;
    }
}

class Tournament {
    constructor(teams) {
        this.teams = teams;
    }

    playMatch(team1, team2) {
        const outcome = Math.random();
        if (outcome < 0.33) {
            team1.addPoints(3);
            console.log(`${team1.getName()} wins against ${team2.getName()}`);
        } else if (outcome < 0.66) {
            team2.addPoints(3);
            console.log(`${team2.getName()} wins against ${team1.getName()}`);
        } else {
            team1.addPoints(1);
            team2.addPoints(1);
            console.log(`${team1.getName()} draws with ${team2.getName()}`);
        }
    }

    playTournament() {
        for (let i = 0; i < this.teams.length; i++) {
            for (let j = i + 1; j < this.teams.length; j++) {
                this.playMatch(this.teams[i], this.teams[j]);
            }
        }
    }

    getWinner() {
        let winner = this.teams[0];
        for (const team of this.teams) {
            if (team.getPoints() > winner.getPoints()) {
                winner = team;
            }
        }
        return winner;
    }

    displayStandings() {
        console.log("Tournament Standings:");
        this.teams.sort((a, b) => b.getPoints() - a.getPoints());
        for (const team of this.teams) {
            console.log(`${team.getName()}: ${team.getPoints()} points`);
        }
    }
}

// Example usage
const teams = [
    new Team("Team A"),
    new Team("Team B"),
    new Team("Team C"),
    new Team("Team D")
];

const tournament = new Tournament(teams);
tournament.playTournament();
tournament.displayStandings();
const winner = tournament.getWinner();
console.log(`The winner is ${winner.getName()} with ${winner.getPoints()} points!`);






