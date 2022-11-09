async function backendLogIn(){
setURL('https://gruppe-335.developerakademie.net/smallest_backend_ever')
await downloadFromServer();
let AllUsersAsString = backend.getItem('users');
  AllUsers = JSON.parse(AllUsersAsString) || [];
}

let currentUser =[];
let comingFromLogIn;

async function backendIntegrationLogin(){
    await backend.setItem('user', JSON.stringify(currentUser));
    await backend.setItem('comingFromLogIn',JSON.stringify(comingFromLogIn));
}

function directToSummary(){
    window.location.href="summary.html"
}

function signUp(){
    window.location.href="signUp.html"
}


function showLogInSucces(){
const urlParams = new URLSearchParams(window.location.search);
const msg = urlParams.get('msg');

if (msg) {
   document.getElementById('msgBox').innerHTML = msg;
   document.getElementById('msgBox').classList.remove('d-none');
} 
}



async function logIn(){
    let email = document.getElementById('loginEmail');
    let password = document.getElementById('loginPassword');
    let mail = email.value;
    let user = AllUsers.find(u => u.email == email.value && u.password == password.value);
    // let mailName = AllUsers.findIndex(mail);
    if (user) {
        comingFromLogIn = true;
        for (let i = 0; i < AllUsers.length; i++) {
            if (mail == AllUsers[i]['email']) {
                currentUser.push(AllUsers[i]);
                await backendIntegrationLogin();
            }
            }
            directToSummary();
    }
}


 





