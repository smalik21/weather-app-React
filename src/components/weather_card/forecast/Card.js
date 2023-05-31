import Day from './Day';
import Widget from './Widget';
import Temp from './Temp';

function Card(props) {
    return (
        <div className="card">
            <Day day={props.data.day} />
            <Widget condition={props.data.condition} icon={props.data.icon} />
            <Temp temp={props.data.temp} />
        </div>
    );
}

export default Card;