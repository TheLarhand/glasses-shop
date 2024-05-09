import React from 'react';
import classes from './Filter.module.css';

const SearchFilter = ({filter, setFilter}) => {
    return (
        <div>
            <input
                className={classes.searchFilter} 
                type="text" 
                placeholder="search..."
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
        </div>
    );
}

export default SearchFilter;
