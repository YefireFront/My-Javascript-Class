function outerFunction() {
    var outerVariable = 'Hello';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

var closureExample = outerFunction();
closureExample(); // Output: Hello



function createBankAccount(initialBalance) {
    var balance = initialBalance;

    function deposit(amount) {
        balance += amount;
        console.log('Deposit:', amount);
        console.log('New balance:', balance);
    }

    function withdraw(amount) {
        if (amount <= balance) {
            balance -= amount;
            console.log('Withdraw:', amount);
            console.log('New balance:', balance);
        } else {
            console.log('Insufficient funds');
        }
    }

    function getBalance() {
        console.log('Current balance:', balance);
    }

    return {
        deposit: deposit,
        withdraw: withdraw,
        getBalance: getBalance
    };
}

var account1 = createBankAccount(1000);
account1.deposit(500); // Output: Deposit: 500, New balance: 1500
account1.withdraw(200); // Output: Withdraw: 200, New balance: 1300
account1.getBalance(); 

var account2 = createBankAccount(2000);
account2.deposit(1000); 
account2.withdraw(5000); 
account2.getBalance(); 



