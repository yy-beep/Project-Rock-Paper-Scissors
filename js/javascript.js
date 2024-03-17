function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// create function called randomNumber()
// make so random number from 1 to 3 appears

function getComputerChoice() {
    let computerChoice = randomNumber(1, 3)

    if (computerChoice == 1) {
        return "Rock"
    } else if (computerChoice == 2) {
        return "Paper"
    } else { return "Scissors"};
}

// write a function called getComputerChoice()
// set up if statement for rock
// set up if else statement for paper
// set up else statement for scissors
// use math to make each of them appear randomly ???

function playRound(playerSection, computerSection) {
    
}

// create a function called  playRound(), to play round of rock, paper, scissors
// playRound() takes 2 parametars 1. playerSection 2. computerSection
// playerSection gets it's argument via promt
// computerSection gets it's argument via getComputerChoice() function
// make it print out a massage like "You lose! Paper beats Rock!!!" for all scenarios
// ??? make so playerSection() promt takes in input no matter how is it written (rock, Rock, RoCk, esc..) ???