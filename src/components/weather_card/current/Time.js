
function Time(props) {

    return (
        <div className="datetime">
            <p className="date">{props.date}</p>
            <p className="time">{props.time}</p>
        </div>
    );
}

export default Time;