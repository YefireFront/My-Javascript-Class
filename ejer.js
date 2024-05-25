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
account1.deposit(500); 
account1.withdraw(200); 
account1.getBalance(); 

var account2 = createBankAccount(2000);
account2.deposit(1000); 
account2.withdraw(5000); 
account2.getBalance(); 





function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous operation
        setTimeout(() => {
            const data = 'Data fetched successfully';
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });


    async function fetchData() {
        return new Promise((resolve, reject) => {
            // Simulating an asynchronous operation
            setTimeout(() => {
                const data = 'Data fetched successfully';
                resolve(data);
            }, 2000);
        });
    }

    async function example() {
        try {
            const data = await fetchData();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    example();

    function multiplyBy(factor) {
        return function(number) {
            return number * factor;
        }
    }

    var multiplyByTwo = multiplyBy(2);
    console.log(multiplyByTwo(5)); // Output: 10

    var multiplyByThree = multiplyBy(3);
    console.log(multiplyByThree(5)); // Output: 15





    function greet(name) {
        console.log('Hello, ' + name + '!');
    }

    greet('John'); // Output: Hello, John!