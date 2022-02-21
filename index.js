let playerCount = 0;
let computerCount = 0;
let i = 0;

const computerPlay = () => {
    const playList = ["Rock", "Paper", "Scissors"];
    const play = playList[Math.floor(Math.random() * playList.length)];
    return play;
}

const gameReset = () => {
    playerCount = 1;
    computerCount = 1;
    i = 0;
}

const oneRound = (playerSelection, computerSelection) => {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    if(player === computer) {
        return "Draw!"
    } else if(player === "rock" && computer === "paper") {
        computerCount++;
        return "You Lose! Paper beats Rock";
    } else if(player === "rock" && computer === "scissors") {
        playerCount++;
        return "You Won! Rock beats Scissors";
    } else if(player === "paper" && computer === "rock") {
        playerCount++;
        return "You Won! Paper beats Rock";
    } else if(player === "paper" && computer === "scissors") {
        computerCount++;
        return "You Lose! Scissors beats Paper";
    } else if(player === "scissors" && computer === "rock") {
        computerCount++;
        return "You Lose! Rock beats Scissors";
    } else if(player === "scissors" && computer === "paper") {
        playerCount++;
        return "You Won! Scissors beats Paper";
    }
}

const game = () => {
    while(playerCount !== 5 && computerCount !== 5) {
        i = i + 1;
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = computerPlay();
        console.log(`Ronda #${i}`)
        console.log(oneRound(playerSelection, computerSelection));
        console.log(`Computer selection was: ${computerSelection}`)
        console.log(`Player ${playerCount} - ${computerCount} Computer`)
    }
    if(playerCount === 5) {
        console.log(`You Won: Player ${playerCount} - ${computerCount} Computer`);
        gameReset();
        return "Thanks for playing!"
    } else if(computerCount === 5) {
        console.log(`You Lose: Player ${playerCount} - ${computerCount} Computer`);
        gameReset();
        return "Thanks for playing!"
    }
}

console.log(game());
console.log(game());
console.log(game());
