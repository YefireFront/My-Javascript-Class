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



/**
 * *
 * ?
 * %
 * @todo
 * !
 * $
 * 
 */