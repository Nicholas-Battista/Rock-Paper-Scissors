function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

let userscore = 0;
let computerscore = 0;
let displayUserScore = document.querySelector('.user');
let displayCompScore = document.querySelector('.comp');
let description = document.querySelector('.description')

 function playRound(playerChoice, computerChoice) {
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        while (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                userscore++;
                return "Your choice: rock        Computer: scissors\n\nYou win! rock beats scissors!";
            }
            else if (computerChoice === "rock") {
                return "Your choice: rock        Computer: rock\n\nYou Tied! rock ties rock!";
            }
            else {
                computerscore++;
                return "Your choice: rock        Computer: paper\n\nYou Lose! paper beats rock!";
            }    
        }
    
        while (playerChoice === "paper") {
            if (computerChoice === "rock") {
                userscore++;
                return "Your choice: paper        Computer: rock\n\nYou win! paper beats rock!";
            }
            else if (computerChoice === "paper") {
                return "Your choice: paper        Computer: paper\n\nYou Tied! paper ties paper!";
            }
            else {
                computerscore++;
                return "Your choice: paper        Computer: scissors\n\nYou Lose! scissors beats paper!";
            }    
        }
    
        while (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                userscore++;
                return "Your choice: scissors        Computer: paper\n\nYou win! scissors beats paper!";
            }
            else if (computerChoice === "scissors") {
                return "Your choice: scissors        Computer: scissors\n\nYou Tied! scissors ties scissors!";
            }
            else {
                computerscore++;
                return "Your choice: scissors        Computer: rock\n\nYou Lose! rock beats scissors!";
            }    
        }
    }
    else if (playerChoice === "STOP") {
        alert("Game has been stopped. Goodbye!")
    }
    else {
        return "This is not an option!"
    }
    
    }

function game() {
    while (userscore !== 5 && computerscore !== 5 && playerChoice !== "STOP") {
        playerChoice = prompt("Choose between rock, paper, or scissors!");
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        console.log(playerChoice);

        alert(playRound(playerChoice, computerChoice));
        alert("Your score: " + userscore + "            Computer score: " + computerscore);
        displayUserScore.textContent = "Your score: " + userscore;
        displayCompScore.textContent = "Comp score: " + computerscore;
    }

    if (userscore === 5) {
        alert("Congrats ur smarter than a robot!");
    }
    else {
        alert("The robots wit was too great!")
    }
} 
    let playerChoice;
    let btns = document.querySelectorAll('button');
    btns.forEach( btn => {
        btn.addEventListener('click', () => {
            playerChoice = btn.innerHTML;
            console.log(playerChoice);
        });
    });

let computerChoice;



document.getElementById("start").onclick = game;