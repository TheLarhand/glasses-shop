import React from 'react';

const SearchFilter = ({filter, setFilter}) => {
    return (
        <div>
            <input 
                type="text" 
                placeholder="search..."
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
        </div>
    );
}

export default SearchFilter;
