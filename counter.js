function plusNum(numPosition) {
    if (numPosition.id == "first") {
        var number = document.getElementById("first");
    } else {
        var number = document.getElementById("second");
    }
    number.innerHTML = parseInt(number.innerHTML) + 1;
    updateSumNumbers();
}

function minusNum(numPosition) {
    if (numPosition.id == "first") {
        var number = document.getElementById("first");
    } else {
        var number = document.getElementById("second");
    }
    number.innerHTML = parseInt(number.innerHTML) - 1;
    updateSumNumbers();
}

function updateSumNumbers() {
    var number1 = document.getElementById("first");
    var number2 = document.getElementById("second");
    var result = document.getElementById("result");

    result.innerHTML = parseInt(number1.innerHTML) + parseInt(number2.innerHTML);
}