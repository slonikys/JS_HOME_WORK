function getValue() {
  var data = document.getElementById("year").value,
    upData1 = "200" + data,
    upData2 = "20" + data,
    upData3 = "19" + data;
  if (data.length < 2) {
    old.innerHTML = "ВАШ ВОЗРАСТ : " + (2017 - (+upData1));
  } else if (data.length < 3 && data < 17) {
    old.innerHTML = "ВАШ ВОЗРАСТ : " + (2017 - (+upData2));
  } else if (data.length < 3 && data > 70) {
    old.innerHTML = "ВАШ ВОЗРАСТ : " + (2017 - (+upData3));
  } else if (data > 17 && data < 40) {
    old.innerHTML = "Вам больше 70 и ВЫ за компом ! УВАЖУХА";
  } else if (data.length < 3 && data > 70) {
    old.innerHTML = "ВАШ ВОЗРАСТ : " + (2017 - (+upData3));
  } else if (data.length === 3) {
    old.innerHTML = 'Введите год в 4 - х значном или 2 - х значном виде!';
  } else if (data.length === 4) {
    old.innerHTML = "ВАШ ВОЗРАСТ : " + (2017 - (+data));
  }
}

function bigestNumber() {
  var a = document.getElementById("numberA").value,
    b = document.getElementById("numberB").value;
  if (a > b) {
    bigestAre.innerHTML = "Число " + a + " БОЛЬШЕ";
  } else if (a < b) {
    bigestAre.innerHTML = "Число " + b + " БОЛЬШЕ";
  } else if (a === b) {
    bigestAre.innerHTML = "Числа равны";
  }
}

function getBlock() {
  var block = document.getElementById("appartmensNumber").value;
  if (block <= 20) {
    appartmentBlock.innerHTML = block + " квартира в 1 подъезде";
  } else if (block > 20 && block < 65) {
    appartmentBlock.innerHTML = block + " квартира в 2 подъезде";
  } else if (block > 64 && block < 81) {
    appartmentBlock.innerHTML = block + " квартира в 3 подъезде";
  } else if (block > 80) {
    appartmentBlock.innerHTML = block + " Нет такой квартиры в єтом доме";
  }
}

function getAccess() {
  var login = document.getElementById("login").value,
    password = document.getElementById("password").value;
  if (login === "ivan" && password === "333" || login === "ssss" && password === "666" || login === "gibs" && password === "0000") {
    alert("Добро пожаловать!");
  } else {
    alert("Ошибка");
  }
}

function bigNumber() {
  var a = document.getElementById("numA").value,
    b = document.getElementById("numB").value,
    c = document.getElementById("numC").value;
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    bigestNum.innerHTML = " Не вводите БУКВЫ только числа )";
  } else if (a === b && a === c && b === c) {
    bigestNum.innerHTML = " Числa равны";
  } else {
    bigestNum.innerHTML = " Число " + Math.max(a, b, c) + " больше всех";
  }
}

function evenNumber() {
  var x = "";
  for (i = 0; i < 101; i++) {
    if (i % 2 == 0)
      x += " " + i;
  }
  evenNum.innerHTML = x;
}

function cooldown() {
  var x = "";
  for (i = 200; i > 0; i--) {
    x += " " + i;
  }

  cooldownSum.innerHTML = x;
}

function sumTo() {
  return 100 * (100 + 1) / 2;
}
toSum.innerHTML = "Cумма чисел от 0 до 100 = " + sumTo();

function pow() {
  var a = document.getElementById("firstNumber").value,
    b = document.getElementById("secondNumber").value;
  if (isNaN(a) || isNaN(b)) {
    powTo.innerHTML = " Не вводите БУКВЫ только числа )";
  } else {
    powTo.innerHTML = Math.pow(a, b);
  }
}

var x = "";
for (g = 1; g <= 10; g++) {
  x += " " +
    "7" + "*" + g + "=" + (g * 7) + "</br>";
}
table.innerHTML = x;

var h = 1;
for (var g = 1; g <= 50; g++) {
  h *= g;
}
sum.innerHTML = "Произведение чисел от 1 до 50: " + h;

var zero = 1;
for (var b = 1000; b <= 2000; b++) {
  zero += " " + "&#" + b;
}
specialCode.innerHTML = zero;
