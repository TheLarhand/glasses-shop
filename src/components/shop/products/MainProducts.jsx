import React, { useState } from 'react';
import ProductBlock from './ProductBlock';
import classes from './Products.module.css';
import ProductPopup from './ProductPopup';

const MainProducts = ({products}) => {
    const[popupState, setPopupState] = useState({hide: true, selectedProduct: {}})
    return (
        <div className={classes.wrapper}>
            {products.map((product, index) => (
                <ProductBlock
                key={index}
                product={product}
                popupState={popupState}
                setPopupState={setPopupState}
                />
            ))}
            {popupState.hide ? null : 
                <ProductPopup
                    product={popupState.selectedProduct}
                    setPopupState={setPopupState}
                />
            }
            
        </div>
    );
};

export default MainProducts;