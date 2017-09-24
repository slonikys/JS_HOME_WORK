var p = document.getElementById('new'),
  arr = [];

function showArrElements() {
  p.innerHTML = "<hr>";
  for (var i = 0; i < arr.length; i++) {
    p.innerHTML += +arr[i] + " <br>";
  }
  console.log(arr);
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
  return arr[index] = value;
}
