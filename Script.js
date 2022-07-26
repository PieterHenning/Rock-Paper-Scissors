let playerScore = 0;
let computerScore = 0;

function computerPlay (){
    let selector = 0;
    let computerAnswer = 'rock';
    
    
        selector = Math.floor(Math.random()*3);
        
    //console.log('selector: ' + selector);

    if (selector  == 0){
        computerAnswer = 'Rock';
    } else if(selector == 1){
        computerAnswer = 'Paper'
    } else if(selector == 2){
        computerAnswer = 'Scissors'
    } 
    
    return computerAnswer;
}



function scoreKeeper(player, computer){
    

    if (player == -1){
        playerScore = 0;
        computerScore = 0;
        return [playerScore, computerScore]
    }

    playerScore = playerScore + player;
    computerScore = computerScore + computer; 

    return [playerScore, computerScore];
}

function newGame (){
    scoreKeeper(-1,0);
    const scoreText = document.querySelector('#score').textContent = "Player:   0  || Computer: 0 ";
    const message = document.querySelector('#banner').textContent = "";
    const buttons = document.querySelector(".button_div").style.visibility = "visible";
}

function playRound (clicked_id){
     
    playerSelection = clicked_id;
    computerSelection = computerPlay();

    let playerScore = 0;
    let computerScore = 0;
    let scoreTemp = "";

    let message = document.querySelector('#banner');
    let scoreText = document.querySelector('#score');
   
   

    //console.log("Player: " + playerSelection);
    //console.log("Comp: " + computerSelection);
    

    while (checkEntry (playerSelection) == false){
        playerSelection = prompt('Incorrect entry'), computerPlay();
    } 
        let playerSelectionUpper = playerSelection.toUpperCase();
        let computerSelectionUpper = computerSelection.toUpperCase();
        
        if (playerSelectionUpper.localeCompare('ROCK') == 0){
            //console.log("ROCK");

            if (computerSelectionUpper.localeCompare('SCISSORS') == 0){
                
                //console.log('You win! Rock beats Scissors');
                score = scoreKeeper(1,0);
                playerScore = score[0];
                computerScore = score[1];
                scoreTemp = 'Player: '+ playerScore +'  || Computer: '+ computerScore;
                //console.log("scoreTemp: " + scoreTemp);
                scoreText.textContent = scoreTemp ;
                message.textContent = "You win! Rock beats Scissors";
                
                
            } else if (computerSelectionUpper.localeCompare('PAPER') == 0){
                
                //console.log('You loose! Paper beats Rock');
                score = scoreKeeper(0,1);
                playerScore = score[0];
                computerScore = score[1];
                scoreTemp = 'Player: '+ playerScore +'  || Computer: '+ computerScore;
                //console.log("scoreTemp: " + scoreTemp);
                scoreText.textContent = scoreTemp ;
                message.textContent = "You loose! Paper beats Rock";

            } else{
                //console.log('Tie');
                score = scoreKeeper(0,0);
                playerScore = score[0];
                computerScore = score[1];
                scoreTemp = 'Player: '+ playerScore +'  || Computer: '+ computerScore;
                //console.log("scoreTemp: " + scoreTemp);
                scoreText.textContent =scoreTemp ;
                message.textContent = "Tie";
            }
        } else if (playerSelectionUpper.localeCompare('PAPER') == 0)   {
            //console.log("PAgame(5);PER");
            if (computerSelectionUpper.localeCompare('ROCK') == 0){
                
                //console.log('You win! Paper beats Rock');
                score = scoreKeeper(1,0);
                playerScore = score[0];
                computerScore = score[1];
                scoreTemp = 'Player: '+ playerScore +'  || Computer: '+ computerScore;
                //console.log("scoreTemp: " + scoreTemp);
                scoreText.textContent =scoreTemp ;
                message.textContent = "You win! Paper beats Rock";

            } else if (computerSelectionUpper.localeCompare('SCISSORS') == 0){
                
                //console.log('You Loose! Scissors beats Paper');
                score = scoreKeeper(0,1);
                playerScore = score[0];
                computerScore = score[1];
                scoreTemp = 'Player: '+ playerScore +'  || Computer: '+ computerScore;
                //console.log("scoreTemp: " + scoreTemp);
                scoreText.textContent =scoreTemp ;
                message.textContent = "You Loose! Scissors beats Paper";

            } else{
                //console.log('Tie');
                score = scoreKeeper(0,0);
                playerScore = score[0];
                computerScore = score[1];
                scoreTemp = 'Player: '+ playerScore +'  || Computer: '+ computerScore;
                //console.log("scoreTemp: " + scoreTemp);
                scoreText.textContent =scoreTemp ;
                message.textContent = "Tie";
                
            }
        } else if (playerSelectionUpper.localeCompare('SCISSORS') == 0){
            //console.log("SCISSORS");clicked()
            if (computerSelectionUpper.localeCompare('PAPER') == 0){
                
                //console.log('You win! Scissors beats Paper');
                score = scoreKeeper(1,0);
                playerScore = score[0];
                computerScore = score[1];
                scoreTemp = 'Player: '+ playerScore +'  || Computer: '+ computerScore;
                //console.log("scoreTemp: " + scoreTemp);
                scoreText.textContent =scoreTemp ;
                message.textContent = "You win! Scissors beats Paper";

            } else if (computerSelectionUpper.localeCompare('ROCK') == 0){
                //console.log('You loose! Rock beats Scissors');
                score = scoreKeeper(0,1);
                playerScore = score[0];
                computerScore = score[1];

                scoreTemp = 'Player: '+ playerScore +'  || Computer: '+ computerScore;
                //console.log("scoreTemp: " + scoreTemp);
                scoreText.textContent =scoreTemp ;
                message.textContent = "You loose! Rock beats Scissors";
                
            } else{
                 //console.log('Tie');
                 score = scoreKeeper(0,0);
                playerScore = score[0];
                computerScore = score[1];
                scoreTemp = 'Player: '+ playerScore +'  || Computer: '+ computerScore;
                //console.log("scoreTemp: " + scoreTemp);
                scoreText.textContent = scoreTemp ;
                message.textContent = "Tie";
            }
        }
    if (playerScore == 5){
        const message = document.querySelector('#banner').textContent = "YOU WON!!";
        const buttons = document.querySelector(".button_div").style.visibility = "hidden"; 
        
    } else if (computerScore == 5){
        const message = document.querySelector('#banner').textContent = "COMPUTER WON!!";
        const buttons = document.querySelector(".button_div").style.visibility = "hidden";
        
    }      
    
}

function checkEntry (playerSelection){
    
    
    let playerSelectionUpper = playerSelection.toUpperCase();

    if (playerSelectionUpper.localeCompare('ROCK') == 0 || playerSelectionUpper.localeCompare('SCISSORS') == 0 || playerSelectionUpper.localeCompare('PAPER') == 0){
        return true;

    } else {
        return false;
    }


}

 

//let UserInput = parseInt(prompt("Please enter your selection:"));
//game(UserInput, computerPlay());
