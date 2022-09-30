const rpsButtons = document.getElementsByClassName("rpsButton");

const startBox = document.getElementById("startBox");
const startButton = document.getElementById("startButton");
const roundBox = document.getElementById("roundBox");
const roundNumber = document.getElementById("roundNumber");
const moveOption = document.getElementById("moveOption");
const roundResult = document.getElementById("roundResult");
const userMove = document.getElementById("userMove");
const compMove = document.getElementById("compMove");
const roundMessage = document.getElementById("roundMessage");
const roundWinner = document.getElementById("roundWinner");
const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const nextBox = document.getElementById("nextBox");
const nextRound = document.getElementById("nextRound");
const gameEnding = document.getElementById("gameEnding");
const winnerBox = document.getElementById("winnerBox");
const startOver = document.getElementById("startOver");

let roundNum = 1;
let totalScore = [0, 0];
const maxRound = 5;

function startGame() {
    startBox.style = "display: none";
    roundBox.style = "display: block";
    moveOption.style = "display: block";
    roundNumber.textContent = roundNum;
}

function playRound(e) {
    moveOption.style = "display: none";
    roundResult.style = "display: block";

    const player1 = this.id;
    const player2 = randomMove();

    userMove.textContent = player1.toUpperCase();
    compMove.textContent = player2.toUpperCase();

    const roundScore = getScore(player1, player2);
    totalScore[0] = totalScore[0] + roundScore[0];
    totalScore[1] = totalScore[1] + roundScore[1];

    roundMessage.textContent = getMessage(roundScore, player1, player2);
    roundWinner.textContent = getWinner(roundScore);
    userScore.textContent = roundScore[0];
    compScore.textContent = roundScore[1];
    userTotal.textContent = totalScore[0];
    compTotal.textContent = totalScore[1];

    if (roundNum === maxRound) {
        winnerBox.textContent = getWinner(totalScore);
        nextBox.style = "display: none";
        gameEnding.style = "display: block";    
    }
}

function playNext() {
    moveOption.style = "display: block";
    roundResult.style = "display: none";
    roundNum += 1;
    roundNumber.textContent = roundNum;
}


function refreshPage(){
    startBox.style = "display: block";
    nextBox.style = "display: block";

    roundBox.style = "display: none";
    moveOption.style = "display: none";
    roundResult.style = "display: none";
    gameEnding.style = "display: none";
    
    roundNum = 1;
    totalScore = [0, 0];
}

function randomMove() {
    let randomNum = Math.floor(Math.random()*3 + 1);
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else if (randomNum === 3) {
        return "scissors";
    }
}

function getWinner(score) {
    if (score[0] > score[1]) {
        return "You win!";
    } if (score[0] < score[1]) {
        return "You lose!";
    } else {
        return "It's a tie!";
    }
}

function getVerb(item) {
    if (item === "rock") {
        return "breaks";
    } else if (item === "paper") {
        return "wraps";
    } else if (item === "scissors") {
        return "cuts";
    }
}

function getScore(p1, p2) {
    if (p1 === p2) {
        return [0, 0]; // tie
    } else if (
        (p1 === "rock" && p2 === "scissors") || 
        (p1 === "paper" && p2 === "rock") || 
        (p1 === "scissors" && p2 === "paper")
    ) {
        return [1, 0]; // p1 win
    } else if (
        (p2 === "rock" && p1 === "scissors") || 
        (p2 === "paper" && p1 === "rock") || 
        (p2 === "scissors" && p1 === "paper")
    ) {
        return [0, 1]; // p2 win
    }
}

function getMessage(score, p1, p2) {
    if (score[0] === 1) {
        return `Your ${p1} ${getVerb(p1)} computer's ${p2}.`;
    } else if (score[1] === 1) {
        return `Computer's ${p2} ${getVerb(p2)} your ${p1}. `;
    } else {
        return `Nothing really happens...`;
    }
}

startButton.addEventListener('click', startGame);
Array.from(rpsButtons).forEach(bt => bt.addEventListener("click", playRound));
nextRound.addEventListener('click', playNext);
startOver.addEventListener('click', refreshPage);




