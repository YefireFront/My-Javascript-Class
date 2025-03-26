// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const randomNumber = generateRandomNumber(1, 10);
console.log(`Generated random number: ${randomNumber}`);