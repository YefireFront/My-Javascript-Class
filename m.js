class BankAccount {
    constructor(owner, balance) {
      this.owner = owner;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} units`);
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount} units`);
      } else {
        console.log("Insufficient balance");
      }
    }
  }
  
  const account = new BankAccount("John Doe", 1000);
  account.deposit(500); // Output: Deposited 500 units
  account.withdraw(200); // Output: Withdrew 200 units
  account.withdraw(1500); // Output: Insufficient balance