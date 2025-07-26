    function calculateWindChill(temp, wind) {
        if (temp > 10 || wind < 4.8) { return "N/A"; }
        const windChill = 13.12 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
        return windChill.toFixed(1);
}
    const temperature = 10
const windSpeed = 5
    
document.getElementById("temp").textContent = temperature.toFixed(1);
document.getElementById("wind").textContent = windSpeed.toFixed(1);
document.getElementById("windChill").textContent = calculateWindChill(temperature, windSpeed);

temperature.innerHTML = `<span>${temperature.toFixed(1)}</span>`;
windSpeed.innerHTML = `<span>${windSpeed.toFixed(1)}</span>`;
windChill.innerHTML = `<span>${calculateWindChill(temperature, windSpeed)}</span>`;