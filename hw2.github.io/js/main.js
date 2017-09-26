var p = document.getElementById('new'),
  arr = ['Dima','all','is','fixed'];

function showArrElements() {
  p.innerHTML = "<hr>" + "<br>" + arr;
  }
showArrElements();

function pop() {
  arr.pop();
  showArrElements();
}

function shift() {
  arr.shift();
  showArrElements();
}

function addby() {
  var value = document.getElementById('value').value,
    index = document.getElementById('index').value;
  arr[index] = value;
showArrElements();
}
function push () {
   var value = document.getElementById('value').value;
  arr.push(value);
  showArrElements();
}
