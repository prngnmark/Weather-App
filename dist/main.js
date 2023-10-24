(()=>{"use strict";async function e(e,t){const a=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=4ecdc1101cec4e0f8f251235231509&days=3&q=${e}`,{mode:"cors"}),n=await a.json();return{name:n.location.name,weather:n.current.condition.text,celcius:n.current.temp_c,minCelcius:n.forecast.forecastday[t].day.mintemp_c,maxCelcius:n.forecast.forecastday[t].day.maxtemp_c,fahrenheit:n.current.temp_f,minFahrenheit:n.forecast.forecastday[t].day.mintemp_f,maxFahrenheit:n.forecast.forecastday[t].day.maxtemp_f,icon:n.forecast.forecastday[t].day.condition.icon,rainChance:n.forecast.forecastday[t].day.daily_chance_of_rain,date:n.forecast.forecastday[t].date}}function t(){const e=document.createElement("div");e.classList="search";const t=document.createElement("form"),n=document.createElement("input");return n.type="text",n.placeholder="Search",n.classList="searchbar",n.onkeydown=function(e){"Enter"==e.key&&(content.innerHTML="",a(n.value))},t.appendChild(n),e.appendChild(t),e}async function a(a){const n=document.querySelector("#content");n.appendChild(t()),n.appendChild(await async function(t){const a=document.createElement("div");a.classList="current";const n=await e(t,0);document.body.style.backgroundImage=`url(${function(e){switch(e){case"Sunny":case"Clear":return"'../src/anime-sunnyday.gif'";case"Light rain":case"Patchy rain possible":case"Patchy freezing drizzle possible":case"Patchy light drizzle":case"Light drizzle":case"Freezing drizzle":case"Patchy light rain":case"Moderate rain at times":case"Moderate rain":case"Heavy rain at times":case"Heavy rain":case"Light freezing rain":case"Moderate or heavy freezing rain":case"Light rain shower":case"Moderate or heavy rain shower":case"Torrential rain shower":case"Patchy light rain with thunder":case"Moderate or heavy rain with thunder":return"'../src/anime-rain.gif'";case"Patchy snow possible":case"Blowing snow":case"Blizzard":case"Patchy light snow":case"Light snow":case"Patchy moderate snow":case"Moderate snow":case"Patchy heavy snow":case"Heavy snow":case"Light snow showers":case"Moderate or heavy snow showers":case"Patchy light snow with thunder":case"Moderate or heavy snow with thunder":return"'../src/anime-snow.gif'";default:return"'../src/anime-default.gif'"}}(n.weather)})`;const c=document.createElement("p");c.classList="locationName",c.textContent=n.name;const s=document.createElement("p");s.classList="currWeather",s.textContent=n.weather;const r=document.createElement("p");r.classList="currTemp",r.textContent=`${Math.round(n.celcius)}°`;const i=document.createElement("p");i.classList="hlTemp",i.textContent=`H:${Math.round(n.maxCelcius)}°  L:${Math.round(n.minCelcius)}°`;const o=document.createElement("p");return o.classList="chanceOfRain",o.textContent=`Chance of rain: ${n.rainChance}%`,a.appendChild(c),a.appendChild(r),a.appendChild(s),a.appendChild(i),a.appendChild(o),a}(a)),n.appendChild(await async function(t){const a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=document.createElement("div");n.classList="week";for(let c=0;c<3;c++){const s=await e(t,c),r=document.createElement("div");r.classList="dayDiv";const i=document.createElement("p");i.textContent=0==c?"Today":a[new Date(s.date).getDay()];const o=document.createElement("img"),d=s.icon.slice(34);o.src=`../../src/weather/64x64/${d}`;const h=document.createElement("p");h.textContent=`H:${Math.round(s.maxCelcius)}°  L:${Math.round(s.minCelcius)}°`;const l=document.createElement("p");l.textContent=`Chance of rain: ${s.rainChance}%`,r.appendChild(i),r.appendChild(o),r.appendChild(h),r.appendChild(l),n.append(r)}return n}(a))}a("dededo")})();