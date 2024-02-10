import React from 'react';
import classes from './CarrouselItemType3.module.css'

const CarrouselItemType3 = ({description}) => {
    return (
        <div className={classes.font}>

             {description}

        </div>
    );
};

export default CarrouselItemType3;