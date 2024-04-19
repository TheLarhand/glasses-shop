import React from 'react';
import TypeFilterBlock from './TypeFilterBlock';
import classes from './TypeFilter.module.css'

const TypeFilter = ({filtersImg, filter, setFilter}) => {
    return (
        <div className={classes.wrapper}>
            <TypeFilterBlock image={filtersImg('./lens.svg')}>
                Contact Lenses
            </TypeFilterBlock>

            <TypeFilterBlock image={filtersImg('./colored lens.svg')}>
                Colored Lenses
            </TypeFilterBlock>

            <TypeFilterBlock image={filtersImg('./blue glasses.svg')}>
                Blue light
            </TypeFilterBlock>

            <TypeFilterBlock image={filtersImg('./sport glasses.svg')}>
                Sports
            </TypeFilterBlock>

            <TypeFilterBlock image={filtersImg('./sunglasses.svg')}>
                Sunwear
            </TypeFilterBlock>

            <TypeFilterBlock image={filtersImg('./glasses.svg')}>
                Optical
            </TypeFilterBlock>
        </div>
    );
};

export default TypeFilter;