let operation

function calculation() {
    let result
    const number1 = Number((document.getElementById("number1").value)) // Получение первого числа
    const number2 = Number((document.getElementById("number2").value)) // Получение второго числа
    switch (operation) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "*":
            result = number1 * number2;
            break;
    }
    if (result != undefined) {
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Не введены все данные!"
    }
}