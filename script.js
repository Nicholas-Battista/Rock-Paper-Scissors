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


let popUp = document.querySelector('.choices');
let content = document.querySelector('.results');
let showScore = document.querySelector('.score');
let resutlDiv = document.querySelector('.restart');
let resultText = document.querySelector('.displayWinner');
const restartBtn = document.querySelector('.restartBtn');

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

        if (userscore === 5 || computerscore === 5) {
            let winOrLoss;
            resutlDiv.classList.toggle('is-active');

            if (userscore === 5) {
                outcome = "Win!"
                winOrLoss = "Congrats!"
            }
            else {
                outcome = "Lose!"
                winOrLoss = "Sadly!"
            }
            resultText.textContent = winOrLoss + " you " + outcome;
        }
    }

    restartBtn.addEventListener('click', () => {
        userscore = 0;
        computerscore = 0;

        content.textContent = '';
        showScore.textContent = '';
        resultText.textContent = '';
        resutlDiv.classList.toggle('is-active');
    });
    


function game() {
   
    popUp.classList.toggle('is-active');
    START.remove();
    
}
    

document.getElementById("start").onclick = game;
const START = document.getElementById("start");