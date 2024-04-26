import React from 'react';
import classes from './SortOption.module.css'
import checked from '../../../../images/UI/check.svg'

const SortOption = ({option ,index , switchSort, checkedSorts}) => {

    const handleClick = () => {
        switchSort(index, option.value, option.sortInvert);
    } 

    return (
        <div onClick={handleClick} className={classes.wrapper}>
            <div className={classes.checkBlock}>
                {checkedSorts[index] && (
                    <img src={checked} alt="checked logo" />
                )}                
            </div>
            <p className={classes.text}>{option.name}</p>
        </div>
    );
}

export default SortOption;
