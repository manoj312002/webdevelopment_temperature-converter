const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const resultDiv = document.getElementById('result');
const resetButton = document.getElementById('resetButton');

function convertTemperature() {
  const temperatureValue = parseFloat(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;
  
  let result;
  
  if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
    result = (temperatureValue * 9/5) + 32;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
    result = (temperatureValue - 32) * 5/9;
  } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
    result = temperatureValue + 273.15;
  } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
    result = temperatureValue - 273.15;
  } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
    result = (temperatureValue + 459.67) * 5/9;
  } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
    result = (temperatureValue * 9/5) - 459.67;
  } else {
    result = temperatureValue;
  }
  
  if (!isNaN(result)) {
    resultDiv.innerText = `Result: ${result.toFixed(2)} ${toUnit.toUpperCase()}`;
  } else {
    resultDiv.innerText = 'Invalid input';
  }
}

resetButton.addEventListener('click', () => {
  temperatureInput.value = '';
  resultDiv.innerText = '';
});

temperatureInput.addEventListener('input', convertTemperature);
fromUnitSelect.addEventListener('change', convertTemperature);
toUnitSelect.addEventListener('change', convertTemperature);