const intro = document.getElementById("intro");
const startButton = document.getElementById("startButton");
const game = document.getElementById("game");
const roundNumber = document.getElementById("roundNumber");
const handOption = document.getElementById("handOption");
const handButtons = document.getElementsByClassName("handButton");
const match = document.getElementById("match");
const hand1 = document.getElementById("hand1");
const hand2 = document.getElementById("hand2");
const matchComment = document.getElementById("matchComment");
const matchWinner = document.getElementById("matchWinner");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const next = document.getElementById("next");
const nextButton = document.getElementById("nextButton");
const total = document.getElementById("total");
const gameOver = document.getElementById("gameOver");
const gameWinner = document.getElementById("gameWinner");
const restartButton = document.getElementById("restartButton");
const accumulativeScore = document.getElementById("accumulativeScore");

const maxScore = 5;
let roundNum = 1;
let totalScore = [0, 0];

function startGame() {
    intro.style = "display: none";
    game.style = "display: block";
    handOption.style = "display: block";
    roundNumber.textContent = roundNum;
}

function playRound(e) {
    handOption.style = "display: none";
    match.style = "display: block";
    total.style = "display: block";
    next.style = "display: block";

    const shoot1 = this.id;
    const shoot2 = randomMove();

    hand1.textContent = shoot1.toUpperCase();
    hand2.textContent = shoot2.toUpperCase();

    const matchScore = getScore(shoot1, shoot2);
    totalScore[0] = totalScore[0] + matchScore[0];
    totalScore[1] = totalScore[1] + matchScore[1];

    matchComment.textContent = getMessage(matchScore, shoot1, shoot2);
    matchWinner.textContent = getWinner(matchScore);
    score1.textContent = matchScore[0];
    score2.textContent = matchScore[1];

    const accuDiv = document.createElement("div");
    const accuText = document.createTextNode(`Round ${roundNum} = ${totalScore[0]} : ${totalScore[1]}`);
    accuDiv.appendChild(accuText);
    accumulativeScore.appendChild(accuDiv);

    if (totalScore[0] === maxScore || totalScore[1] === maxScore) {
        gameWinner.textContent = getWinner(totalScore);
        next.style = "display: none";
        gameOver.style = "display: block";    
    }
}

function playNext() {
    handOption.style = "display: block";
    match.style = "display: none";
    next.style = "display: none";

    roundNum += 1;
    roundNumber.textContent = roundNum;
}

function restart(){
    intro.style = "display: block";
    next.style = "display: none";

    game.style = "display: none";
    handOption.style = "display: none";
    match.style = "display: none";
    gameOver.style = "display: none";
    total.style = "display: none";
    accumulativeScore.textContent = "";
    
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

function getVerb(hand) {
    if (hand === "rock") {
        return "breaks";
    } else if (hand === "paper") {
        return "wraps";
    } else if (hand === "scissors") {
        return "cuts";
    }
}

function getScore(h1, h2) {
    if (h1 === h2) {
        return [0, 0];
    } else if (
        (h1 === "rock" && h2 === "scissors") || 
        (h1 === "paper" && h2 === "rock") || 
        (h1 === "scissors" && h2 === "paper")
    ) {
        return [1, 0];
    } else if (
        (h2 === "rock" && h1 === "scissors") || 
        (h2 === "paper" && h1 === "rock") || 
        (h2 === "scissors" && h1 === "paper")
    ) {
        return [0, 1];
    }
}

function getMessage(score, h1, h2) {
    if (score[0] === 1) {
        return `Your ${h1} ${getVerb(h1)} computer's ${h2}.`;
    } else if (score[1] === 1) {
        return `Computer's ${h2} ${getVerb(h2)} your ${h1}. `;
    } else {
        return `Nothing really happens...`;
    }
}

startButton.addEventListener('click', startGame);
Array.from(handButtons).forEach(bt => bt.addEventListener("click", playRound));
nextButton.addEventListener('click', playNext);
restartButton.addEventListener('click', restart);