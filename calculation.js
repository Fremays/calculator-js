let operation

function func() {
    let result
    const number1 = Number((document.getElementById("number1").values))
    const number2 = Number((document.getElementById("number2").values))
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
}