// Odin Project: Rock Paper Scissors Game
// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
// The classis rock paper scissor game against computer. Each game consists of 5 rounds.

function userMove() {
    let user = prompt("Rock, paper, or scissors?", "")
    if (user === null) {
        return 0;
    } else if (user === "") {
        return userMove();
    } else {
        user = user.toLowerCase();
        if ((user === "rock") || (user === "paper") || (user === "scissors")) {
            return user;
        } else {
            return userMove();
        }
    }
}

function compMove () {
    let randomNum = Math.floor(Math.random()*3 + 1);
    if (randomNum === 1) {
        return "rock";
    } else if (randomNum === 2) {
        return "paper";
    } else if (randomNum === 3) {
        return "scissors";
    }
}

function playRound(userPlay, compPlay) {
    let user = userPlay();
    let comp = compPlay();

    if (user === 0) {
        return 0;
    } else if (user === comp) {
        alert(`It's a tie. ${user[0].toUpperCase()+user.slice(1)} (you) vs ${comp} (computer).`);
        return 1;
    } else if ((user === "rock" && comp === "scissors") || (user === "paper" && comp === "rock") || (user === "scissors" && comp === "paper")) {
        alert(`You win this round. ${user[0].toUpperCase()+user.slice(1)} (you) beats ${comp} (computer).`);
        return "user";
    } else if ((comp === "rock" && user === "scissors") || (comp === "paper" && user === "rock") || (comp === "scissors" && user === "paper")) {
        alert(`You lose this round. ${comp[0].toUpperCase()+comp.slice(1)} (computer) beats ${user} (you).`);
        return "comp";
    }    
}

function playGame(totalRounds) {    
    alert("Rock Paper Scissors Game.\n5 rounds against computer.")

    let userScore = 0;
    let compScore = 0;

    for (let round = 1; round <= totalRounds; round++) {
        let roundWinner = playRound(userMove, compMove);
        if (roundWinner === 0) {
            return 0;
        } else if (roundWinner === "user") {
            userScore += 1;
        } else if (roundWinner === "comp") {
            compScore += 1;
        }

        alert(`Round ${round}:\nUser : computer = ${userScore} : ${compScore}`);
    }

    if (userScore > compScore) {
        alert("YOU WIN");
    } else if (compScore > userScore) {
        alert("YOU LOSE")
    } else if (userScore === compScore) {
        alert("IT'S A TIE")
    }


    if (confirm("Play again?")) {
        playGame(5);
    }
}

playGame(5);