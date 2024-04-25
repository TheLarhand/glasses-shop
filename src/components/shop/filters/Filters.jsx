import React from 'react';
import TypeFilter from './TypeFilter';
import classes from './Filter.module.css';
import SortPanel from './SortPanel';

const Filters = ({filterInfo, filter, setFilter}) => {
    return (
        <div>
            <h2 className={classes.heading}>Filters</h2>
            <TypeFilter
                filterInfo={filterInfo}
                filter={filter}
                setFilter={setFilter}
            />
            {/* добавь вывод кол-ва результатов и мб фильтров сверху */}
            {/* доделай сортировку */}
            <SortPanel
                
            />
        </div>
    );
};

export default Filters;