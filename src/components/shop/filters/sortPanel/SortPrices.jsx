import React, { useState } from 'react';
import classes from './SortPanel.module.css'
import arrow from '../../../../images/UI/right-arrow2.svg'

const SortPrices = ({filter, setFilter}) => {
    const[priceState, setPriceState] = useState({min: 0, max: Infinity})
    const priceFilter = () => {
        setFilter({...filter, priceDiapason: {...filter.priceDiapason, min: priceState.min}})
    }
    //ниче не работает поправь
    return (
        <div className={classes.sortPrices}>
            <input 
                lassName={classes.input} 
                type="number"
                onChange={e => setPriceState({...priceState, min: e.target.value})} 
            />
            <div className={classes.dash} />
            <input 
                className={classes.input} 
                type="number"
                onChange={e => setPriceState({...priceState, max: e.target.value})}  
            />
            <div 
                className={classes.btn}
                onClick={priceFilter}
            >
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    );
};

export default SortPrices;