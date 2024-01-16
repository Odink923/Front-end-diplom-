import React from 'react';
import classes from './Logo.module.css'

import Navbar from "../Navbar/Navbar";
const Logo = () => {
    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>

                <Navbar></Navbar>
                <div className={classes.label}>
                    <div className={classes.textWrapper}>
                        СЛОГАН / ДИСКРИПТОР <br/>
                        КОМПАНІЇ
                    </div>
                </div>
                <div className={classes.label2}>
                    <p className={classes.description}>Короткий опис того, які послуги пропонуються і всяке таке подібне.
                        Короткий опис того, які послуги пропонуються і всяке таке подібне
                    </p>
                </div>
                <div className={classes.frame}>
                    <svg className={classes.vector} width="25" height="214" viewBox="0 0 25 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector 6" d="M12.0486 0L12.0486 212M12.0486 212L23.2986 202.25M12.0486 212L1 202.25"
                              stroke="#F2F5FF" stroke-width="3"/>
                    </svg>
                    <div className={classes.textWrapper}>Дізнатися більше</div>
                </div>
                <div className={classes.frameGif}>
                    <div className={classes.gif}>фото/гіфка протеза</div>
                </div>
            </div>
        </div>
    );
};

export default Logo;