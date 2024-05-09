import React from 'react';
import classes from './Modal.module.css'

const Modal = ({children, modalVisible, setModalVisible}) => {

    const rootClasses = [classes.modal]

    const handleInnerClick = (e) => {
        e.stopPropagation(); 
    };

    const close = () => {
        setModalVisible(false)
    }

    if(modalVisible){
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={close}>
            <div className={classes.modalContent} onClick={handleInnerClick}>
                {children}
            </div>
        </div>
    );
};

export default Modal;