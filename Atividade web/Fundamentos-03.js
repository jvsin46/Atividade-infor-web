function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(`${25}°C é igual a ${celsiusParaFahrenheit(25)}°F`);
console.log(`${77}°F é igual a ${fahrenheitParaCelsius(77)}°C`);