import Time from './Time';
import Place from './Place';

function TimeAndPlace(props) {
    return (
        <div className="time-place">
            <Time 
                date={props.current.currentDate} 
                time={props.current.currentTime}
            />
            <Place
                location={props.current.currentLocation}
                region={props.current.currentRegion}
                country={props.current.currentCountry}
            />
        </div>
    );
}

export default TimeAndPlace;