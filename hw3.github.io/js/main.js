// Task1
document.querySelector('#task1').addEventListener('click', ChangePbg);

function ChangePbg() {
    var arrayOfTagP = document.querySelectorAll('p');
    arrayOfTagP.forEach(function(elem) {
        elem.classList.add("red");
    });
}
// Task2
document.querySelector('#task2').addEventListener('click', ChangeImgBoxShadow);

function ChangeImgBoxShadow() {
    var arrayOfTagImg = document.getElementsByTagName('img'),
        i;
    for (i = 0; i < arrayOfTagImg.length; i++) {
        arrayOfTagImg[i].style.boxShadow = "10px 10px 10px 10px rgba(0,0,0,0.75)";
    }
}
// Task3
document.querySelector('#task3').addEventListener('click', GiveTagPnumber);

function GiveTagPnumber() {
    var arrayOfTag = document.getElementsByTagName('p'),
        i;
    for (i = 0; i < arrayOfTag.length; i++) {
        arrayOfTag[i].innerHTML = (i) + arrayOfTag[i].innerHTML;
    }
}
// Task4
var count = 0,
    result = document.querySelector('#clickcount'),
    counters = document.querySelectorAll('.task4');

counters.forEach(function(elem) {
    elem.addEventListener('click', counter);
});

function counter() {
    ++count;
    result.innerHTML = count + " : times u click button";
}
// Task 5
function pow(a, b) {
    return Math.pow(a, b);
}
alert(pow(2, 5));
// Task 6

document.querySelector('#button6').addEventListener('click', textDecotation);

function textDecotation() {
    var someTag = document.getElementById('tag').value,
     tagName = document.querySelectorAll(someTag);
    tagName.forEach(function(elem) {
        elem.style.textDecoration = "underline";
    });
}
// Task 7
function AgeVerification(age) {
    if (age < 16) {
        alert('“вы еще молоды”');
    } else {
        alert('«добро пожаловать»');
    }
}
// Task 8
function AgeVerification2(age) {
    if (age === undefined || isNaN(age)) {
        alert('“Введите возраст”');
    } else if (age < 16) {
        alert('“вы еще молоды”');
    } else {
        alert('«добро пожаловать»');
    }
}
//Task 9
var someArray = [1, 2, 3, 4, 5];

function arrayLength(arg) {
    if (arg === undefined) {
        alert('Error');
    } else {
        alert(arg.length);
    }
}
arrayLength(someArray);
arrayLength();
// Task 10
function returnSomeNumber(arg) {
    if (arg < 7) {
        alert('число меньше 7');
    } else if (arg > 10) {
        alert(arg *= arg);
    } else if (arg == 8) {
        alert(--arg);
    } else if (arg == 9) {
        alert(--arg);
    }
}
// Task 11
var someGuessNumber = Math.round(Math.random() * 10),
    tryCounter = 0,
    counterRes = document.getElementById('counterResult');

function guessNumber() {
    var someNumber = document.querySelector('#task11').value;
    if (someNumber < someGuessNumber) {
        alert('Введите число больше!');
        ++tryCounter;
    } else if (someNumber > someGuessNumber) {
        alert('Введите число меньше!');
        ++tryCounter;
    } else {
        alert('УГАДАЛ!!!!');
        ++tryCounter;
        counterRes.innerHTML = 'Ты угадал с: ' + tryCounter + ' раза';

    }
}
document.querySelector('#guess').addEventListener('click', guessNumber);
console.log(someGuessNumber);