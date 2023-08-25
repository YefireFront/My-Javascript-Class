class BankAccount {
    constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} units. TOTAL ${this.balance}`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount} units TOTAL ${this.balance}`);
      } else {
        console.log(`Insufficient balance ${amount} super ${this.balance}`);
      }
    }
  }
  
  const account = new BankAccount("John Doe", 1000);
  account.deposit(500); // Output: Deposited 500 units
  account.withdraw(200); // Output: Withdrew 200 units
  account.withdraw(1500); // Output: Insufficient balance




  /**NBA */

  class Player {
    constructor(name, age, team) {
      this.name = name;
      this.age = age;
      this.team = team;
    }
  
    getInfo() {
      return `${this.name}, ${this.age} años, ${this.team}`;
    }
  }
  
  class Team {
    constructor(name, city) {
      this.name = name;
      this.city = city;
      this.players = [];
    }
  
    addPlayer(player) {
      this.players.push(player);
    }
  
    getPlayersList() {
      return this.players.map(player => player.name);
    }
  }
  
  const leBron = new Player("LeBron James", 36, "Los Angeles Lakers");
  const steph = new Player("Stephen Curry", 33, "Golden State Warriors");
  
  const lakers = new Team("Los Angeles Lakers", "Los Angeles");
  const warriors = new Team("Golden State Warriors", "San Francisco");
  
  lakers.addPlayer(leBron);
  warriors.addPlayer(steph);
  
  console.log("Jugadores de Los Angeles Lakers:", lakers.getPlayersList());
  console.log("Jugadores de Golden State Warriors:", warriors.getPlayersList());
  