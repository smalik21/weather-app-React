
function Place(props) {
    return (
        <div className="place">
            <p className="location">{props.location}</p>
            <div className="region-country">
                <p className="region">{props.region}</p>
                <p className="country">{props.country}</p>
            </div>
        </div>
    )
}

export default Place;