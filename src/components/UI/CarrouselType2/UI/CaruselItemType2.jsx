import React from 'react';
import classes from './CaruselItemType2.module.css';

const CaruselItemType2 = ({title, description}) => {
    return (
        <div >

            <div >
                <div className={classes.title} >
                    ОСОБЛИВОСТІ <br/>
                    ПРОТЕЗА
                </div>
            </div>
            <div >
                <div className={classes.description}>
                    Технології, використані при створенні NeuroSync -
                    305 дозволяють за відносно короткий термін спроектувати протез, який ідеально відповідатиме анатомічним потребам кожного користувача.
                </div>
            </div>
            <div >
                <div className={`${classes.description} ${classes.secondDescription}`}>
                    Нейлон та АБС - матеріали, які є основою
                    конструкції протеза поєднують в собі міцність та легкість, що сприяє комфортності використання.
                </div>
            </div>


        </div>
    );
};

export default CaruselItemType2;