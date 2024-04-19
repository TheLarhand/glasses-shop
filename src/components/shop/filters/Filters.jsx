import React from 'react';
import TypeFilter from './TypeFilter';
import classes from './Filter.module.css';

const Filters = ({filtersImg, filter, setFilter}) => {
    return (
        <div>
            <h2 className={classes.heading}>Filters</h2>
            <TypeFilter 
                filtersImg={filtersImg}
                filter={filter}
                setFilter={setFilter}
            />
        </div>
    );
};

export default Filters;