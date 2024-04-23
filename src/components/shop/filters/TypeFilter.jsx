import React, { useState } from 'react';
import TypeFilterBlock from './TypeFilterBlock';
import classes from './TypeFilter.module.css';

const TypeFilter = ({ filterInfo, filter, setFilter }) => {
    // Изменено начальное состояние activeFilters
    const [activeFilters, setActiveFilters] = useState([false, false, false, false, false, false]);

    const [firstClick, setFirstClick] = useState(true)

    const switchFilter = (index) => {
        const newActiveFilters = [...activeFilters];
        newActiveFilters[index] = !newActiveFilters[index];
        setActiveFilters(newActiveFilters);
    };

    const switchFirstClick = () => {
        setFirstClick(false);
    };

    return (
        <div className={classes.wrapper}>
            {filterInfo.map((filter, index) => (
                <TypeFilterBlock
                    key={index}
                    index={index}
                    image={filter.image}
                    isActive={activeFilters[index]}
                    firstClick={firstClick}
                    switchFirstClick={switchFirstClick}
                    switchFilter={switchFilter}
                >
                    {filter.title}
                </TypeFilterBlock>
            ))}
        </div>
    );
};

export default TypeFilter;
