const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8b021a348cmsh98e4f53e9a89a65p1e0844jsn40e0dbefabcb',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{
    
    cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= '+ city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees  
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)


})

getWeather("Amritsar")


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Washington,DC,USA', options)
	.then(response => response.json())
    .then((response) => {
        console.log(response)
        // cloud_pctusa.innerHTML = response.cloud_pct
        tempusa.innerHTML = response.temp
        // temp2.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        humidityusa.innerHTML = response.humidity
        // 
        // humidity2.innerHTML = response.humidity
        min_tempusa.innerHTML = response.min_temp
        max_tempusa.innerHTML = response.max_temp
        wind_speedusa.innerHTML = response.wind_speed
        // wind_speed2.innerHTML = response.wind_speed
        wind_degreesusa.innerHTML = response.wind_degrees  
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai,Maharashtra', options)
	.then(response => response.json())
    .then((response) => {
        console.log(response)
        // cloud_pctusa.innerHTML = response.cloud_pct
        tempind.innerHTML = response.temp
        // temp2.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        humidityind.innerHTML = response.humidity
        // 
        // humidity2.innerHTML = response.humidity
        min_tempind.innerHTML = response.min_temp
        max_tempind.innerHTML = response.max_temp
        wind_speedind.innerHTML = response.wind_speed
        // wind_speed2.innerHTML = response.wind_speed
        wind_degreesind.innerHTML = response.wind_degrees  
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));   
    
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto,ON,Canada', options)
	.then(response => response.json())
    .then((response) => {
        console.log(response)
        // cloud_pctusa.innerHTML = response.cloud_pct
        tempcad.innerHTML = response.temp
        // temp2.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        humiditycad.innerHTML = response.humidity
        // 
        // humidity2.innerHTML = response.humidity
        min_tempcad.innerHTML = response.min_temp
        max_tempcad.innerHTML = response.max_temp
        wind_speedcad.innerHTML = response.wind_speed
        // wind_speed2.innerHTML = response.wind_speed
        wind_degreescad.innerHTML = response.wind_degrees  
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));      



fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seoul,South_Korea', options)
	.then(response => response.json())
    .then((response) => {
        console.log(response)
        tempkr.innerHTML = response.temp
        humiditykr.innerHTML = response.humidity
        min_tempkr.innerHTML = response.min_temp
        max_tempkr.innerHTML = response.max_temp
        wind_speedkr.innerHTML = response.wind_speed
        wind_degreeskr.innerHTML = response.wind_degrees  
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
        // cloud_pctusa.innerHTML = response.cloud_pct
        // humidity2.innerHTML = response.humidity
        // temp2.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        // wind_speed2.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));    


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London,UK', options)
	.then(response => response.json())
    .then((response) => {
        console.log(response)
        tempuk.innerHTML = response.temp
        humidityuk.innerHTML = response.humidity
        min_tempuk.innerHTML = response.min_temp
        max_tempuk.innerHTML = response.max_temp
        wind_speeduk.innerHTML = response.wind_speed
        wind_degreesuk.innerHTML = response.wind_degrees  
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
        // cloud_pctusa.innerHTML = response.cloud_pct
        // humidity2.innerHTML = response.humidity
        // temp2.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        // wind_speed2.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));              

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Cairo,Egypt', options)
	.then(response => response.json())
    .then((response) => {
        console.log(response)
        tempeg.innerHTML = response.temp
        humidityeg.innerHTML = response.humidity
        min_tempeg.innerHTML = response.min_temp
        max_tempeg.innerHTML = response.max_temp
        wind_speedeg.innerHTML = response.wind_speed
        wind_degreeseg.innerHTML = response.wind_degrees  
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset
        // cloud_pctusa.innerHTML = response.cloud_pct
        // humidity2.innerHTML = response.humidity
        // temp2.innerHTML = response.temp
        // feels_like.innerHTML = response.feels_like
        // wind_speed2.innerHTML = response.wind_speed
    })
    .catch(err => console.error(err));          

