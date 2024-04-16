import React from 'react';
import classes from './TypeFilterBlock.module.css'

const TypeFilterBlock = ({children, image}) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.back}>
                <img src={image} alt="filter-icon" />
            </div>
            <p className={classes.text}>{children}</p>
        </div>
    );
};

export default TypeFilterBlock;