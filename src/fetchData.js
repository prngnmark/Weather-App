export default async function fetchData(location, i) {
    const forecastResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4ecdc1101cec4e0f8f251235231509&days=3&q=${location}`, { mode: 'cors' })
    const locationData = await forecastResponse.json();
    const data = {
        name: locationData.location.name,
        weather: locationData.current.condition.text,
        celcius: locationData.current.temp_c,
        minCelcius: locationData.forecast.forecastday[i].day.mintemp_c,
        maxCelcius: locationData.forecast.forecastday[i].day.maxtemp_c,
        fahrenheit: locationData.current.temp_f,
        minFahrenheit: locationData.forecast.forecastday[i].day.mintemp_f,
        maxFahrenheit: locationData.forecast.forecastday[i].day.maxtemp_f,
        icon: locationData.forecast.forecastday[i].day.condition.icon,
        rainChance: locationData.forecast.forecastday[i].day.daily_chance_of_rain,
        date: locationData.forecast.forecastday[i].date
    }
    return data
}
