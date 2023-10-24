import fetchData from "./fetchData"
import setBackground from "./setBackground"

function createSearchSpace() {
    const search = document.createElement('div')
    search.classList = 'search'
    const form = document.createElement('form')
    const searchbar = document.createElement('input')
    searchbar.type = 'text'
    searchbar.placeholder = 'Search'
    searchbar.classList = 'searchbar'
    searchbar.onkeydown = function (e) {
        if (e.key == 'Enter') {
            content.innerHTML = ''
            let newLocation = searchbar.value
            initializeWebsite(newLocation)
        }
    };
    form.appendChild(searchbar)
    search.appendChild(form)

    return search
}

async function createWeatherSpace(location) {
    const currDiv = document.createElement('div')
    currDiv.classList = 'current'
    const data = await fetchData(location, 0)
    document.body.style.backgroundImage = `url(${setBackground(data.weather)})`

    const locationName = document.createElement('p')
    locationName.classList = 'locationName'
    locationName.textContent = data.name
    const currWeather = document.createElement('p')
    currWeather.classList = 'currWeather'
    currWeather.textContent = data.weather
    const currTemp = document.createElement('p')
    currTemp.classList = 'currTemp'
    currTemp.textContent = `${Math.round(data.celcius)}°`
    const hlTemp = document.createElement('p')
    hlTemp.classList = 'hlTemp'
    hlTemp.textContent = `H:${Math.round(data.maxCelcius)}°  L:${Math.round(data.minCelcius)}°`
    const chanceOfRain = document.createElement('p')
    chanceOfRain.classList = 'chanceOfRain'
    chanceOfRain.textContent = `Chance of rain: ${data.rainChance}%`

    currDiv.appendChild(locationName)
    currDiv.appendChild(currTemp)
    currDiv.appendChild(currWeather)
    currDiv.appendChild(hlTemp)
    currDiv.appendChild(chanceOfRain)

    return currDiv
}

async function createWeeklySpace(location) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const weekDiv = document.createElement('div')
    weekDiv.classList = 'week'
    for (let i = 0; i < 3; i++) {
        const data = await fetchData(location, i)
        const dayDiv = document.createElement('div')
        dayDiv.classList = 'dayDiv'
        const day = document.createElement('p')
        if (i == 0) {
            day.textContent = 'Today'
        } else {
            day.textContent = days[new Date(data.date).getDay()]
        }
        const img = document.createElement('img')
        const imgSource = data.icon.slice(34)
        img.src = `../../src/weather/64x64/${imgSource}`
        const temp = document.createElement('p')
        temp.textContent = `H:${Math.round(data.maxCelcius)}°  L:${Math.round(data.minCelcius)}°`
        const chanceOfRain = document.createElement('p')
        chanceOfRain.textContent = `Chance of rain: ${data.rainChance}%`
        dayDiv.appendChild(day)
        dayDiv.appendChild(img)
        dayDiv.appendChild(temp)
        dayDiv.appendChild(chanceOfRain)
        weekDiv.append(dayDiv)
    }
    return weekDiv
}

export default async function initializeWebsite(location) {
    const content = document.querySelector('#content')
    content.appendChild(createSearchSpace())
    content.appendChild(await createWeatherSpace(location))
    content.appendChild(await createWeeklySpace(location))
}
