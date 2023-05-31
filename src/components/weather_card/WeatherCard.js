import Current from './current/Current';
import Forecast from './forecast/Forecast';

function WeatherCard(props) {

    return (
        <div className='WeatherCard'>
            <Current 
                current={props.current}
                condition={props.condition}
                temp={props.temp}
            />
            <Forecast 
                forecast={props.forecast}
            />    
        </div>
        
    );
}

export default WeatherCard;