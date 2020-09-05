const CHOICES = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
const para = document.querySelector('p');
const container = document.querySelector('.container')
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerScore = 0;
let computerScore = 0;
let computerScore_div = document.getElementById('c-score');
let playerScore_div = document.getElementById('p-score');



buttons.forEach((button) => {
    button.addEventListener('click', game);
    });   


function game(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    para.style.fontSize = "x-large";
    

    if (playerSelection == computerSelection ) {
        para.textContent = `It\'s a tie! You both played ${playerSelection}.`
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            para.textContent = `Round lost! You played ${playerSelection}, robot played ${computerSelection}.`;
            computerScore++;
        } else {
            para.textContent = `Round won! You played ${playerSelection}, robot played ${computerSelection}.`;
            playerScore++;
       
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            para.textContent = `Round won! You played ${playerSelection}, robot played ${computerSelection}.`;
            playerScore++;
        } else {
            para.textContent = `Round lost! You played ${playerSelection}, robot played ${computerSelection}.`;
            computerScore++;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            para.textContent = `Round lost! You played ${playerSelection}, robot played ${computerSelection}.`;
            computerScore++;
        } else {
            para.textContent = `Round won! You played ${playerSelection}, robot played ${computerSelection}.`;
            playerScore++;
        }
    }

    updateScore();
    checkWinner();
}

function computerPlay() {

    const randNum = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randNum];
    } 

function updateScore() {
    computerScore_div.innerText = "Robot's Score: " + computerScore.toString();
    playerScore_div.innerText = "Your Score:  " + playerScore.toString();
}

function checkWinner() {
    if (playerScore == 5 || computerScore == 5) {
        
        if(playerScore > computerScore) {
            para.textContent = 'VICTORY!';           
            
        } else if (computerScore > playerScore) {
            para.textContent = 'DEFEAT!';           
            
        }
        endGame();
    }
}

function endGame() {
    rock.style.visibility = 'hidden';
    scissors.style.visibility = 'hidden';
    paper.textContent = 'Play Again!';
    paper.addEventListener('click', () => {
        playerScore_div.textContent = 'Your Score: 0';
        computerScore_div.textContent = 'Robot\'s Score: 0';
        location.reload();
    });
    
    
}

