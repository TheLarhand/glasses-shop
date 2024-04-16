import React from 'react';
import ProductBlock from './ProductBlock';
import classes from './MainProducts.module.css';

const MainProducts = ({products}) => {
    return (
        <div className={classes.wrapper}>
            {products.map((product, index) => (
                <ProductBlock
                key={index} 
                product={product}/>
            ))}
        </div>
    );
};

export default MainProducts;