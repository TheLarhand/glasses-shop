import React from 'react';
import classes from './Header.module.css';

const HeaderNav = ({navigationInfo}) => {
    return (
        <div className={classes.headerNav}>
            {navigationInfo.map((navLink, index) => (
                <a 
                    href={navLink.link} 
                    key={index}
                    className={classes.navLink}
                >
                    {navLink.title}
                </a>
            ))}
            
        </div>
    );
};

export default HeaderNav;