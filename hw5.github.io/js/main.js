  //task1
  var field = document.getElementById('field');

function getCoordinates(event){
  let answer = document.querySelector('#coords');
  answer.innerHTML = 'X: ' + event.clientX + ', Y: ' + event.clientY;

}

let block = document.querySelector('#field');
block.addEventListener('mousemove', getCoordinates);






  // field.onmousemove = function(e) {
  //     document.getElementById('coords').innerHTML = "по x : " + e.clientX + ' , по Y: ' + e.clientY;
  // };
  //task2
  var openF = document.querySelector('#task2');
  openF.addEventListener('dblclick', openThisFolder);

  function openThisFolder() {
      openF.classList.toggle('open');
  }
  // task3
  var cont = document.querySelector('#task3'),
      button3 = document.querySelector('#button3');

  function createblock() {
      for (var i = 0; i < 300; i++) {
          var element = document.createElement('div');
          element.classList.add('block');
          cont.appendChild(element);
      }
      var block = document.querySelectorAll('.block');
      block.forEach(function(elem) {
          elem.addEventListener('mouseover', doCircle);
          elem.addEventListener('mouseout', backtoblock);
      });

      function doCircle() {
          this.classList.add('circle');
      }

      function backtoblock() {
          this.classList.remove('circle');
      }
  }
  button3.addEventListener('click', createblock);
  // Task 4
  var parentDiv = document.querySelector('#task4'),
      conn = document.querySelector('#container');

  function delegate(event) {
      var target = event.target;
      if (target.tagName != 'IMG') {
          return;
      } else {
          changeBG(target, conn);
      }
  }

  function changeBG(target, conn) {
      var source = target.getAttribute('src');
      conn.style.backgroundImage = 'url(' + source + ')';
      conn.style.backgroundSize = 'contain';
      conn.style.backgroundRepeat = 'no-repeat';
      conn.style.backgroundPosition = 'center';
  }
  parentDiv.addEventListener('click', delegate);
  // Task5
  var blockTask5 = document.querySelector('#task5');
  blockTask5.style.top="0";
    function moveDown() {
   var position =parseInt(blockTask5.style.top);
     if (position<300) {
  blockTask5.style.top =(position +100) +'px';
   } else {
    blockTask5.style.top= '0px';
   }
  }
  blockTask5.addEventListener('click',moveDown);
  // Task 6
  var trig =document.querySelector('#trigger');
  trig.style.left="0";
  function moveLeft() {
    debugger;
   var position =parseInt(trig.style.left);
     if (position==0) {
  trig.style.left =50 +'%';
  trig.style.marginLeft="-30px";
  console.log(1);
   } else if (position==50) {
    trig.style.left= '80%';
    trig.style.marginLeft="0px";
    console.log(2);
   } else {
  trig.style.left= "0px";
  trig.style.marginLeft="0px";
  console.log(0);
 }
}
 trig.addEventListener('click',moveLeft);