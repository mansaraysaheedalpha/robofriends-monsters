import React from 'react';
import './search.styles.css';


const SearchBox = (props) => {
    const { searchfield, placeholder, searchChange, className } = props;
    return (
        <input
            type="search"
            className={className}
            value={searchfield}
            placeholder={placeholder}
            onChange={searchChange}
        />
    );
};

export default SearchBox;