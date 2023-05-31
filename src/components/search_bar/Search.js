import SearchButton from './SearchButton';
import { useState } from 'react';

function Search(props) {

    const [text, setText] = useState("");

    const handleKeyDown = event => {

        if (event.key === 'Enter') {
            handleClick();
        }
    };

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleClick(event) {
        props.location(text);
        setText("");
    }

    return (
        <div className="search">
            <input
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                value={text}
                className="search-input"
                type="text"
                placeholder="Enter the location here..."
            />

            <SearchButton onAdd={handleClick} />
        </div>
    );
}

export default Search;