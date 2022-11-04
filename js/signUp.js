async function backendSignUp(){
setURL('https://gruppe-335.developerakademie.net/smallest_backend_ever');
await downloadFromServer();

}

let AllUsers = [];

async function addUser(){
    let name = document.getElementById('signUpName');
    let email = document.getElementById('signUpEmail');
    let password = document.getElementById('signUpPassword');
    AllUsers.push({name:name.value, email:email.value,password:password.value})
    await backendIntegrationSignUp();
    window.location.href='index.html?msg=Du hast dich erfolgreich registriert';
}


async function backendIntegrationSignUp(){
    await backend.setItem('users', JSON.stringify(AllUsers));
}


function backToLogIn(){
    window.location.href='index.html?msg=Du hast dich erfolgreich registriert';
}


