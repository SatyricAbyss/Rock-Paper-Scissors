let playerScore = 0;
let computerScore = 0;
let gameTies = 0;

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
        return userInput;
    } else {
        console.log('The user input is invalid');
    }
}

const getComputerChoice = () => {
    let result='';
    switch(Math.floor(Math.random()*3)){
        case 0:
        return 'rock';
        result = 'rock';
        break;
        case 1:
        return 'paper';
        result = 'paper';
        break
        case 2:
        return 'scissors';
        result = 'scissors';
        break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        return 'Tie';
    } else if(userChoice === 'rock') {
        if(computerChoice === 'paper'){
        return 'Computer won';
        } else {
        return 'Player won';
        }
    } else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
        return 'Computer won';
        } else {
        return 'Player won';
        } 
    } else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
        return 'Computer won';
        } else {
        return 'Player won';
        }
    } else if(userChoice === 'bomb'){
        return 'Player desimated computer';
    }
}

const playGame = (userSelectedInput) => {
    let userChoice = getUserChoice(userSelectedInput);
    let computerChoice = getComputerChoice();
    
    let user = localStorage.getItem('userName');
    if(!user || user === null){
        user = 'New user';
    } else {
        user = localStorage.getItem('userName');
    }
    document.getElementById('gameOutcome').innerHTML = ((determineWinner(userChoice, computerChoice)));
    document.getElementById('computerChoice').innerHTML = `The computer chose: <strong>${computerChoice}</strong> and has now won ${computerScore} times.`;
    document.getElementById('playerChoice').innerHTML = `${user} chose: <strong>${userChoice}</strong> and has now won ${playerScore} times.`;
} 
