function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomNumber(1, 3))

// create function called randomNumber()
// make so random number from 1 to 3 appears

function getComputerChoice() {
    let choice = randomNumber(1, 3)

    if (choice == 1) {
        return "Rock"
    } else if (choice == 2) {
        return "Paper"
    } else { return "Scissors"};
}

console.log(getComputerChoice())

// write a function called getComputerChoice()
// set up if statement for rock
// set up if else statement for paper
// set up else statement for scissors
// use math to make each of them appear randomly ???