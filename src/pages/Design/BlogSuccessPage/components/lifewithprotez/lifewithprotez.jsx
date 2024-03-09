import React from 'react';
import classes from "./lifewithprotez.module.css"
import Lifewithprotezcard from "../lifewithprotezcard/lifewithprotezcard";


const Lifewithprotez = ({title}) => {
    return (
        <div className={classes.blogStorySuccessGeneral}>
            <div className={classes.blogStorySuccessSubGeneral}>
                <h2 className={classes.spanTitleLayout}>{title}</h2>

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