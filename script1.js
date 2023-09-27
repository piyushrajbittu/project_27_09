function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    const bmi = weight / (height * height);
    const resultElement = document.getElementById('result');

    if (isNaN(bmi)) {
        resultElement.textContent = "Please enter valid values for weight and height.";
    } else {
        resultElement.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
    }
}