import React from 'react';
import classes from './TypeFilterBlock.module.css';

const TypeFilterBlock = ({ index, children, isActive, image, switchFilter, filterUsed, filterStatus}) => {

    const handleClick = () => {
        switchFilter(index);
    };

    return (
        <div onClick={handleClick} className={`${classes.wrapper} ${isActive || filterUsed ? '' : classes.notActive} `}>
            <div className={classes.back}>
                <img src={image} alt="filter-icon" />
            </div>
            <p className={classes.text}>{children}</p>
        </div>
    );
};

export default TypeFilterBlock;
