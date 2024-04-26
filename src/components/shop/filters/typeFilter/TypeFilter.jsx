import React, { useState } from 'react';
import TypeFilterBlock from './TypeFilterBlock';
import classes from './TypeFilter.module.css';

const TypeFilter = ({ filterInfo, filter, setFilter }) => {
    const [activeFilters, setActiveFilters] = useState([false, false, false, false, false, false]);

    const switchFilter = (index) => {
        const newActiveFilters = [...activeFilters];
        newActiveFilters[index] = !newActiveFilters[index];
        setActiveFilters(newActiveFilters);
        if(newActiveFilters[index]){
            setFilter({...filter, type: [...filter.type, `${index + 1}`]})
        } else {
            const newType = filter.type.filter(el => el !== `${index + 1}`);
            setFilter({...filter, type: newType})
        }
    };

    return (
        <div className={classes.wrapper}>
            {filterInfo.map((filterItem, index) => (
                <TypeFilterBlock
                    key={index}
                    index={index}
                    image={filterItem.image}
                    isActive={activeFilters[index]}
                    switchFilter={switchFilter}
                    filterUsed={filter.type.length === 0}
                >
                    {filterItem.title}
                </TypeFilterBlock>
            ))}
        </div>
    );
};

export default TypeFilter;
