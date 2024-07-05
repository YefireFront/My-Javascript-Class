
class People {
    name;
    code;
    phrase;

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Technology {
    name;
    location;

    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    displayLocation() {
        console.log(`The ${this.name} is located at ${this.location}`);
    }
}

// Example usage
const laptop = new Technology('Laptop', 'Room 101');
laptop.displayLocation();