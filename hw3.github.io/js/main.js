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
        arrayOfTagImg[i].classList.toggle('boxshadow');
    }
}
// Task3
document.querySelector('#task3').addEventListener('click', GiveTagPnumber);

function GiveTagPnumber() {
    var arrayOfTag = document.getElementsByTagName('p'),
        i;
    for (i = 0; i < arrayOfTag.length; i++) {
        arrayOfTag[i].innerHTML = (i) + " " + arrayOfTag[i].innerHTML;
    }
}
// Task4
var count = 0,
    result = document.querySelector('#clickcount'),
    counters = document.querySelectorAll('button');

counters.forEach(function(elem) {
    elem.addEventListener('click', counter);
});

function counter() {
    count++;
    result.innerHTML = count + " : times u click button";
}
// Task 5
document.querySelector('#task6').addEventListener('click', pow);

function pow() {
    var a = document.getElementById("firstNumber").value,
        b = document.getElementById("secondNumber").value;
    if (isNaN(a) || isNaN(b)) {
        resulTask6.innerHTML = " Не вводите БУКВЫ только числа )";
    } else {
        resulTask6.innerHTML = Math.pow(a, b);
    }
}
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
var ageBox = document.querySelector('#ageReturn');
submitSome = document.querySelector('#SubmitB');

function AgeVerificationFirst() {
    var first = '“вы еще молоды”',
        second = '«добро пожаловать»',
        someAge2 = document.querySelector('#Age').value;
    if (someAge2 <= 16) {
        return first;
    } else {
        return second;
    }
}
submitSome.onclick = function() {
    ageBox.innerHTML = AgeVerificationFirst();
};

// Task 8
var ageRetBox = document.querySelector('#ageReturnSecond');
secondSubmit = document.querySelector('#SubmitButtonSecond');

function AgeVerificationSecond() {
    var first = '“вы еще молоды”',
        second = '«добро пожаловать»',
        third = 'Введите возраст ',
        ageTaskSecond = document.querySelector('#ageTask').value;
    if (isNaN(ageTaskSecond) || ageTaskSecond == "") {
        return third;
    } else if (ageTaskSecond <= 16) {
        return first;
    } else {
        return second;
    }
}
secondSubmit.onclick = function() {
    ageRetBox.innerHTML = AgeVerificationSecond();
};
//Task 9
var someArray = [1, 2, 3, 4, 5],
    buttonSubmitTask = document.querySelector('#arrShow'),
    buttonSubmitTaskSecond = document.querySelector('#arrShow2');

function arrayLength(arg) {
    if (arg === undefined) {
        return ('Error');
    } else {
        return (arg.length);
    }
}
buttonSubmitTask.onclick = function() {
    arrLengshow.innerHTML = arrayLength(someArray);
};
buttonSubmitTaskSecond.onclick = function() {
    arrLengshow.innerHTML = arrayLength();
};
// Task 10
var submit = document.querySelector('#submit'),
    counterResult = document.querySelector('#numberResult');

function returnSomeNumber() {
    var task10 = parseInt(document.querySelector('#task10').value);
    if (task10 <= 7) {
        return ('число рано или меньше 7');
    } else if (task10 >= 10) {
        return (task10 *= task10);
    } else {
        return (--task10);
    }
}
submit.onclick = function() {
    counterResult.innerHTML = returnSomeNumber();
};
// Task 11
var someGuessNumber = Math.round(Math.random() * 10),
    tryCounter = 0,
    counterRes = document.getElementById('counterResult'),
    guessThisNumber = document.querySelector('#guess'),
    againButton = document.querySelector('#again');

function guessNumber() {
    var someNumber = document.querySelector('#task11').value;
    switch (someGuessNumber > someNumber || someGuessNumber < someNumber || someGuessNumber == someNumber) {
        case someGuessNumber == someNumber:
            tryCounter++;
            counterRes.innerHTML = 'Угадал с: ' + tryCounter + ' раза';
            againButton.classList.add('two');
            break;
        case someGuessNumber < someNumber:
            counterRes.innerHTML = 'Загаданое число меньше';
            tryCounter++;
            break;
        case someGuessNumber > someNumber:
            counterRes.innerHTML = 'Загаданое число Больше';
            tryCounter++;
            break;

    }
    switch (tryCounter) {
        case 0:
        case 1:
        case 2:
            break;
        case 3:
            againButton.classList.add('two');
            break;
        default:
            againButton.classList.add('two');
            counterRes.innerHTML = 'Нет попыток играем снова ?';
    }
}
againButton.onclick = function() {
    window.location.reload(true);
};
guessThisNumber.onclick = (guessNumber);

