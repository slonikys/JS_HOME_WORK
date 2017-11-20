// Task1
const addInputBtn = document.querySelector('#js-add-input');
const container = document.querySelector('#container');

const createInputBox = (parent) => {
  const box = document.createElement('div');
  box.classList.add('input-group');

  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.classList.add('text_input');

  const delBtn = document.createElement('button');
  delBtn.classList.add('input-group__btn');
  delBtn.textContent = '-';

  box.append(input, delBtn)
  parent.append(box);
};

const handleDelete = (evt) => {
  const target = evt.target;
  const tagName = target.tagName;
  const parentNode = target.parentNode;

  if (target !== event.currentTarget && tagName === 'BUTTON') {
    parentNode.remove();
  }
};

addInputBtn.addEventListener('click', createInputBox.bind(null, container));
container.addEventListener('click', handleDelete);

const collectButton = document.querySelector('#colect');
const textArea = document.querySelector('#textBox');
const inputArr = document.querySelectorAll('input');

const collectInputValue = () => {
  let inputArr = document.querySelectorAll('.text_input');
  let radioButton = document.getElementsByName('parity');
  let value = "";
  textArea.innerHTML = "";

  if (radioButton[0].checked) {

    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i].value == "") {
        textArea.innerHTML = "";
        inputArr[i].style.outlineColor = 'red';
        inputArr[i].style.outlineWidth = '2px';
        inputArr[i].style.outlineStyle = 'solid';
        alert(`Пустой ${i+1} инпут`);
        break;
      } else {
        textArea.innerHTML += ` ${inputArr[i].value} --\&\&--`;
        inputArr[i].style = '';

      }
    }

  } else if (radioButton[1].checked) {
    for (let i = 0; i < inputArr.length; i++) {
      if (i % 2 != 0) {
        if (inputArr[i].value == "") {
          textArea.innerHTML = "";
          inputArr[i].style.outlineColor = 'red';
          inputArr[i].style.outlineWidth = '2px';
          inputArr[i].style.outlineStyle = 'solid';
          alert(`Пустой ${i+1} инпут`);
          return;
        } else {
          textArea.innerHTML += ` ${inputArr[i].value} --\&\&--`;
          inputArr[i].style.outlineColor = '';
          inputArr[i].style.outlineWidth = '';
          inputArr[i].style.outlineStyle = '';
        }
      }
    };

  } else {
    for (let i = 0; i < inputArr.length; i++) {
      if (i % 2 == 0) {
        if (inputArr[i].value == "") {
          textArea.innerHTML = "";
          inputArr[i].style.outlineColor = 'red';
          inputArr[i].style.outlineWidth = '2px';
          inputArr[i].style.outlineStyle = 'solid';
          alert(`Пустой ${i+1} инпут`);
          return;
        } else {
          textArea.innerHTML += ` ${inputArr[i].value} --\&\&--`;
          inputArr[i].style.outlineColor = '';
          inputArr[i].style.outlineWidth = '';
          inputArr[i].style.outlineStyle = '';
        }
      }
    };
  }
};

collectButton.addEventListener('click', collectInputValue);

// Task2
debugger;
const currentBlock = document.querySelector('.task2');
const addInput = currentBlock.querySelector('.addinput');
const newInputButton = document.querySelector('#js-arrPushButton');
currentBlock.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName == 'LI') target.classList.toggle('selected');
});
addInput.addEventListener('change', () => {
  const ul = currentBlock.querySelector('UL'),
    newLi = document.createElement('LI');
  newLi.innerHTML = addInput.value;
  ul.appendChild(newLi);
});

newInputButton.addEventListener('click', () => {
  const ul = currentBlock.querySelector('UL'),
    newLi = document.createElement('LI');
  newLi.innerHTML = addInput.value;
  ul.appendChild(newLi);
});
