let firstNumber = "";
let secondNumber = "";
let operator = "";

const displayDigit = number => {
  const display = document.getElementById("display-input");
  if (operator === "addition" || operator === "substraction") {
    secondNumber = secondNumber + number;
    display.value = secondNumber;
  } else {
    firstNumber += number;
    display.value = firstNumber;
  }
};
const digit0 = () => {
  const num = document.getElementById("zero").innerText;
  displayDigit(num);
};

const digit1 = () => {
  const num = document.getElementById("one").innerText;
  displayDigit(num);
};

const digit2 = () => {
  const num = document.getElementById("two").innerText;
  displayDigit(num);
};

const digit3 = () => {
  const num = document.getElementById("three").innerText;
  displayDigit(num);
};

const digit4 = () => {
  const num = document.getElementById("four").innerText;
  displayDigit(num);
};

const digit5 = () => {
  const num = document.getElementById("five").innerText;
  displayDigit(num);
};
const digit6 = () => {
  const num = document.getElementById("six").innerText;
  displayDigit(num);
};
const digit7 = () => {
  const num = document.getElementById("seven").innerText;
  displayDigit(num);
};

const digit8 = () => {
  const num = document.getElementById("eight").innerText;
  displayDigit(num);
};

const digit9 = () => {
  const num = document.getElementById("nine").innerText;
  displayDigit(num);
};

const clearAll = () => {
  const display = document.getElementById("display-input");
  firstDigit = "";
  secondDigit = "";
  display.value = 0;
  operator = "";
};

const addition = () => {
  const display = document.getElementById("display-input");
  operator = "addition";
};

const substraction = () => {
  const display = document.getElementById("display-input");
  display.value = 0;
  operator = "substraction";
};

const multiplication = () => {
  const display = document.getElementById("display-input");
  display.value = 0;
  operator = "multiple";
};

const division = () => {
  const display = document.getElementById("display-input");
  display.value = 0;
  operator = "division";
};

const equal = () => {
  let result;
  switch (operator) {
    case "addition":
      result = parseInt(firstNumber) + parseInt(secondNumber);
      break;
    case "substraction":
      result = parseInt(firstNumber) - parseInt(secondNumber);
      break;
    case "multiplication":
      result = parseInt(firstNumber) * parseInt(secondNumber);
      break;
    case "division":
      result = parseInt(firstNumber) / parseInt(secondNumber);
      break;
    default:
      break;
  }
  const display = document.getElementById("display-input");
  display.value = result;
};
