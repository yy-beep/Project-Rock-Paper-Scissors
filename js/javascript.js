function randomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}

console.log(randomNumber())

// create function called randomNumber()
// make so random number from 1 to 10 appears

function getComputerChoice() {
    let choice = randomNumber()

    if (choice = 1 || 2 || 3) {
        return "Rock"
    } else if (choice = 4 || 5 || 6) {
        return "Paper"
    } else if (choice = 7 || 8 || 9) {
        return "Scissors"
    };
}

console.log(getComputerChoice())

// write a function called getComputerChoice()
// set up if statement for rock
// set up if else statement for paper
// set up else statement for scissors
// use math to make each of them appear randomly ???