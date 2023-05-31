import '../App.css';
import Search from './search_bar/Search';
import WeatherCard from './weather_card/WeatherCard';
import axios from "axios";
import _ from "lodash";
import { useState, useEffect } from "react";

function App() {

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const apiKey = process.env.REACT_APP_API_KEY;
  
  useEffect(() => {
    getLocation();
  }, []);

  function getLocation() {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    function success(position) {
      const { latitude, longitude } = position.coords;      
      getData(latitude + "," + longitude); 
    }
    function error(error) {
      console.error('Error getting geolocation:', error);
    }
  }
  
  const [current, setCurrent] = useState({
    "currentDate": "",
    "currentTime": "",
    "currentLocation": "",
    "currentRegion": "",
    "currentCountry": "",
  });

  const [condition, setCondition] = useState({
    "currentCondition": "",
    "currentConditionIconUrl": ""
  });

  const [temp, setTemp] = useState({
    "currentTemperature": "",
    "currentTemperatureMax": "",
    "currentTemperatureMin": "",
    "currentHumidity": "",
    "currentWind": ""
  });

  const [forecast, setForecast] = useState([
    {
      "temp": "",
      "condition": "",
      "icon": "",
      "day": ""
    },
    {
      "temp": "",
      "condition": "",
      "icon": "",
      "day": ""
    },
    {
      "temp": "",
      "condition": "",
      "icon": "",
      "day": ""
    },
    {
      "temp": "",
      "condition": "",
      "icon": "",
      "day": ""
    },
    {
      "temp": "",
      "condition": "",
      "icon": "",
      "day": ""
    }
  ]);

  function format(location) {
    getData(_.kebabCase(location))
  }

  function getData(location) {
    console.log("Key: " + apiKey);
    const url = "http://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + location + "&days=5&aqi=no&alerts=no"

    axios.get(url, { crossdomain: true }).then(response => {

        if (response.status === 200) {

            let location = response.data.location;
            let currentWeather = response.data.current;
            let forecastWeather = response.data.forecast.forecastday;

            let [currentDate, currentTime] = location.localtime.split(" ");
            let currentLocation = location.name;
            let currentRegion = location.region;
            let currentCountry = location.country;

            // console.log(currentDate)
            // console.log(currentTime)
            // console.log(currentLocation)
            // console.log(currentRegion)
            // console.log(currentCountry)

            let currentCondition = currentWeather.condition.text;
            let currentConditionIconUrl = currentWeather.condition.icon;

            let currentTemperature = currentWeather.temp_c;
            let currentTemperatureMax = forecastWeather[0].day.maxtemp_c;
            let currentTemperatureMin = forecastWeather[0].day.mintemp_c;

            let currentHumidity = currentWeather.humidity;
            let currentWind = currentWeather.wind_mph;

            let forecast = []

            for (let i = 0; i < forecastWeather.length; i++) {

              let day = {}

                day["temp"] = forecastWeather[i].day.avgtemp_c;
                day["condition"] = forecastWeather[i].day.condition.text;
                day["icon"] = forecastWeather[i].day.condition.icon;

                let d = new Date(forecastWeather[i].date);
                day["day"] = weekday[d.getDay()];

                forecast.push(day);
            }

            // console.log(forecast);

            let data = {
                "current": {
                    "currentDate": currentDate,
                    "currentTime": currentTime,
                    "currentLocation": currentLocation,
                    "currentRegion": currentRegion,
                    "currentCountry": currentCountry
                },
                "condition": {
                    "currentCondition": currentCondition,
                    "currentConditionIconUrl": currentConditionIconUrl
                },
                "temperature": {
                    "currentTemperature": currentTemperature,
                    "currentTemperatureMax": currentTemperatureMax,
                    "currentTemperatureMin": currentTemperatureMin,
                    "currentHumidity": currentHumidity,
                    "currentWind": currentWind
                },
                "forecast": forecast
            }
            setCurrent(data.current);
            setCondition(data.condition);
            setTemp(data.temperature);
            setForecast(data.forecast);
          }

          else {
            console.log("Connection Failed");
            getLocation();
          }
    });
  }

  return (
    <div className='app'>
      <Search location={format} />
      <WeatherCard
        current={current}
        condition={condition}
        temp={temp}
        forecast={forecast}
      />
    </div>
  );
}

export default App;
