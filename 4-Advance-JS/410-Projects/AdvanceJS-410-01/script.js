let input = document.getElementById('input');
let button = document.getElementById('button');


input.addEventListener('keyup', (e) => {
    let city = e.target.value;
    if(e.keyCode == 13)
    getWeather(city)
})

button.addEventListener('click', () => {
    let city = input.value;
    getWeather(city)
})

function getWeather(city) {
    input.value = ""
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`)
    .then(res => res.json())
    .then((data) => {

        let parent = document.getElementById('content');

        parent.innerHTML = `<div class="weather_box">
        <h2> Weather of <span id="country_name"> ${data.name} </span> </h2>
        <div class="box">
            <p> Sky Conditions:<span> ${data.weather[0].description}</span> </p>
            <p> Temprature:<span> ${Math.round(data.main.temp)}&deg C </span></p>
            <p> Wind speed:<span> ${data.wind.speed} km/h </span> </p>
        </div>
    </div>`
    })
}