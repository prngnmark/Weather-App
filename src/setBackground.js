export default function setBackground(weather) {
    switch (weather) {
        case 'Sunny':
        case 'Clear':
            return "'./images/anime-sunnyday.gif'";
        case 'Light rain':
        case 'Patchy rain possible':
        case 'Patchy freezing drizzle possible':
        case 'Patchy light drizzle':
        case 'Light drizzle':
        case 'Freezing drizzle':
        case 'Patchy light rain':
        case 'Moderate rain at times':
        case 'Moderate rain':
        case 'Heavy rain at times':
        case 'Heavy rain':
        case 'Light freezing rain':
        case 'Moderate or heavy freezing rain':
        case 'Light rain shower':
        case 'Moderate or heavy rain shower':
        case 'Torrential rain shower':
        case 'Patchy light rain with thunder':
        case 'Moderate or heavy rain with thunder':
            return "'./images/anime-rain.gif'"
        case 'Patchy snow possible':
        case 'Blowing snow':
        case 'Blizzard':
        case 'Patchy light snow':
        case 'Light snow':
        case 'Patchy moderate snow':
        case 'Moderate snow':
        case 'Patchy heavy snow':
        case 'Heavy snow':
        case 'Light snow showers':
        case 'Moderate or heavy snow showers':
        case 'Patchy light snow with thunder':
        case 'Moderate or heavy snow with thunder':
            return "'./images/anime-snow.gif'"
        default:
            return "'./images/anime-default.gif'"
    }
}