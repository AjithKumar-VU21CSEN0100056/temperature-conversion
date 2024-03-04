function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    let result;
  
    if (isNaN(temperatureInput)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    switch (unit) {
      case 'celsius':
        result = {
          celsius: temperatureInput,
          fahrenheit: (temperatureInput * 9/5) + 32,
          kelvin: temperatureInput + 273.15
        };
        break;
      case 'fahrenheit':
        result = {
          celsius: (temperatureInput - 32) * 5/9,
          fahrenheit: temperatureInput,
          kelvin: (temperatureInput - 32) * 5/9 + 273.15
        };
        break;
      case 'kelvin':
        result = {
          celsius: temperatureInput - 273.15,
          fahrenheit: (temperatureInput - 273.15) * 9/5 + 32,
          kelvin: temperatureInput
        };
        break;
      default:
        alert("Please select a valid unit.");
        return;
    }
  
    document.getElementById('result').innerHTML = `
      <p>${temperatureInput} ${unit} is:</p>
      <p>${result.celsius.toFixed(2)} Celsius</p>
      <p>${result.fahrenheit.toFixed(2)} Fahrenheit</p>
      <p>${result.kelvin.toFixed(2)} Kelvin</p>
    `;
  }
  