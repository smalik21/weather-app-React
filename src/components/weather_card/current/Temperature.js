import Label from './Label';
import Factor from './Factor';

function Temperature(props) {
    return (
        <div className="temperature">
            <p className="main-temp">{props.temp.currentTemperature}ºC</p>

            <Label name="label-min" label="MIN TEMP" />
            <Label name="label-max" label="MAX TEMP" />
            <Factor name="min" info={props.temp.currentTemperatureMin} unit="ºC" />
            <Factor name="max" info={props.temp.currentTemperatureMax} unit="ºC" />

            <Label name="label-humid" label="HUMIDITY" />
            <Label name="label-wind" label="WIND" />
            <Factor name="humid" info={props.temp.currentHumidity} unit="%" />
            <Factor name="wind" info={props.temp.currentWind} unit="mph" />
        </div>
    );
}

export default Temperature;