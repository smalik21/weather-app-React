
function Factor(props) {
    return (
        <div className={props.name} >
            <p>{props.info}{props.unit}</p>
        </div>
    );
}

export default Factor;