const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      expression = '';
      display.value = '';
    } else if (button.id === 'delete') {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else if (button.id === 'equals') {
      try {
        const result = eval(expression);
        display.value = result;
        expression = result.toString();
      } catch (error) {
        display.value = 'Error';
        expression = '';
      }
    } else {
      expression += button.getAttribute('value');
      display.value = expression;
    }
  });
});