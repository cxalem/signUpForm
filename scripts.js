function formValidation() {

    let nameLastname = document.getElementById('nameLastname').value;
    let username = document.getElementById('username').value;
    let age = document.getElementById('age').value;
    let eMail = document.getElementById('eMail').value;
    let savings = document.getElementById('savings').value;
    let debt = document.getElementById('debt').value;
    
    const user = [nameLastname.split(' '), username, age, eMail, savings, debt]

    let okForm = true;
    
    for (i = 0; i <= 5; i++) {
        if (user[i] == null || user[i].length == 0){
            alert('introduce un valor correcto');
            okForm = false;
        }
    }
    
    if (okForm == true) {

            const title = document.createElement('span');
            const namedTitle = document.createTextNode(nameLastname);
            title.appendChild(namedTitle);
            const element = document.getElementById('uNameTitle');
            element.insertAdjacentElement("afterbegin", title);

            const usernameTitle = document.createElement('span');
            const unTitle = document.createTextNode(username);
            usernameTitle.appendChild(unTitle);
            const userElement = document.getElementById('usernameTitle');
            userElement.insertAdjacentElement("afterbegin", usernameTitle);

            const showDisplay = document.getElementById('userContainer');
            showDisplay.style.display = 'block';
    }

}

function userBtn() {
    const popUpDisplay = document.getElementById('popUp');
    popUpDisplay.style.display = 'flex';
}