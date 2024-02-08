import React from 'react';
import classes from './SpecificProtez.module.css';

const SpecificProtez = () => {
    return (
        <div className={classes.box}>
            <div className={classes.image}/>
            <div className={classes.label}>
                <div className={classes.textWrapper}>
                    ОСОБЛИВОСТІ <br/>
                    ПРОТЕЗА
                </div>
            </div>
            <div className={classes.label2}>
                <div className={classes.textWrapper2}>
                    Короткий опис того, які послуги пропонуються і всяке таке подібне.
                    Короткий опис того, які послуги пропонуються і всяке таке подібне
                    Короткий опис того, які послуги пропонуються і всяке таке подібне.
                    Короткий опис того, які послуги пропонуються і всяке таке подібне
                </div>
            </div>
            <div className={classes.label3}>
                <div className={classes.textWrapper3}>
                    Короткий опис того, які послуги пропонуються і всяке таке подібне.
                    Короткий опис того, які послуги пропонуються і всяке таке подібне
                </div>
            </div>
            <div className={classes.other}>

            </div>
            <div className={classes.scroll}>

            </div>
        </div>
    );
};

export default SpecificProtez;