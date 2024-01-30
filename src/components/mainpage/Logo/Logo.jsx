import React from 'react';
import classes from './Logo.module.css'


import Navbar from "../Navbar/Navbar";
import ViewMoreButton from "../../UI/ViewMoreButton/ViewMoreButton";
const Logo = () => {
    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>

                <Navbar></Navbar>

                <div className={classes.text}>
                    <div className={classes.label}>
                        <div className={classes.textWrapper}>
                            СЛОГАН / ДИСКРИПТОР <br/>
                            КОМПАНІЇ
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div>
                            <div className={classes.label2}>
                                <p className={classes.description}>Короткий опис того, які послуги пропонуються і всяке
                                    таке подібне.
                                    Короткий опис того, які послуги пропонуються і всяке таке подібне
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={classes.frameGif}>
                                <div className={classes.gif}>фото/гіфка протеза</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={classes.viewMore}>
                    <ViewMoreButton ></ViewMoreButton>
                </div>
            </div>
        </div>
    );
};

export default Logo;