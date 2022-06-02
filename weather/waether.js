let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let rightdate = document.querySelector("#current-date");
let hours = now.getHours();
let minutes = now.getMinutes();
rightdate.innerHTML = `${day}, ${hours}:${minutes}`;
//
//
function searchCity(event) {
  event.preventDefault();
  let cityResult = document.querySelector("#search-city");
  let h6 = document.querySelector("h6");
  h6.innerHTML = `${cityResult.value}`;

  let apikey = "252dddcfb9a3bf1e6e04c55d681319cc";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityResult.value}&appid=${apikey}&units=metric`;
  axios.get(`${apiUrl}`).then(displaytemp);
}

let myCitySearch = document.querySelector("#main-form");
myCitySearch.addEventListener("submit", searchCity);
//
//
function celDegFahconversion(event) {
  event.preventDefault();
  temperaturereading.innerHTML = "66";
}

let temperaturereading = document.querySelector("#temperature");
let tempDegFah = document.querySelector("#deg-fah");
tempDegFah.addEventListener("click", celDegFahconversion);

function fahDegCelconversion(event) {
  event.preventDefault();
  temperaturereading.innerHTML = "19";
}

let tempDegCel = document.querySelector("#deg-cels");
tempDegCel.addEventListener("click", fahDegCelconversion);
//
//
function displaytemp(response) {
  console.log(response.data.main.temp);
  let cityTemp = Math.round(response.data.main.temp);
  let myCityTemp = document.querySelector("#temperature");
  myCityTemp.innerHTML = `${cityTemp}`;
  console.log(cityTemp);
}
function showGeoTemp(response) {
  console.log(response);
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("h6").innerHTML = response.data.name;
}

function showPosition(position) {
  console.log(position);

  let apikey = "252dddcfb9a3bf1e6e04c55d681319cc";
  lat = position.coords.lat;
  lon = position.coords.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apikey}&units=metric`;
  axios.get(`${apiUrl}`).then(showGeoTemp);
}

function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#currentLocation");
button.addEventListener("click", getPosition);
