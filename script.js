function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}


function playRound(playerChoice, computerChoice) {

    while (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            return "You win! rock beats scissors!";
        }
        else if (computerChoice === "rock") {
            return "You Tied! rock ties rock!";
        }
        else {
            return "You Lose! paper beats rock!";
        }    
    }

    while (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return "You win! paper beats rock!";
        }
        else if (computerChoice === "paper") {
            return "You Tied! paper ties paper!";
        }
        else {
            return "You Lose! scissors beats paper!";
        }    
    }

    while (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            return "You win! scissors beats paper!";
        }
        else if (computerChoice === "scissors") {
            return "You Tied! scissors ties scissors!";
        }
        else {
            return "You Lose! rock beats scissors!";
        }    
    }
    }

const computerChoice = getComputerChoice();
const playerChoice = prompt("You are battling a AI ROBOT! Quick choose between rock paper or scissors!!");
console.log(computerChoice);
console.log(playerChoice);

alert(playRound(playerChoice, computerChoice));


// if (playerChoice === "rock" && computerChoice === "scissors") {
//    return "You win! rock beats scissors!";
//}
//else if (playerChoice === "rock" && computerChoice === "rock") {
//    return "You Tied! rock ties rock!";
//}
//else {
//    return "You Lose! paper beats rock!";
//}
