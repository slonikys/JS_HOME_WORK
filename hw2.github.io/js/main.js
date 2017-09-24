var p = document.getElementById('new'),
  arr = [];

function showArrElements() {
  p.innerHTML = "<hr>";
  for (var i = 0; i < arr.length; i++) {
    p.innerHTML += +arr[i] + " <br>";
  }
}

function pop() {
  arr.pop();
}

function shift() {
  arr.shift();
}

function push() {
  var value = document.getElementById('value').value,
    index = document.getElementById('index').value;
  if (isNaN(index)) {
    p.innerHTML = " Не вводите БУКВЫ в индекс только числа )";
  } else if (index > (arr.length - 1)) {
    arr[(arr.length - 1) + (index - (arr.length - 1))] = value;
  }
  return arr[index] = value;

}
