function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

let userscore = 0;
let computerscore = 0;

function playRound(playerChoice, computerChoice) {

    while (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            userscore++;
            return "You win! rock beats scissors!";
        }
        else if (computerChoice === "rock") {
            return "You Tied! rock ties rock!";
        }
        else {
            computerscore++;
            return "You Lose! paper beats rock!";
        }    
    }

    while (playerChoice === "paper") {
        if (computerChoice === "rock") {
            userscore++;
            return "You win! paper beats rock!";
        }
        else if (computerChoice === "paper") {
            return "You Tied! paper ties paper!";
        }
        else {
            computerscore++;
            return "You Lose! scissors beats paper!";
        }    
    }

    while (playerChoice === "scissors") {
        if (computerChoice === "paper") {
            userscore++;
            return "You win! scissors beats paper!";
        }
        else if (computerChoice === "scissors") {
            return "You Tied! scissors ties scissors!";
        }
        else {
            computerscore++;
            return "You Lose! rock beats scissors!";
        }    
    }
    }

function game() {
    //for (i = 0; i <= 5; i++) {
        //playerChoice = prompt("Whats your next choice?");
        //computerChoice = getComputerChoice();
        //console.log(computerChoice);
        //console.log(playerChoice);

        //alert(playRound(playerChoice, computerChoice));
        //alert("Your score: " + userscore + "            Computer score: " + computerscore);
    

    while (userscore !== 5 && computerscore !== 5) {
        playerChoice = prompt("Whats your next choice?");
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        console.log(playerChoice);

        alert(playRound(playerChoice, computerChoice));
        alert("Your score: " + userscore + "            Computer score: " + computerscore);
    }
}

let computerChoice;
let playerChoice;
alert("You are battling a AI ROBOT! Quick choose between rock paper or scissors!!");

game();


// if (playerChoice === "rock" && computerChoice === "scissors") {
//    return "You win! rock beats scissors!";
//}
//else if (playerChoice === "rock" && computerChoice === "rock") {
//    return "You Tied! rock ties rock!";
//}
//else {
//    return "You Lose! paper beats rock!";
//}
