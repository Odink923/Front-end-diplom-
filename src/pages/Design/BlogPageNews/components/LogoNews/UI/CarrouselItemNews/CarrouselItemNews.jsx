import React from 'react';
import classes from './CarrouselItemNews.module.css'
const CarrouselItemNews = ({title,description}) => {
    return (
        <div >
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.description}>
                {description}
            </div>
        </div>
    );
};

export default CarrouselItemNews;