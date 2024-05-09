import React from 'react';
import TypeFilter from './typeFilter/TypeFilter';
import classes from './Filter.module.css';
import SortPanel from './sortPanel/SortPanel';
import SearchFilter from './SearchFilter';

const Filters = ({filterInfo, filter, setFilter}) => {
    return (
        <div>
            <h2 className={classes.heading}>Filters</h2>
            <SearchFilter
                filter={filter}
                setFilter={setFilter}
            />
            <TypeFilter
                filterInfo={filterInfo}
                filter={filter}
                setFilter={setFilter}
            />
            {/* добавь вывод кол-ва результатов и мб фильтров сверху */}
            <SortPanel
                options={[
                    {value: "name", sortInvert: false, name: "Sort by name A-Z"},
                    {value: "name", sortInvert: true, name: "Sort by name Z-A"},
                    {value: "price", sortInvert: false, name: "Sort by price from cheap to expensive"},
                    {value: "price", sortInvert: true, name: "Sort by price from expensive to cheap"},
                    {value: "year", sortInvert: false, name: "Sort by year from old to new"},
                    {value: "year", sortInvert: true, name: "Sort by year from new to old"},
                ]}
                filter={filter}
                setFilter={setFilter}
            />
        </div>
    );
};

export default Filters;