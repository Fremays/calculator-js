let operation

function calculation() {
    let result
    const number1 = Number((document.getElementById("number1").value))
    const number2 = Number((document.getElementById("number2").value))
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