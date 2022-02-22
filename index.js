let playerCount = 0;
let computerCount = 0;
let i = 0;
const playAgainDiv = document.getElementById("playAgainDiv");
const casesArray = [
    "Draw",
    "You Lose! Paper beats Rock",
    "You Won! Rock beats Scissors",
    "You Won! Paper beats Rock",
    "You Lose! Scissors beats Paper",
    "You Lose! Rock beats Scissors",
    "You Won! Scissors beats Paper",
]

const rock = document.getElementById("rock");
rock.addEventListener("click", () => { oneRound("rock") })

const paper = document.getElementById("paper");
paper.addEventListener("click", () => { oneRound("paper") })

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => { oneRound("scissors") })

const computerPlay = () => {
    const playList = ["Rock", "Paper", "Scissors"];
    const play = playList[Math.floor(Math.random() * playList.length)];
    return play;
}

const gameReset = () => {
    playerCount = 0;
    computerCount = 0;
    i = 0;
}

const createElement = (text) => {
    const newText = document.getElementById("textDiv");
    newText.classList.add("text-log");
    newText.textContent = text;
}

const showComputerSelection = (text) => {
    const show = document.getElementById("computerSelection");
    show.textContent = text;
}

const showScore = (text) => {
    const score = document.getElementById("score");
    score.textContent = text;
}

const announceWinner = (text) => {
    const winner = document.getElementById("winner");
    winner.textContent = text;
}

const gameClear = () => {
    createElement("");
    showComputerSelection("");
    showScore("Player 0 - 0 Computer");
    announceWinner("");
}

const blockButtons = () => {
    // @ts-ignore
    document.querySelectorAll(".playerButton").forEach(e => e.disabled = true);
}

const playAgainButton = () => {
    const button = document.createElement('button');
    button.classList.add('playAgainButton');
    button.textContent = 'Play Again';
    playAgainDiv.appendChild(button);
}

const unlockButtons = () => {
    const btn = document.querySelector(".playAgainButton");
    btn.addEventListener('click', () => {
        // @ts-ignore
        document.querySelectorAll(".playerButton").forEach(e => e.disabled = false);
        gameClear();
        const playAgainBtn = document.querySelector(".playAgainButton");
        playAgainBtn.remove();
    });
}

const count = () => {
    i = i + 1;
    console.log(`Ronda #${i}`);
    showScore(`Player ${playerCount} - ${computerCount} Computer`);
    if(playerCount === 5) {
        announceWinner(`You Won!!!`);
        gameReset();
        blockButtons();
        playAgainButton();
        unlockButtons();
        return;
    } else if(computerCount === 5) {
        announceWinner(`Computer Won!!!`);
        gameReset();
        blockButtons();
        playAgainButton();
        unlockButtons();
        return;
    }
    return;
}

const oneRound = (playerSelection) => {
    const player = playerSelection.toLowerCase();
    const computer = computerPlay().toLowerCase();
    showComputerSelection(`computer selection was: ${computer}`);
    if(player === computer) {
        createElement(casesArray[0]);
        count();
        return console.log(casesArray[0]);
    } else if(player === "rock" && computer === "paper") {
        computerCount++;
        createElement(casesArray[1]);
        count();
        return console.log(casesArray[1]);
    } else if(player === "rock" && computer === "scissors") {
        playerCount++;
        createElement(casesArray[2]);
        count();
        return console.log(casesArray[2]);
    } else if(player === "paper" && computer === "rock") {
        playerCount++;
        createElement(casesArray[3]);
        count();
        return console.log(casesArray[3]);
    } else if(player === "paper" && computer === "scissors") {
        computerCount++;
        createElement(casesArray[4]);
        count();
        return console.log(casesArray[4]);
    } else if(player === "scissors" && computer === "rock") {
        computerCount++;
        createElement(casesArray[5]);
        count();
        return console.log(casesArray[5]);
    } else if(player === "scissors" && computer === "paper") {
        playerCount++;
        createElement(casesArray[6]);
        count();
        return console.log(casesArray[6]);
    }
}
