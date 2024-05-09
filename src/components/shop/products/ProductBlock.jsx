import React from 'react';
import classes from './Products.module.css';
import arrow from '../../../images/UI/right-arrow.svg';

const ProductBlock = ({product, popupState, setPopupState, setModalVisible}) => {
    const showPopup = () => {
        setPopupState({selectedProduct: product})
        setModalVisible(true)
    }
    return (
        <div className={classes.product}>
            <img className={classes.image} src={product.image} alt="product" />
            <h4 className={classes.name}>{product.name}</h4>
            <p className={classes.price}>Price: {product.price} $</p>
            <div 
            className={classes.details}
            onClick={showPopup}
            >
                See details 
                <img src={arrow} alt="arrow"/>
            </div>
        </div>
    );
};

export default ProductBlock;