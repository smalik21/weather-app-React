
function SearchButton({ onAdd }) {

    function handleClick(event) {
        event.preventDefault();
        onAdd();
    }

    return (
        <input onClick={handleClick} className="search-button" type="button" value="Search" />
    );
}

export default SearchButton;