import React from 'react';
import classes from "./lifewithprotez.module.css"
import Lifewithprotezcard from '../../UI/lifewithprotezcard/lifewithprotezcard'

const Lifewithprotez = () => {
    return (
        <div className={classes.blogStorySuccessGeneral}>
            <div className={classes.blogStorySuccessSubGeneral}>
                <h2 className={classes.spanTitleLayout}>життя з протезом</h2>

                <div className={classes.cardsContainer}>
                    <Lifewithprotezcard/>
                    <Lifewithprotezcard/>
                    <Lifewithprotezcard/>
                </div>
            </div>
        </div>
    );
};

export default Lifewithprotez;