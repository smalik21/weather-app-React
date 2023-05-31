import TimeAndPlace from './TimeAndPlace';
import WeatherImg from './WeatherImg';
import Temperature from './Temperature';

function Current(props) {
    return (
        <div className="current-card">
            <TimeAndPlace current={props.current} />
            <WeatherImg condition={props.condition} />
            <Temperature temp={props.temp} />
        </div>
        
    );
}

export default Current;