const temperature = document.querySelector(".celcius"),
cityName = document.querySelector(".city"),
humidity = document.querySelector(".humidityP"),
wind = document.querySelector(".windS");

const inputVal = document.getElementById("cityname"),
inputValBtn = document.getElementById("btn"),
icon = document.querySelector(".icon"),
error = document.querySelector(".error");

const loader = document.querySelector(".preloader");

async function getWeather(location) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a2f4fa93f6f82b18f971103c00012c60&units=metric`)
    
    if (response.status == 404) {
        error.style.color = "rgb(245, 66, 66)";
        setInterval(() => {
            error.style.color = "transparent";
        }, 3000);

    }

    let data = await response.json();
    temperature.innerHTML = Math.round(data.main.temp) + " °c";
    cityName.innerHTML = data.name;
    humidity.innerHTML = Math.round(data.main.humidity) + " %";
    wind.innerHTML = Math.round(data.wind.speed) + " km/h";

    if (data.weather[0].main == "Rain") {
        icon.src = "/images/rainy.png";
    } else if (data.weather[0].main = "Clouds") {
        icon.src = "/images/cloudy.png";
    } else if(data.weather[0].main == "Clear") {
        icon.src = ""
    } else if (data.weather[0].main == "Mist") {
        icon.src = "/images/mist.png";
    } else if (data.weather[0].main == "Drizzle") {
        icon.src = "/images/drizzle.png";
    } else if (data.weather[0].main == "Sun") {
        icon.src = "/images/sunny.png";
    }
}

inputValBtn.addEventListener("click", () => {
    getWeather(inputVal.value);

    inputVal.value = "";
})

setInterval(() => {
    loader.classList.add("preloader--hidden");
}, 3000);
// window.addEventListener("load", () => {

// })
