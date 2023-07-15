const date = new Date();
const dayTime = document.getElementById("dayTime");
const city = document.getElementById("cityName");

const apiKey = "6b6caa8b7f21a4979db486ad7733981d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = weekday[date.getDay()];
let hours = date.getHours().toString().padStart(2, "0");
let minutes = date.getMinutes().toString().padStart(2, "0");
dayTime.innerHTML = day + ", " + hours + ":" + minutes;

async function checkweather() {
  let cityName = city.value.toString().toLowerCase();
  const response = await fetch(apiUrl + cityName + '&appid=' + apiKey);
  let data = await response.json();

  city.value = data.name + ", " + data.sys.country;
  document.getElementById("description").innerHTML = data.weather[0].main;
  document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.getElementById("feelsLike").innerHTML = "Feels Like: " + Math.round(data.main.feels_like) + "°C";
  document.getElementById("maxTmp").innerHTML = " " + Math.round(data.main.temp_max) + "°C";
  document.getElementById("minTmp").innerHTML = " " + Math.round(data.main.temp_min) + "°C";
  document.getElementById("weathericon").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

  // console.log(new Date(data.dt * 1000 - (data.timezone * 1000)));
  // console.log(new Date(data.dt * 1000 + (data.timezone * 1000)));
}