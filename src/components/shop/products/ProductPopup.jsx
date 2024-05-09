import React from 'react';
import classes from './Products.module.css';

const ProductPopup = ({product, setPopupState}) => {
    const hidePopup = () => {
        setPopupState({hide: true, selectedProduct: {}})
    }

    const handleInnerClick = (e) => {
        e.stopPropagation(); 
    };

    return (
            <div 
                className={classes.popup}
            >
                <div className={classes.popupTop}>
                    <img className={classes.popupImage} src={product.image} alt="product" />
                    <div className={classes.popupInfo}>
                        <h1 className={classes.popupHeading}>{product.name}</h1>
                        <p className={classes.popupInfoText}><span>Price: </span>{product.price} $</p>
                        <p className={classes.popupInfoText}><span>Year: </span>{product.year}</p>
                        <p className={classes.popupInfoText}><span>Brand: </span>{product.brand}</p>
                    </div>
                </div>
                <p className={classes.popupBody}>
                    <span>About {product.name}:</span>
                    {product.body}
                </p>
                
            </div>
    );
}

export default ProductPopup;
