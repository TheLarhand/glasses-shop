import React from 'react';
import classes from './Header.module.css';
import logo from '../../images/UI/shop-logo.svg';
import search from '../../images/UI/search.svg';
import like from '../../images/UI/like-heart.svg';
import shopCar from '../../images/UI/shop-car.svg';
import HeaderNav from './HeaderNav';

const HeaderTop = ({navigationInfo}) => {
    return (
        <div className={classes.headerTop}>
            <div className={classes.headerTopRow}>
                <img src={logo} alt="logo" />
                <div>
                    <p className={classes.headerTopLink}>0371 525 777</p>
                    <a className={classes.headerTopLink} href="#">Help</a>
                    <a className={classes.headerTopLink} href="#">Account</a>
                </div>
            </div>

            <div className={classes.headerTopRow}>
                <HeaderNav
                    navigationInfo={navigationInfo}
                />
                <div className={classes.headerSearch}>
                    <img src={search} alt="search" />
                    <img src={like} alt="like" />
                    <img src={shopCar} alt="shopCar" />
                </div>

            </div>
        </div>
    );
};

export default HeaderTop;