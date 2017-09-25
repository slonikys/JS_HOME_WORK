var p = document.getElementById('new'),
  arr = ['Dima','all','is','fixed'];

function showArrElements() {
  p.innerHTML = "<hr>" + "<br>" + arr;
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
  } else {
  return arr[index] = value;
}
console.log(value);
}
