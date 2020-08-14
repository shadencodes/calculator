

export default function operate(number1, number2, operation) {

    var firstNumber = number1 ? number1 : "0";
    var secondNumber = number2 ? number2 : (operation === "÷" || operation === 'x' ? "1": "0");

    switch(operation) {
        case "+": return (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
        case "-": return (parseFloat(firstNumber) - parseFloat(secondNumber)).toString();
        case "x": return (parseFloat(firstNumber) * parseFloat(secondNumber)).toString();
        case "÷":{
            if (secondNumber == "0"){
                alert("error: dividing by 0");
                return "0";
            }
            return (parseFloat(firstNumber) / parseFloat(secondNumber)).toString();
        }
        default:{
            alert("Unknown Opertaion");
            return "0";
        }
    }
}
