"use strict";

const input = document.querySelector(".input");
const result = document.querySelector(".result");
const deleteBtn = document.querySelector(".delete");
const keys = document.querySelectorAll(".bottom span");
//console.log(keys);

let operation = "";
let answer;
let decimalAdded = false;

const operators = ["+", "-", "x", "÷"];

function handleKeyPress(e) {
  const key = e.target.dataset.key;
  const lastChar = operation[operation.length - 1];

  if (key === "=") {
    return;
  }

  if (key === "." && decimalAdded) {
    return;
  }

  if (operators.indexOf(key) !== -1) {
    decimalAdded = false;
  }

  if (operation.length === 0 && key === "-") {
    operation += key;
    input.innerHTML = operation;
    return;
  }

  if (operation.length === 0 && operators.indexOf(key) !== -1) {
    input.innerHTML = operation;
    return;
  }

  if (operators.indexOf(lastChar) !== -1 && operators.indexOf(key) !== -1) {
    operation = operation.replace(/.$/, key);
    input.innerHTML = operation;
    return;
  }

  if (key) {
    if (key === ".") decimalAdded = true;
    operation += key;
    input.innerHTML = operation;
    return;
  }

}

function evaluate(e) {
  const key = e.target.dataset.key;
  const lastChar = operation[operation.length - 1];

  if (key === "=" && operators.indexOf(lastChar) !== -1) {
    operation = operation.slice(0, -1);
  }

  if (operation.length === 0) {
    answer = "";
    result.innerHTML = answer;
    return;
  }

  try {

    if (operation[0] === "0" && operation[1] !== "." && operation.length > 1) {
      operation = operation.slice(1);
    }

    const final = operation.replace(/x/g, "*").replace(/÷/g, "/");
    answer = +(eval(final)).toFixed(5);

    if (key === "=") {
      decimalAdded = false;
      operation = `${answer}`;
      answer = "";
      input.innerHTML = operation;
      result.innerHTML = answer;
      return;
    }

    result.innerHTML = answer;

  } catch (e) {
    if (key === "=") {
      decimalAdded = false;
      input.innerHTML = `<span class="error">${operation}</span>`;
      result.innerHTML = `<span class="error">Bad Expression</span>`;
    }
    //console.log(e);
  }

}

function clearInput(e) {

  if (e.ctrlKey) {
    //console.log(e.ctrlKey);
    operation = "";
    answer = "";
    input.innerHTML = operation;
    result.innerHTML = answer;
    return;
  }

  operation = operation.slice(0, -1);
  //console.log(operation);
  input.innerHTML = operation;

}

deleteBtn.addEventListener("click", clearInput);
keys.forEach(key => {
  key.addEventListener("click", handleKeyPress);
  key.addEventListener("click", evaluate);
});


//adding keyboard functionality using java script

document.onkeydown = function (event) {

  var key_press = String.fromCharCode(event.keyCode);
  //console.log(key_press);
  var key_code = event.keyCode;
  var input = document.querySelector('.input');
  var inputVal = input.innerHTML;
  //var btnVal = this.innerHTML;
  var lastChar = inputVal[inputVal.length - 1];
  var equation = inputVal;
  // Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively. 
  equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');

  // Target each keypress and update the input screen

  if (key_press == 1) {
    input.innerHTML += key_press;
  }
  if (key_press == 2) {
    input.innerHTML += key_press;
  }
  if (key_press == 3 || key_code == 32) {
    input.innerHTML += key_press;
  }
  if (key_press == 4) {
    input.innerHTML += key_press;
  }
  if (key_press == 5) {
    input.innerHTML += key_press;
  }
  if (key_press == 6 && event.shiftKey == false) {
    input.innerHTML += key_press;
  }
  if (key_press == 7) {
    input.innerHTML += key_press;
  }
  if (key_press == 8 && event.shiftKey == false) {
    input.innerHTML += key_press;
  }
  if (key_press == 9) {
    input.innerHTML += key_press;
  }
  if (key_press == 0) {
    input.innerHTML += key_press;
  }

  // Cature operators and prevent from addint two consecutuve operators

  if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
    document.querySelector('.input').innerHTML += '+';
    return;
  }
  if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 189 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 107)) {
    document.querySelector('.input').innerHTML += '-';
    return;
  }
  if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 56 && event.shiftKey) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 106)) {
    document.querySelector('.input').innerHTML += 'x';
    return;
  }
  if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 191) || (inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 111)) {
    document.querySelector('.input').innerHTML += '÷';
    return;
  }
  if ((inputVal != '' && operators.indexOf(lastChar) == -1 && key_code == 54 && event.shiftKey)) {
    document.querySelector('.input').innerHTML += '^';
    return;
  }
  if (key_code == 13 || key_code == 187 && event.shiftKey == false) {
    input.innerHTML = eval(equation);
    //reset decimal added flag
    decimalAdded = false;
  }
  if (key_code == 8 || key_code == 46) {
    input.innerHTML = '';
    decimalAdded = false;
  }
}
