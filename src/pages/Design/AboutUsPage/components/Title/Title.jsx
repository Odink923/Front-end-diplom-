import React from 'react';
import classes from './Title.module.css';
import Navbar from "../../../UI/Managament/Navbar/Navbar";
import ViewMoreButton from "../../../UI/Buttons/ViewMoreButton/ViewMoreButton";

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
                                Про Octa Bionics
                            </div>
                        </div>
                            <div className={classes.label2}>
                                <p className={classes.description}>Ми розробляємо та виготовляємо біонічні протези рук і
                                    забезпечуємо комплексні послуги реабілітації у місті Київ.
                                </p>
                                <p className={classes.description}>Наша головна мета — допомогти людям з ампутаціями відновити контроль над своїм життям та мріями.
                                </p>
                            </div>

                            <div className={classes.other}>

                            </div>
                        </div>
                    </div>
                    <div className={classes.image}>
                        <div className={classes.frameGif}>
                            {/*<div className={classes.gif}>фото/відео</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Title;