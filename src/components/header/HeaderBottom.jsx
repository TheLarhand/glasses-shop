import React from 'react';
import classes from './Header.module.css';
import photo from '../../images/photos/header-photo.png';

const HeaderBottom = () => {
    return (
        <div className={classes.headerBottom}>
            <div className={classes.bottomWrapper}>
                <div className={classes.bottomSale}>
                    <h1>
                        Spring Sale <br/>
                        <span>Up to -40%</span>
                    </h1>
                    <button>
                        See offer
                    </button>
                </div>
                <img className={classes.bottomPhoto} src={photo} alt="photo" />
            </div>
        </div>
    );
};

export default HeaderBottom;