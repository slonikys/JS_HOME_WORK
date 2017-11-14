  //task1
  var field = document.getElementById('field');
  var answer = document.querySelector('#coords');
  var block = document.querySelector('#field');

  function getCoordinates(event) {
      answer.innerHTML = 'X: ' + event.clientX + ', Y: ' + event.clientY;
  }

  function mouseOutOfField() {
      answer.innerHTML = 'Переведите МЫШЬ на блок Для ПОЛУЧЕНИЯ координат';
  }
  block.addEventListener('mousemove', getCoordinates);
  block.addEventListener('mouseout', mouseOutOfField);
  //task2
  var openF = document.querySelector('#task2');
  openF.addEventListener('dblclick', openThisFolder);

  function openThisFolder() {
      openF.classList.toggle('open');
  }
  // task3
  var cont = document.querySelector('#task3');
  var button3 = document.querySelector('#button3');

  function createblock() {

      function doCircle() {
          this.classList.add('circle');
      }

      function backtoblock() {
          this.classList.remove('circle');
      }
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
  }
  button3.addEventListener('click', createblock);
  // Task 4
  var parentDiv = document.querySelector('#task4');
  var conn = document.querySelector('#container');

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
  }
  parentDiv.addEventListener('click', delegate);

  // Task5

  var blockTask5 = document.querySelector('#task5');

  function moveDown() {
      var position = blockTask5.style.top;
      if (position === "") {
          blockTask5.style.top = '0';
          position = parseInt(blockTask5.style.top);
      } else {
          position = parseInt(blockTask5.style.top);
      }
      if (position < 300) {
          blockTask5.style.top = (position + 100) + 'px';
      } else {
          blockTask5.style.top = '0';
      }
  }

  blockTask5.addEventListener('click', moveDown);

  // Task 6

  var trig = document.querySelector('#trigger');
  var counter = 0;

  function moveLeft() {
      var position = trig.style.marginRight
      if (position === '') {
          trig.style.marginRight = 'auto'
          trig.style.marginLeft = 'auto';
          counter++
      } else if (position === 'auto') {
          trig.style.marginRight = '0'
          counter++
      } else {
          trig.style.marginLeft = "";
          trig.style.marginRight = "";
          counter = 0;
      }
      console.log(counter);
  }
  trig.addEventListener('click', moveLeft);