import React from 'react';
import MainProducts from './products/MainProducts';
import classes from './Shop.module.css'
import Filters from './filters/Filters';
import ProductForm from './productFrom/ProductForm';
import SearchFilter from './filters/SearchFilter';

const Shop = ({products, filterInfo, create, filter, setFilter}) => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Shop</h1>
            <SearchFilter
                filter={filter}
                setFilter={setFilter}
            />
            <ProductForm 
                create={create}
            />
            <div className={classes.shop}>
                <Filters
                    filter={filter}
                    setFilter={setFilter}
                    filterInfo={filterInfo}
                />
                <MainProducts 
                    products={products}
                />
            </div>
            
            
        </div>
    );
};

export default Shop;