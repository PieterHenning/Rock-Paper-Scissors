
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

function playRound (playerSelection, computerSelection){
    
    //console.log(checkEntry(playerSelection));

    while (checkEntry (playerSelection) == false){
        playerSelection = prompt('Incorrect entry'), computerPlay();
    } 
        let playerSelectionUpper = playerSelection.toUpperCase();
        let computerSelectionUpper = computerSelection.toUpperCase();

        //console.log("Computer: " + computerSelectionUpper);
        //console.log("Human: "+ playerSelectionUpper);

        if (playerSelectionUpper.localeCompare('ROCK') == 0){
            //console.log("ROCK");

            if (computerSelectionUpper.localeCompare('SCISSORS') == 0){
                
                console.log('You win! Rock beats Scissors');
                return 1;
            } else if (computerSelectionUpper.localeCompare('PAPER') == 0){
                
                console.log('You loose! Paper beats Rock');
                return 0;
            } else{
                console.log('Tie');
                return 2;
            }
        } else if (playerSelectionUpper.localeCompare('PAPER') == 0)   {
            //console.log("PAPER");
            if (computerSelectionUpper.localeCompare('ROCK') == 0){
                
                console.log('You win! Paper beats Rock');
                return 1;
            } else if (computerSelectionUpper.localeCompare('SCISSORS') == 0){
                
                console.log('You Loose! Scissors beats Paper');
                return 0;
            } else{
                console.log('Tie');
                return 2;
            }
        } else if (playerSelectionUpper.localeCompare('SCISSORS') == 0){
            //console.log("SCISSORS");
            if (computerSelectionUpper.localeCompare('PAPER') == 0){
                
                console.log('You win! Scissors beats Paper');
                return 1;
            } else if (computerSelectionUpper.localeCompare('ROCK') == 0){
                console.log('You loose! Rock beats Scissors');
                return 0;
            } else{
                 console.log('Tie');
                 return 2;
            }
        }
        
    
}

function game(rounds){
    let player = 0;
    let computer = 0;
    let round;
    for (let i = 0; i < rounds; i++){
        console.log('Round: ' + (i+1));
        round = playRound(prompt("Rock, Paper or Scissors?"),computerPlay());
        
        if (round == 1){
            player++;
        } else if (round == 0){
            computer++;
        }
        //console.log(player);
        //console.log(computer);
    }

    if (player > computer){
        alert("You win the game!");
    } else if (computer > player){
        alert("You loose the game!");
    } else if (player == computer){
        alert("It is a draw");
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

game(5);

//let UserInput = parseInt(prompt("Please enter your selection:"));
//game(UserInput, computerPlay());
