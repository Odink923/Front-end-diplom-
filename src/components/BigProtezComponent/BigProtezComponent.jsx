import React from 'react';
import classes from './BigProtezComponent.module.css'

import ViewMoreButton from "../../../../../components/ViewMoreButton/ViewMoreButton";

import ViewMoreButton from "../ViewMoreButton/ViewMoreButton";


const BigProtezComponent = ({header, text}) => {
    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>
                <div className={classes.text}>
                    <div className={classes.header}>
                        <div className={classes.textWrapperBig}>{header}</div>
                    </div>
                    <div className={classes.paragraf}>
                        <div className={classes.textWrapper}>{text}</div>
                    </div>
                </div>
                <div className={classes.image}></div>
                <div className={classes.viewMore}>
                    <ViewMoreButton></ViewMoreButton>
                </div>
            </div>
        </div>
    );
};

export default BigProtezComponent;