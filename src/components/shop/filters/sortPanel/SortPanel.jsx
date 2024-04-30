import React, { useState }  from 'react';
import classes from './SortPanel.module.css'
import SortOptions from './SortOptions';
import SortPrices from './SortPrices';

const SortPanel = ({options, filter, setFilter}) => {
    const [checkedSorts, setCheckedSorts] = useState([false, false, false, false, false, false])

    const switchSort = (index, value, isInvert) => {
        const newCheckedSorts = [false, false, false, false, false, false]
        if(checkedSorts[index]){
            setFilter({...filter, sort: ''})
        } else {
            setFilter({...filter, sort: value, sortInvert: isInvert})
            newCheckedSorts[index] = !newCheckedSorts[index]
        }
        setCheckedSorts(newCheckedSorts)
    }

    // const priceSort = (min, max) => {
    //     const newPriceDiapason = {min: min, max: max};
    //     setFilter({...filter, priceDiapason: newPriceDiapason})
    // }

    return (
        <div className={classes.wrapper}>
            <SortOptions
                options={options}
                switchSort={switchSort}
                checkedSorts={checkedSorts}
            />
            <div className={classes.line} />
            <SortPrices
                filter={filter}
                setFilter={setFilter}
            />
        </div>
    );
}

export default SortPanel;