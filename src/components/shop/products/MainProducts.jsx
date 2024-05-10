import React, { useState } from 'react';
import ProductBlock from './ProductBlock';
import classes from './Products.module.css';
import ProductPopup from './ProductPopup';
import Modal from '../../modal/Modal';

const MainProducts = ({products, modalVisible, setModalVisible}) => {
    const[popupState, setPopupState] = useState({hide: true, selectedProduct: {}})
    return (
        <div className={classes.wrapper}>
            <Modal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            >
                <ProductPopup
                    product={popupState.selectedProduct}
                    setPopupState={setPopupState}
                />
            </Modal>
            {products.map((product, index) => (
                <ProductBlock
                key={index}
                product={product}
                setPopupState={setPopupState}
                setModalVisible={setModalVisible}
                />
            ))}
            
        </div>
    );
};

export default MainProducts;