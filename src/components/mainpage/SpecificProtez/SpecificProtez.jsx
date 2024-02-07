import React from 'react';
import classes from './SpecificProtez.module.css';

const SpecificProtez = () => {
    return (
        <div className={classes.box}>

            <div className={classes.row}>

                <div className={classes.image}>
                    <div className={classes.frameGif}>

                    </div>
                </div>

                <div className={classes.text}>
                    <div className={classes.textContent}>


                        <div className={classes.label}>
                            <div className={classes.textWrapper}>
                                3Д ДРУК
                            </div>
                        </div>

                        <div className={classes.parag}>
                        <div className={classes.label2}>
                            <p className={classes.description}>Технології, використані при створенні NeuroSync
                                - 305 дозволяють за відносно короткий термін спроектувати протез,
                                який ідеально відповідатиме анатомічним потребам кожного користувача.

                            </p>
                        </div>

                        <div className={classes.label2}>
                            <p className={classes.description}>Нейлон та АБС - матеріали,
                                які є основою конструкції протеза поєднують в собі міцність та легкість,
                                що сприяє комфортності використання.
                            </p>
                        </div>
                        </div>


                        <div className={classes.other}>

                        </div>

                    </div>
                </div>

                <div className={classes.scroll}>

                </div>

            </div>
        </div>
    );
};

export default SpecificProtez;