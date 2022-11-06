async function downloadSummary() {
    setURL('https://gruppe-335.developerakademie.net/smallest_backend_ever');
    await downloadFromServer();
    allTasks = JSON.parse(backend.getItem('allTasks')) || [];
    prepareSummary()
    let currentUserAsString = backend.getItem('user');
    currentUser = JSON.parse(currentUserAsString) || [];
    renderGreet(currentUser);
}


let allTasks;


function prepareSummary(){
  let tasksTotal = countTasks();
  let tasksInProgress = countTasksInProgress();
  let tasksFeedback = countTasksAwaitingFeedback();
  let tasksUrgent = countTasksUrgent();
  let nextDeadline = showNextDeadline();
  let tasksToDo = countTasksTodDo();
  let tasksDone = countTasksDone();
  renderSummary(tasksTotal,tasksInProgress,tasksFeedback,tasksUrgent,tasksToDo,tasksDone,nextDeadline);
}


function renderSummary(tasksTotal,tasksInProgress,tasksFeedback,tasksUrgent,tasksToDo,tasksDone,nextDeadline){
    document.getElementById('tasksTotal').innerHTML = /*html*/`${tasksTotal}`;
    document.getElementById('tasksProgress').innerHTML = /*html*/`${tasksInProgress}`;
    document.getElementById('tasksFeedback').innerHTML = /*html*/`${tasksFeedback}`;
    document.getElementById('tasksUrgent').innerHTML = /*html*/`${tasksUrgent}`;
    document.getElementById('nextDeadline').innerHTML = /*html*/`${nextDeadline}`;
    document.getElementById('tasksToDo').innerHTML = /*html*/`${tasksToDo}`;
    document.getElementById('tasksDone').innerHTML = /*html*/`${tasksDone}`;
}


function renderGreet(currentUser){
    let today = new Date ();
    let currHour = today.getHours();
    if (currHour < 12) {
        document.getElementById('greet').innerHTML = /*html*/`
        <span class ="greetTime">Good Morning,</span>
        `
    } else if( currHour < 18) {
        document.getElementById('greet').innerHTML = /*html*/`
        <span class ="greetTime">Good Afternoon,</span>
        `
    } else {
        document.getElementById('greet').innerHTML = /*html*/`
        <span class ="greetTime">Good Evening,</span>
        `
    }
   
    for (let i = 0; i < currentUser.length; i++) {
        let user = currentUser[i]['name'];
        document.getElementById('greet').innerHTML += /*html*/ `<span class="greetName">${user}</span>`;    
    }  
}






function showNextDeadline(){
    currentDate = allTasks.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    return currentDate[0]['dueDate'];    
    };


function countTasks(){
    return allTasks.length;
}


function countTasksInProgress(){
    let totalInProgress = 0;
    for (let i = 0; i < allTasks.length; i++) {
        let taskStatus = allTasks[i]['status']
        if(taskStatus == 'inProgress'){
            totalInProgress++
        }
    }
    return totalInProgress;
}


function countTasksAwaitingFeedback(){
    let totalFeedback = 0;
    for (let i = 0; i < allTasks.length; i++) {
        let taskStatus = allTasks[i]['status']
        if(taskStatus == 'awaitingFeedback'){
            totalFeedback++
        }
    }
    return totalFeedback;
}


function countTasksUrgent(){
    let totalUrgent = 0;
    for (let i = 0; i < allTasks.length; i++) {
        let taskPrio = allTasks[i]['prio']
        if(taskPrio == 'urgent'){
            totalUrgent++
        }
    }
    return totalUrgent;
}


function countTasksTodDo(){
    let totalToDo = 0;
    for (let i = 0; i < allTasks.length; i++) {
        let taskStatus = allTasks[i]['status']
        if(taskStatus == 'toDo'){
            totalToDo++
        }
    }
    return totalToDo;
}


function countTasksDone(){
    let totalDone = 0;
    for (let i = 0; i < allTasks.length; i++) {
        let taskStatus = allTasks[i]['status']
        if(taskStatus == 'done'){
            totalDone++
        }
    }
    return totalDone;
}



function whitePenImg(){
    document.getElementById("pen").src = "assets/img/Summary/whitePenSummary.png";
}


function whiteCheckImg(){
    document.getElementById("check").src = "assets/img/Summary/whiteCheckSummary.png";

}


function blackPenImg(){
    document.getElementById("pen").src = "assets/img/Summary/penSummary.png";
}


function blackCheckImg(){
    document.getElementById("check").src = "assets/img/Summary/checkSummary.png";
}


function goToBoard(){
    window.location.href ='board.html'
}



