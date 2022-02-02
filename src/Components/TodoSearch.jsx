import React from 'react'
import '../Styles/TodoSearch.css';

export function TodoSearch({searchValue, setSearchValue}) {

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }
    return [
        <input
         className='TodoSearch'
         placeholder="Buscar..." 
         value={searchValue}
         onChange={onSearchValueChange}
        />,
    ];
}

