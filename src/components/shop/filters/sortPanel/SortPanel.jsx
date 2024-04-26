import React, { useState }  from 'react';
import classes from './SortPanel.module.css'
import SortOption from './SortOption';

const SortPanel = ({options, filter, setFilter}) => {
    const [checkedSorts, setCheckedSorts] = useState([false, false, false, false, false, false])

    const switchSort = (index, value, isInvert) => {
        setFilter({...filter, sort: value, sortInvert: isInvert})
        const newCheckedSorts = [false, false, false, false, false, false]
        newCheckedSorts[index] = !newCheckedSorts[index]
        setCheckedSorts(newCheckedSorts)
    }

    //сделай отключение сортировки

    return (
        <div className={classes.wrapper}>
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
        </div>
    );
}

export default SortPanel;