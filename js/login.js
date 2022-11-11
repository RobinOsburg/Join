/**
 * downloads all registered users
 * 
 */
async function backendLogIn(){
setURL('https://gruppe-335.developerakademie.net/smallest_backend_ever')
await downloadFromServer();
let AllUsersAsString = backend.getItem('users');
  AllUsers = JSON.parse(AllUsersAsString) || [];
}

let currentUser =[];
let comingFromLogIn;

/**
 * uploads the current user and gives the summary the info to prepare the greet for the user 
 * 
 */
async function backendIntegrationLogin(){
    await backend.setItem('user', JSON.stringify(currentUser));
<<<<<<< HEAD
    await backend.setItem('comingFromLogIn', JSON.stringify(comingFromLogIn));
=======
    await backend.setItem('comingFromLogIn',JSON.stringify(comingFromLogIn));
>>>>>>> 2a6a4f94f403deec0c8414b5abb933d3b1ba4dc1
}

/**
 * directs to summary
 * 
 */
function directToSummary(){
    window.location.href="https://gruppe-335.developerakademie.net/summary.html"
}

/**
 * directs to sign up
 * 
 */
function signUp(){
    window.location.href="https://gruppe-335.developerakademie.net/signUp.html"
}

/**
 * messages the user that his registration was successful
 * 
 */
function showLogInSucces(){
const urlParams = new URLSearchParams(window.location.search);
const msg = urlParams.get('msg');

if (msg) {
   document.getElementById('msgBox').innerHTML = msg;
   document.getElementById('msgBox').classList.remove('d-none');
} 
}


/**
 * checks if there is an account with a matching email and password
 * 
 */
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
                comingFromLogIn = true;
                await backendIntegrationLogin();
            }
            }
            directToSummary();
    }
}


 





