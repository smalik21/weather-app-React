
function SearchButton(props) {

    function handleClick(event) {
        props.onAdd();
        event.preventDefault();
    }

    return (
        <input onClick={handleClick} className="search-button" type="button" value="Search" />
    );
}

export default SearchButton;