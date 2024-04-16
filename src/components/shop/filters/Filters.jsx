import React from 'react';
import TypeFilter from './TypeFilter';
import classes from './Filter.module.css';

const Filters = ({filtersImg}) => {
    return (
        <div>
            <h2 className={classes.heading}>Filters</h2>
            <TypeFilter filtersImg={filtersImg}/>
        </div>
    );
};

export default Filters;