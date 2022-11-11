/**
 * downloads all existing users
 * 
 */
async function backendSignUp(){
setURL('https://gruppe-335.developerakademie.net/smallest_backend_ever');
await downloadFromServer();
allUsers = JSON.parse(backend.getItem('users')) || [];
}

let allUsers = [];

/**
 * adds a user to the array allUser and uploads the array
 * 
 */
async function addUser(){
    let name = document.getElementById('signUpName');
    let email = document.getElementById('signUpEmail');
    let password = document.getElementById('signUpPassword');
    allUsers.push({name:name.value, email:email.value,password:password.value})
    await backendIntegrationSignUp();
    window.location.href='index.html?msg=Du hast dich erfolgreich registriert';
}

/**
 * uploads
 * 
 */
async function backendIntegrationSignUp(){
    await backend.setItem('users', JSON.stringify(allUsers));
}


function backToLogIn(){
    window.location.href='index.html?msg=Du hast dich erfolgreich registriert';
}


