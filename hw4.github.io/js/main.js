// Task1
var button1 = document.querySelector('#task1');
button1.addEventListener('click', strl);

function strl() {
    var str = document.getElementById('taskStr').value,
        boxStr = document.getElementById('stringlegth');
    console.log(str);
    boxStr.innerHTML = ' Длина введеной строки : ' + str.length + ' кол-во символов';
}
//Task2
var button2 = document.querySelector('#task2');
button2.addEventListener('click', showfoto);

function showfoto() {

    var arr = ['img/2.png', 'img/3.png', 'img/4.png', 'img/5.png', 'img/6.png', 'img/7.png'],
        container = document.querySelector('#resultTask2');

    for (var i = 0; i < arr.length; i++) {
        var element = document.createElement('img');
        element.classList.add('wh');
        container.appendChild(element);
        element.setAttribute('src', arr[i]);
    }
}
//Task3
var button3 = document.getElementById('task3');
button3.addEventListener('click', InternetAddressTest);

function InternetAddressTest() {
    var resultTask3 = document.getElementById('resultTask3'),
        adress = document.getElementById('firstSiteTask').value;
    console.log(adress.indexOf('http://'));
    if (adress.indexOf('http://') == 0) {
        resultTask3.innerHTML = adress.substring(7);
    } else if (adress.indexOf('https://') == 0) {
        resultTask3.innerHTML = adress.substring(8);
    } else {
        resultTask3.innerHTML = "Введите адрес полностью начиная с http или https";
    }
}

//task4
var button4 = document.getElementById('task4');
button4.addEventListener('click', secondInternetAddressTest);

function secondInternetAddressTest() {
    var resultTask3 = document.getElementById('resultTask4'),
        adress = document.getElementById('secondSiteTask').value;
    console.log(adress.indexOf('http://'));
    if (adress.indexOf('https://www.') == 0) {
        resultTask3.innerHTML = adress.substring(12);
    } else if (adress.indexOf('http://www.') == 0) {
        resultTask3.innerHTML = adress.substring(11);
    } else if (adress.indexOf('http://') == 0) {
        resultTask3.innerHTML = adress.substring(7);
    } else if (adress.indexOf('https://') == 0) {
        resultTask3.innerHTML = adress.substring(8);
    } else {
        resultTask3.innerHTML = "Введите адрес полностью начиная с http или https";
    }
}
//task5
var btn = document.querySelector('#submitT5');
var form = document.querySelector('#tagF');

btn.addEventListener('click', checkForm);
form.addEventListener('submit', stopDefault, false);

function stopDefault(event) {
    event.preventDefault();
}

function checkForm() {
    var firstName = document.querySelector('#firstName').value,
        lastName = document.querySelector('#lastname').value,
        pass = document.querySelector('#password').value,
        form = document.querySelector('#tagF').value,
        email = document.querySelector('#email').value;
    firstName = firstName.trim();
    lastName = lastName.trim();
    pass = pass.trim();
    email = email.trim();
    if (pass.length < 5 || email.indexOf('@') != email.lastIndexOf('@') || email.indexOf(' ') > 0) {
        alert('false');
    } else {
        alert('true');
    }
}
//task6
var button6 = document.querySelector('#submitT6');
    
    function charCode() {
var task6Value = document.querySelector('#tsk6Val').value,
result =document.querySelector('#task6result');
if (task6Value.length ==1) {
result.innerHTML = 'Код символа "' + task6Value +'" в юникоде '+'= '+ task6Value.charCodeAt(0);
    } else {
    	result.innerHTML ='вводите только  по 1 символу!';
    }
}
button6.addEventListener('click',charCode);