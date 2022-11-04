function initalsCurrentUser(){
    let name = AllUsers[currentUser]['name']
    let nameArray = name.split(/\s+/);
    let firstLetter = nameArray[0].charAt(0);
    let secondLetter = nameArray[1].charAt(0);
    let initials = firstLetter + secondLetter;
    allContactsSorted[i]['initials'] = initials;
    
    document.getElementById('userImg').innerHTML = `${initials}`;
}