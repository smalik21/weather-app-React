
function Label(props) {
    
    return (
        <div className={props.name}>
            <p>{props.label}</p>
        </div>
    );
}

export default Label;