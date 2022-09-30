const startBox = document.getElementById("startBox");
const startButton = document.getElementById("startButton");
const roundBox = document.getElementById("roundBox");
const roundNumber = document.getElementById("roundNumber");
const roundMove = document.getElementById("roundMove");
const roundResult = document.getElementById("roundResult");
const rpsButtons = document.getElementsByClassName("rpsButton");
const userMove = document.getElementById("userMove");
const compMove = document.getElementById("compMove");
const roundMessage = document.getElementById("roundMessage");
const roundWinner = document.getElementById("roundWinner");

const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const nextRound = document.getElementById("nextRound");



let round = 1;
let totalScore = [0, 0];

function startGame() {
    startBox.style = "display: none";
    roundBox.style = "display: block";
    roundMove.style = "display: block";
    roundNumber.textContent = "Round " + round;
}

startButton.addEventListener('click', startGame);

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

function playRound(e) {
    roundMove.style = "display: none";
    roundResult.style = "display: block";

    const player1 = this.id;
    const player2 = randomMove();

    userMove.textContent = player1.toUpperCase();
    compMove.textContent = player2.toUpperCase();

    const score = getScore(player1, player2);
    totalScore[0] = totalScore[0] + score[0];
    totalScore[1] = totalScore[1] + score[1];

    const comment = getMessage(score, player1, player2);
    roundMessage.textContent = comment[0];
    roundWinner.textContent = comment[1];
    userScore.textContent = score[0];
    compScore.textContent = score[1];
    userTotal.textContent = totalScore[0];
    compTotal.textContent = totalScore[1];

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

function getMessage(score, p1, p2) {
    if (score[0] === 1) {
        return [`Your ${p1} ${getVerb(p1)} computer's ${p2}.`, `You win!`];
    } else if (score[1] === 1) {
        return [`Computer's ${p2} ${getVerb(p2)} your ${p1}. `, `Computer wins!`];
    } else {
        return [`No winner here...`, `It's a tie!`];
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

Array.from(rpsButtons).forEach(bt => bt.addEventListener("click", playRound));

function playNext() {
    scoreBox.style = "display: block";
    // update summary
}

nextRound.addEventListener('click', playNext);


// function playRound (e) {
//     const comp = randomMove();
//     const user = this.id;
//     const score = getScore(user, comp);
//     const message = getMessage(score, user, comp);
//     totalRun += 1;
//     totalScore += score;



//     roundMessage.style = "display: block;"
//     roundMessage.textContent = message;
// }

    







// const roundMessage = document.getElementById("roundMessage");
// let totalScore = 0;
// let totalRun = 0;






//



// // function game() {
// //     for (let i = 0; i < 5; i++) {
// //         const playerSelection = prompt("rock, paper, scissors?");
// //         const computerSelection = randomMove();
// //         console.log(playRound(playerSelection, computerSelection));
// //     }
// // }

// // game();