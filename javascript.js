//console.log("Hello World!");

//console.log(getComputerChoice());


function getComputerChoice() {
    const randomInt = Math.floor(Math.random() * 3) + 1;
    switch (randomInt) {
        case 1:
            return "rock"
        case 2: 
            return "paper"
        case 3:
            return "scissors"
        default:
            return "error"
    }
}


function getHumanChoice() {
    const buttons = document.querySelectorAll("button");

    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener("click", () => {
            if (button.innerText != undefined)
                console.log(button.innerText);
                return button.innerText;
        });
    });
}

const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    playRound(button.innerText, getComputerChoice())
    if (humanScore === 5) {
        alert("You Won the Game! Beating the Computer: " + humanScore + " to " + computerScore);
    }
    else if (computerScore === 5) {
        alert("You Lost the Game! Losing to the Computer: " + computerScore + " to " + humanScore);
    }
    setScores();
  });
});

function setScores() {
    const humanScoreElement = document.querySelector("#human");
    const computerScoreElement = document.querySelector("#computer");

    humanScoreElement.innerText = "Human: " + humanScore.toString() ;
    computerScoreElement.innerText = "Computer: " + computerScore.toString();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("Computer Choose " + computerChoice);
    const humanChoiceTemp = humanChoice.toLowerCase().trim();
    let humanWin = false;
    if (humanChoiceTemp === "rock" && computerChoice === "scissors")
        humanWin = true;
    if (humanChoiceTemp === "paper" && computerChoice === "rock")
        humanWin = true; 
    if (humanChoiceTemp === "scissors" && computerChoice === "paper")
        humanWin = true;


    if (humanChoiceTemp === computerChoice) {
        console.log("You Tied! " + humanChoiceTemp + " ties " + computerChoice);
    }
    else if (humanWin) {
        console.log("You Win! " + humanChoiceTemp + " beats " + computerChoice);
        humanScore++;
    }
    else if (!humanWin) {
        console.log("You Lose! " + computerChoice + " beats " + humanChoiceTemp);
        computerScore++;
    }
}

function playGame() {
    for (let index = 0; index < 5; index++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore) {
        console.log("You Won the Game! Beating the Computer: " + humanScore + " to " + computerScore);
    }
    else if (computerScore > humanScore) {
        console.log("You Lost the Game! Losing to the Computer: " + computerScore + " to " + humanScore);
    }
    else {
        console.log("You Tied the Game! Tieing to the Computer: " + computerScore + " to " + humanScore);
    }
}

function playMatch() {
    //playRound(getHumanChoice(), getComputerChoice());
}
//playGame();
