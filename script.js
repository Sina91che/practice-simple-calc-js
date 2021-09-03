let numberOne = document.getElementById('number1'),
    numberTwo = document.getElementById('number2'),
    plusButton = document.getElementById('plus'),
    minusButton = document.getElementById('minus'),
    multiplyButton = document.getElementById('multiply'),
    devideButton = document.getElementById('devide'),
    clearButton = document.getElementById('cleaning-but'),
    result = document.getElementById('result-text');

clearButton.addEventListener('click', function () {
    result.innerText = "";
    numberOne.value = "";
    numberTwo.value = "";
})

plusButton.addEventListener('click', function () {
    let numOne = +(numberOne.value),
        numTwo = +(numberTwo.value),
        sumResult = numOne + numTwo;

    result.innerText = sumResult;
})

minusButton.addEventListener("click", function () {
    result.innerText = +(numberOne.value) - +(numberTwo.value);
    })

devideButton.addEventListener("click", function () {
    result.innerText = +(numberOne.value) / +(numberTwo.value);
})

multiplyButton.addEventListener("click", function () {
    result.innerText = +(numberOne.value) * +(numberTwo.value);
})
