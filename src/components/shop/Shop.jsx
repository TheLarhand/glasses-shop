import React from 'react';
import MainProducts from './products/MainProducts';
import classes from './Shop.module.css'
import Filters from './filters/Filters';

const Shop = ({products, filtersImg}) => {
    return (
        <div>
            <h1 className={classes.heading}>Shop</h1>
            <div className={classes.shop}>
                <Filters filtersImg={filtersImg}/>
                <MainProducts products={products}/>
            </div>
            
            
        </div>
    );
};

export default Shop;