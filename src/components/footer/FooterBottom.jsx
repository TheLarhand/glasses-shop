import React from 'react';
import classes from './Footer.module.css'

const FooterBottom = () => {
    return (
        <div className={classes.footerBottom}>
            <div className={classes.footerBottomWrapper}>
                <div>
                    <img className={classes.logo} src="" alt="" />
                    <a className={classes.footerText} href="#"></a>
                    <a className={classes.footerText} href="#"></a>
                    <div></div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default FooterBottom;
