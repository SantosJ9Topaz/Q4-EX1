function calculate(operation) {
    const val1 = parseFloat(document.getElementById("val1").value);
    const val2 = parseFloat(document.getElementById("val2").value);
    let result = '';

    if (isNaN(val1) || isNaN(val2)) {
        result = "Enter valid numbers";
    } else {
        switch (operation) {
            case "add":
                result = val1 + val2;
                break;
            case "subtract":
                result = val1 - val2;
                break;
            case "multiply":
                result = val1 * val2;
                break;
            case "divide":
                result = val2 !== 0 ? (val1 / val2).toFixed(2) : "Cannot divide by zero";
                break;
        }
    }

    document.getElementById("result").value = result;
}

function refresh() {
    document.getElementById("val1").value = "";
    document.getElementById("val2").value = "";
    document.getElementById("result").value = "";
}