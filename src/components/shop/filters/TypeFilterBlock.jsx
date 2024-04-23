import React from 'react';
import classes from './TypeFilterBlock.module.css';

const TypeFilterBlock = ({ index, children, isActive, image, switchFilter, firstClick, switchFirstClick }) => {
    const handleClick = () => {
        switchFilter(index);
        switchFirstClick();
    };

    return (
        <div onClick={handleClick} className={`${classes.wrapper} ${isActive || firstClick  ? '' : classes.notActive}`}>
            <div className={classes.back}>
                <img src={image} alt="filter-icon" />
            </div>
            <p className={classes.text}>{children}</p>
        </div>
    );
};

export default TypeFilterBlock;
