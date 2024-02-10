import React from 'react';
import classes from './CaruselItemType2.module.css';

const CaruselItemType2 = ({title, description,descriptionSecond}) => {
    return (
        <div >

            <div >
                <div className={classes.title} >
                    {title}
                </div>
            </div>
            <div >
                <div className={classes.description}>
                    {description}
                </div>
            </div>
            <div >
                <div className={`${classes.description} ${classes.secondDescription}`}>
                    {descriptionSecond}
                </div>
            </div>


        </div>
    );
};

export default CaruselItemType2;