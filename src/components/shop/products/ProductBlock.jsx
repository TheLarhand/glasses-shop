import React from 'react';
import classes from './ProductBlock.module.css';
import arrow from '../../../images/UI/right-arrow.svg';

const ProductBlock = ({product}) => {
    return (
        <div className={classes.wrapper}>
            <img className={classes.image} src={product.image} alt="product-image" />
            <h4 className={classes.name}>{product.name}</h4>
            <p className={classes.price}>Price: {product.price} $</p>
            <div className={classes.details}>See details <img src={arrow} alt="arrow"/></div>
        </div>
    );
};

export default ProductBlock;