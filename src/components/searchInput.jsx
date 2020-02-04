import React, { useState } from 'react';

const SearchInput = () => {
    const [ searchText, setSearchText ] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;

        setSearchText(newValue);
    }
    
    return (
        <input type='text' onChange={handleChange} value={ searchText } ></input>
    )
}

export default SearchInput;