let numberList = document.getElementById('numbers');

for (let number = 0; number <= 100; number++) {
    let li = document.createElement('li');
    li.textContent = number;
    if (number % 15 == 0 && number != 0) {
        li.textContent = '...';
    }
    numberList.appendChild(li);
}

