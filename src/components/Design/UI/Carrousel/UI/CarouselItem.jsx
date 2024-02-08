import React from 'react';
import classes from './CarouselItem.module.css'
const CaruselItem = ({title,description}) => {
    return (
        <div >
            <div className={classes.item}></div>
            <div className={classes.title}> {title}</div>
            <div className={classes.description}>{description}</div>

        </div>
    );
};

export default CaruselItem;