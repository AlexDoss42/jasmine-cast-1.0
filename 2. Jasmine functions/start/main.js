function calculate(inputValue) {
  const expression = /\+|\-|\*|\//;
  const numbers = inputValue.split(expression);

  const numA = parseInt(numbers[0]);
  const numB = parseInt(numbers[1]);

  const operation = inputValue.match(expression);

  if (Number.isNaN(numA) || Number.isNaN(numB) || operation === null) {
    updateResult('Operation Unrecognized');
    return;
  }

  const calculator = new Calculator();
  calculator.add(numA);

  let result;
  switch(operation[0]) {
    case '+':
      result = calculator.add(numB);
      break;
    case '-':
      result = calculator.subtract(numB);
      break;
    case '*':
      result = calculator.multiply(numB);
      break;
    case '/':
      result = calculator.divide(numB);
      break;
  }

  updateResult(result);
}

function updateResult(result) {
  const element = document.getElementById('result');

  if (element) {
    element.innerText = result;
  }
}