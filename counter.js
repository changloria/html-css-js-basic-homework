function plusNum(numPosition) {
    var number = document.getElementById(numPosition);
    number.innerHTML = parseInt(number.innerHTML) + 1;
    updateSumNumbers();
}

function minusNum(numPosition) {
    var number = document.getElementById(numPosition);
    number.innerHTML = parseInt(number.innerHTML) - 1;
    updateSumNumbers();
}

function updateSumNumbers() {
    var number1 = document.getElementById("first");
    var number2 = document.getElementById("second");
    var result = document.getElementById("result");

    result.innerHTML = parseInt(number1.innerHTML) + parseInt(number2.innerHTML);
}