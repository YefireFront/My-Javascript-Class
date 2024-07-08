class Team {
    constructor(name) {
        this.name = name;
        this.points = 0;
        this.goalsFor = 0;
        this.goalsAgainst = 0;
    }

    updateStats(goalsFor, goalsAgainst) {
        this.goalsFor += goalsFor;
        this.goalsAgainst += goalsAgainst;

        if (goalsFor > goalsAgainst) {
            this.points += 3; // Win
        } else if (goalsFor === goalsAgainst) {
            this.points += 1; // Draw
        }
        // No points for a loss
    }
}

class Tournament {
    constructor(teams) {
        this.teams = teams;
        this.schedule = this.generateSchedule();
    }

    generateSchedule() {
        let schedule = [];
        for (let i = 0; i < this.teams.length; i++) {
            for (let j = i + 1; j < this.teams.length; j++) {
                schedule.push([this.teams[i], this.teams[j]]);
            }
        }
        return schedule;
    }

    playMatch(team1, team2, goals1, goals2) {
        team1.updateStats(goals1, goals2);
        team2.updateStats(goals2, goals1);
    }

    displayStandings() {
        this.teams.sort((a, b) => b.points - a.points || b.goalsFor - b.goalsAgainst - (a.goalsFor - a.goalsAgainst));
        console.log('Team\tPoints\tGF\tGA');
        for (let team of this.teams) {
            console.log(`${team.name}\t${team.points}\t${team.goalsFor}\t${team.goalsAgainst}`);
        }
    }
}

let teamNames = ["Team A", "Team B", "Team C", "Team D", "Team E", "Team F", "Team G", "Team H"];
let teams = teamNames.map(name => new Team(name));

let tournament = new Tournament(teams);


