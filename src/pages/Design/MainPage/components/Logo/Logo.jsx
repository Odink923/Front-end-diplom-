import React from 'react';
import classes from './Logo.module.css'


import Navbar from "../../../UI/Managament/Navbar/Navbar";
import ViewMoreButton from "../../../UI/Buttons/ViewMoreButton/ViewMoreButton";
const Logo = () => {
    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>

                <Navbar></Navbar>

                <div className={classes.text}>
                    <div className={classes.label}>
                        <div className={classes.textWrapper}>
                            ДОПОМАГАЄМО <br/>
                            ВІДНОВИТИ КОНТРОЛЬ
                        </div>
                    </div>
                    <div className={classes.row}>
                            <div className={classes.label2}>
                                <p className={classes.description}>Octa Bionics — сучасний центр протезування та реабілітації. Ми розробляємо біонічні протези, які дають можливість людям з ампутаціями верхніх кінцівок відновити контроль над власним життям.
                                </p>
                            </div>
                        <div>
                            <div className={classes.frameGif}>
                                <div className={classes.gif}>фото/гіфка протеза</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.viewMore}>
                        <ViewMoreButton color={"#F2F5FF"}></ViewMoreButton>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Logo;