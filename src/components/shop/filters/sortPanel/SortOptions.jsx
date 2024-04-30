import React from 'react';
import SortOption from './SortOption';
import classes from './SortPanel.module.css'

const SortOptions = ({options, switchSort, checkedSorts}) => {
    return (
        <div className={classes.options}>
            {options.map((option, index) => (
                <SortOption
                    option={option}
                    index={index}
                    switchSort={switchSort}
                    checkedSorts={checkedSorts}
                />
            ))}
        </div>
    );
};

export default SortOptions;