import React from 'react';
import MainProducts from './products/MainProducts';
import classes from './Shop.module.css'
import Filters from './filters/Filters';
import ProductForm from './productFrom/ProductForm';
import SearchFilter from './filters/SearchFilter';
import Modal from '../modal/Modal';

const Shop = ({products, filterInfo, create, filter, setFilter, modalVisible, setModalVisible}) => {
    
    const openModal = () => {
        setModalVisible(true)
    }

    return (
        <div className={classes.wrapper}>
            <Modal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            >
                <ProductForm 
                create={create}
                />
            </Modal>
            <h1 className={classes.heading}>Shop</h1>
            
            <button
                className={classes.createBtn}
                onClick={openModal}
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
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                />
            </div>
            
            
        </div>
    );
};

export default Shop;