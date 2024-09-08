
const buttons = document.querySelectorAll('button');
const inputBox = document.getElementById('inputbox');
function updateInput(value) {
  inputBox.value += value;
}

function calculate() {
  try {
    inputBox.value = eval(inputBox.value);
  } catch (error) {
    inputBox.value = 'Error';
  }
}

function clearInput() {
  inputBox.value = '';
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonValue = button.innerText;
    
    switch (buttonValue) {
      case '=':
        calculate();
        break;
      case 'AC':
        clearInput();
        break;
      case 'Del':
        inputBox.value = inputBox.value.slice(0, -1);
        break;
      default:
        updateInput(buttonValue);
        break;
    }
  });
});
