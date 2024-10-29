import React from 'react';
import './searchbox.styles.css';


const SearchBox = (props) => {
    const { searchfield, placeholder, searchChange, className, type } = props;
    return (
        <input
            type={type}
            className={className}
            value={searchfield}
            placeholder={placeholder}
            onChange={searchChange}
        />
    );
};

export default SearchBox;