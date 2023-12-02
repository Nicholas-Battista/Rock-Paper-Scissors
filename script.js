function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

let userscore = 0;
let computerscore = 0;
let playerChoice;
let btns = document.querySelectorAll('button');
let computerChoice;


let popUp = document.querySelector('choices');
let content = document.querySelector('.results');
let showScore = document.querySelector('.score');

let outcome;


    btns.forEach( btn => {
        btn.addEventListener('click', () => {
            playerChoice = btn.textContent;
            computerChoice = getComputerChoice();

            playRound();
        });
    });

    

    function playRound() {
        if (playerChoice === "Rock" && computerChoice === "scissors") {
            userscore++
            outcome = "Win!"
        }
        else if (playerChoice === "Rock" && computerChoice === "paper") {
            computerscore++
            outcome = "Lose!"
        }
        else if (playerChoice === "Paper" && computerChoice === "rock") {
            userscore++
            outcome = "Win!"
        }
        else if (playerChoice === "Paper" && computerChoice === "scissors") {
            computerscore++
            outcome = "Lose!"
        }
        else if (playerChoice === "Scissors" && computerChoice === "paper") {
            userscore++
            outcome = "Win!"
        }
        else if (playerChoice === "Scissors" && computerChoice === "rock") {
            computerscore++
            outcome = "Lose!"
        }
        else outcome = "Tie!"

        content.textContent = "You chose " + playerChoice + "! The computer chose " + computerChoice + "! you " + outcome;

        showScore.textContent = "Your score: " + userscore + "\n Computer Score: " + computerscore;
    }
    


function game() {
    while (userscore !== 5 && computerscore !== 5) {

        
    }

    if (userscore === 5) {
        alert("Congrats ur smarter than a robot!");
    }
    else {
        alert("The robots wit was too great!")
    }
} 
    



document.getElementById("start").onclick = game;