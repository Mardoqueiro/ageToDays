function convertButtonClicked() {
    const ageInput = document.getElementById('ageInput');
    const resultElement = document.getElementById('result');
    const age = parseInt(ageInput.value);
    if (isNaN(age) || age < 0) {
        resultElement.textContent = 'Please enter a valid age';
    } else {
        const days = age * 365;
        resultElement.textContent = days + ' days';
    }
}