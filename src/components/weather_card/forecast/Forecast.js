import Card from './Card';

function Forecast(props) {

    return (
        <div className='forecast'>
            {props.forecast.map((forecast, i) => <Card data={forecast} key={i} />)}
        </div>
    );
}

export default Forecast;