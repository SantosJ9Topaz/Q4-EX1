window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {

    let height = parseInt(document
        .querySelector("#height").value);

    let weight = parseInt(document
        .querySelector("#weight").value);

    let result = document.querySelector("#result");

    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";

    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";
    else {