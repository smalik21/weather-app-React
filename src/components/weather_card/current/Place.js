
function Place(props) {
    return (
        <div className="place">
            <p className="location">{props.location}</p>
            <p className="region">{props.region}</p>
            <p className="country">{props.country}</p>
        </div>
    )
}

export default Place;