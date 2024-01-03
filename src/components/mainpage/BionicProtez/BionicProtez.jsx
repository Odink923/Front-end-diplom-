import React from 'react';
import classes from './BionicProtez.module.css'

const BionicProtez = () => {
    return (

        <div className={classes.gradient}>

            <div className={classes.content}>
            <div className={classes.leftItems}>
                <div className={classes.item1}>
                    <div className={classes.itemContent}>БІОНІЧНІ ПРОТЕЗИ РУК</div>
                </div>
                <div className={classes.item2}>
                    <div className={classes.itemContent}>
                        <div className={classes.item2Content}>
                            <div>
                            КАСТОМНІ ОБОЛОНКИ
                            </div>
                            <div className={classes.text2Item2}>Короткий опис того, які послуги пропонуються і всяке таке подібне. Короткий опис того,
                                які послуги пропонуються і всяке таке подібне  Короткий опис того, які
                                послуги пропонуються і всяке таке подібне.
                                Короткий опис того, які послуги пропонуються і всяке таке подібне </div>
                        </div>

                        <div style={{marginRight:"5.26%"}}>
                            <div className={classes.icon}></div>
                        </div>
                    </div>
                </div>
                <div className={classes.items}>
                    <div className={classes.itemContent}>
                    НАВЧАННЯ І РЕАБІЛІТАЦІЯ
                    </div>
                </div>
                <div className={classes.items}>
                    <div className={classes.itemContent}>
                    ПОДАЛЬШЕ ОБСЛУГОВУВАННЯ ПРОТЕЗІВ
                    </div>
                </div>
            </div>
            <div className={classes.rightItems}>

            </div>
            </div>
        </div>
    );
};

export default BionicProtez;