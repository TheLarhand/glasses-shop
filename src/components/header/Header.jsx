import React from 'react';
import classes from './Header.module.css';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const Header = ({navigationInfo}) => {
    return (
        <div className={classes.wrapper}>
            <HeaderTop
                navigationInfo={navigationInfo}
            />
            <HeaderBottom
            />
        </div>
    );
};

export default Header;