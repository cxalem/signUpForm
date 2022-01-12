const nameLastname = document.getElementById('nameLastname');
const username = document.getElementById('username');
const age = document.getElementById('age');
const eMail = document.getElementById('eMail');
const debt = document.getElementById('debt');
const savings = document.getElementById('savings');
const popUpContainer = document.getElementById('popUp');

let user = [];

function formValidation() {

    user = [nameLastname.value.split(' '), username.value, age.value, eMail.value, savings.value, debt.value];

    let okForm = true;
    
    for (i = 0; i <= 5; i++) {
        if (user[i] == null || user[i].length == 0){
            alert('introduce un valor correcto');
            okForm = false;
        }
    }
    
    if (okForm == true) {

            let title = document.createElement('span');
            let namedTitle = document.createTextNode(`${user[0][0]} ${user[0][1]}`);
            let element = document.querySelector('.uName');
            let usernameTitle = document.createElement('span');
            let unTitle = document.createTextNode(user[1]);
            let userElement = document.querySelector('.username');
            const showDisplay = document.getElementById('userContainer');

            title.appendChild(namedTitle);
            element.insertAdjacentElement("afterbegin", title);
            usernameTitle.appendChild(unTitle);
            userElement.insertAdjacentElement("afterbegin", usernameTitle);
            showDisplay.style.display = 'block';
    }

}

function userBtn() {

    user = [nameLastname.value.split(' '), username.value, age.value, eMail.value, savings.value, debt.value];

    const hideDisplay = document.getElementById('userContainer');
    hideDisplay.style.display = 'none';

    let title = document.createElement('span');
    let namedTitle = document.createTextNode(`${user[0][0]} ${user[0][1]}`);
    let element = document.getElementById('userTitle');
    let usernameTitle = document.createElement('span');
    let unTitle = document.createTextNode(user[1]);
    let userElement = document.getElementById('usernameSubtitle');
    let ageSpan = document.createElement('span');
    let userAge = document.createTextNode(`Edad: ${user[2]}`);
    let ageElement = document.getElementById('userAge');
    let eMailSpan = document.createElement('span');
    let userEMail = document.createTextNode(`Correo: ${user[3]}`);
    let eMailElement = document.getElementById('userEMail');
    let legalAgeSpan = document.createElement('span');
    let userLegalAge;
    if (user[2] >= 18){
        userLegalAge = document.createTextNode(`Eres mayor de edad`);
     }
    else {
        userLegalAge = document.createTextNode(`No eres mayor de edad`)
       }
    let legalAgeElement = document.getElementById('userAge');
    let savingsSpan = document.createElement('span');
    let userSavings = document.createTextNode(`Ahorros: ${user[4]}`);
    let savingsElement = document.getElementById('userEMail');
    let userRealMoney = user[4] - user[5];
    let debtsSpan = document.createElement('span');
    let userDebts = document.createTextNode(`Deudas: ${user[5]}`);
    let debtsElement = document.getElementById('userDebts');
    let moneySpan = document.createElement('span');
    let userMoney = document.createTextNode(`Dinero después de deudas: ${userRealMoney}`);
    let moneyElement = document.getElementById('realMoney');

    const popUpDisplay = document.getElementById('popUp');

    popUpDisplay.style.display = 'flex';
    title.appendChild(namedTitle);
    element.insertAdjacentElement("afterbegin", title);
    usernameTitle.appendChild(unTitle);
    userElement.insertAdjacentElement("afterbegin", usernameTitle);
    ageSpan.appendChild(userAge);
    ageElement.insertAdjacentElement("beforebegin", ageSpan);
    eMailSpan.appendChild(userEMail);
    eMailElement.insertAdjacentElement("beforebegin", eMailSpan);
    legalAgeSpan.appendChild(userLegalAge);
    legalAgeElement.insertAdjacentElement("beforebegin", legalAgeSpan);
    savingsSpan.appendChild(userSavings);
    savingsElement.insertAdjacentElement("beforebegin", savingsSpan);
    debtsSpan.appendChild(userDebts);
    debtsElement.insertAdjacentElement("beforebegin", debtsSpan);
    moneySpan.appendChild(userMoney);
    moneyElement.insertAdjacentElement("beforebegin", moneySpan);

}

popUpContainer.addEventListener('click', e => {
    if (e.target.classList.contains('userInfoPopContainer')) {
        popUpContainer.style.display = 'none';
        location.reload();
    }
})

