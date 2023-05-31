
function WeatherImg(props) {
    console.log(props);

    return (
        <div className="weather">
            <img className="weather-img" src={props.condition.currentConditionIconUrl} alt="weather_img" />
            <p className="weather-status">{props.condition.currentCondition}</p>
        </div>
    );
}

export default WeatherImg;