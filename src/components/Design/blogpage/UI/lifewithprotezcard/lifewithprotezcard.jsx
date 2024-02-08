import React from 'react';
import classes from './lifewithprotezcard.module.css'

const Lifewithprotezcard = () => {
    return (
        <div className={classes.cardGeneral}>
            <img className={classes.cardImage}/>
            <h5 className={classes.cardParagraph}>
                Дослідження галузі протезування кінцівок в Україні. Дослідження і звіт
            </h5>
        </div>
    );
};

export default Lifewithprotezcard;