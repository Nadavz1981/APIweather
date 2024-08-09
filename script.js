
const apiKey = "851e83cf4e05e2f4171c44c052680a96";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCondition = document.querySelector(".weather-condition");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{
        const data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "img/clouds.webp";
        weatherCondition.innerHTML = "מעונן";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "img/clear.webp";
        weatherCondition.innerHTML = "שימשי";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "img/rain.webp";
        weatherCondition.innerHTML = "קר וגשום";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "img/drizzle.webp";
        weatherCondition.innerHTML = "גשם קל";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "img/mist.webp";
        weatherCondition.innerHTML = "ערפל כבד";
    }  

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
