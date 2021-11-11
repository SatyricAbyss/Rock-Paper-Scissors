const setUserOnScreen = () => {
    let userName = localStorage.getItem('userName');
    if(!userName){
        document.getElementById('welcomeUser').innerHTML = `Welcome new user, please submit a username!`;
    } else {
        document.getElementById('welcomeUser').innerHTML = `Welcome ${userName}`;
    }
}

const storeUser = (newUserName) => {
    localStorage.setItem('userName', newUserName);
    setUserOnScreen();
}
