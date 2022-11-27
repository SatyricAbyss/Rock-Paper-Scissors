let playerScore = 0;
let computerScore = 0;
let gameTies = 0;
const userName = localStorage.getItem('userName');

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

const saveData = () => {
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
    if(!document.getElementById('userName').value) {
        localStorage.setItem('userName', 'Unknown');
    } else {
        localStorage.setItem('userName', document.getElementById('userName').value);
    }
    setUserOnScreen();
    document.getElementById('gameOutcome').innerHTML = `Your data has been saved.`;
    document.getElementById('computerChoice').innerHTML = `<strong>The computer</strong> saved with ${computerScore} victories.`;
    document.getElementById('playerChoice').innerHTML = `<strong>${userName}</strong> saved with ${playerScore} victories.`;
    document.getElementById('userName').value = user;
}

const getData = () => {
    let user;

    if(!localStorage.getItem('userName')) {
        user = "Unknown"
    } else {
        user = localStorage.getItem('userName');
    }

    if(!localStorage.getItem('playerScore')) {
        playerScore = 0;
    } else {
        playerScore = localStorage.getItem('playerScore');
    }

    if(!localStorage.getItem('computerScore')) {
        computerScore = 0;
    } else {
        computerScore = localStorage.getItem('computerScore');
    }

    setUserOnScreen();
    document.getElementById('gameOutcome').innerHTML = `Your data has been loaded.`;
    document.getElementById('computerChoice').innerHTML = `<strong>The computer</strong> loaded with ${computerScore} victories.`;
    document.getElementById('playerChoice').innerHTML = `<strong>${user}</strong> loaded with ${playerScore} victories.`;
    document.getElementById('userName').value = user;
    console.log("Your game has loaded. "+localStorage.getItem('userName')+" with "+playerScore+" and "+computerScore+" defeats");
}

const resetData = () => {
    localStorage.clear();
    document.getElementById('gameOutcome').innerHTML = `You have reset your data`;
}

const setUserOnScreen = () => {
    if(!userName){
        document.getElementById('welcomeUser').innerHTML = `Welcome new user, please submit a username!`;
    } else {
        document.getElementById('welcomeUser').innerHTML = `Welcome ${userName}`;
    }
}


const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
        gameTies++;
        return 'Tie';
    } else if(userChoice === 'rock') {
        if(computerChoice === 'paper'){
            computerScore++;
            return 'Computer won';
        } else {
            playerScore++;
            return 'Player won';
        }
    } else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            computerScore++;
            return 'Computer won';
        } else {
            playerScore++;
            return 'Player won';
        }
    } else if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
            computerScore++;
            return 'Computer won';
        } else {
            playerScore++;
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
        user = 'Unknown';
    } else {
        user = localStorage.getItem('userName');
    }
    document.getElementById('gameOutcome').innerHTML = ((determineWinner(userChoice, computerChoice)));
    document.getElementById('computerChoice').innerHTML = `The computer chose: <strong>${computerChoice}</strong> and has now won ${computerScore} times.`;
    document.getElementById('playerChoice').innerHTML = `${user} chose: <strong>${userChoice}</strong> and has now won ${playerScore} times.`;
}
