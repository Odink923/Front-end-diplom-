import React from 'react';
import classes from './Title.module.css';
import Navbar from "../../../../../components/Navbar/Navbar";
import ViewMoreButton from "../../../../../components/ViewMoreButton/ViewMoreButton";

const Title = () => {
    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>
                    <Navbar></Navbar>
                <div className={classes.row}>
                    <div className={classes.text}>
                        <div className={classes.textContent}>
                        <div className={classes.label}>
                            <div className={classes.textWrapper}>
                                ЗАГОЛОВОК / ДИСКРИПТОР
                                КОМПАНІЇ
                            </div>
                        </div>
                        <div className={classes.label2}>
                            <p className={classes.description}>Короткий опис того, які послуги пропонуються і всяке
                                таке подібне.
                                Короткий опис того, які послуги пропонуються і всяке таке подібне
                            </p>
                        </div>

                        <div className={classes.other}>

                        </div>
                        </div>
                    </div>
                    <div className={classes.image}>
                        <div className={classes.frameGif}>
                            <div className={classes.gif}>фото/відео</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Title;