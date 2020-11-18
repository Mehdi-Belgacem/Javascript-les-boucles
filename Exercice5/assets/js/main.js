let firstNumber = 2;
let secondNumber = 2;
let ul = document.getElementById('numberResult');
let result = firstNumber * secondNumber;

while (result <= 250) {
    secondNumber = result;
    result = firstNumber * secondNumber;
    let li = document.createElement('li');
    li.textContent = result;
    ul.appendChild(li);
}