import React from 'react';
import classes from './Header.module.css';
import HeaderTop from './HeaderTop';

const Header = ({navigationInfo}) => {
    return (
        <div className={classes.wrapper}>
            <HeaderTop
                navigationInfo={navigationInfo}
            />
        </div>
    );
};

export default Header;