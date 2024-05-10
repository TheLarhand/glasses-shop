import React, { useState } from 'react';
import MainProducts from './products/MainProducts';
import classes from './Shop.module.css'
import Filters from './filters/Filters';
import ProductForm from './productFrom/ProductForm';
import Modal from '../modal/Modal';

const Shop = ({products, filterInfo, create, filter, setFilter}) => {
    const [productFormVisible, setProductFormVisible] = useState(false);
    const [productPopupVisible, setProductPopupVisible] = useState(false);

    const openProductFormModal = () => {
        setProductFormVisible(true);
    };

    return (
        <div className={classes.wrapper}>
            <Modal
                modalVisible={productFormVisible}
                setModalVisible={setProductFormVisible}
            >
                <ProductForm 
                create={create}
                setModalVisible={setProductFormVisible}
                />
            </Modal>
            <h1 className={classes.heading}>Shop</h1>
            
            <button
                className={classes.createBtn}
                onClick={openProductFormModal}
            >
                create product
            </button>
            
            <div className={classes.shop}>
                <Filters
                    filter={filter}
                    setFilter={setFilter}
                    filterInfo={filterInfo}
                />
                <MainProducts 
                    products={products}
                    modalVisible={productPopupVisible}
                    setModalVisible={setProductPopupVisible}
                />
            </div>
            
            
        </div>
    );
};

export default Shop;