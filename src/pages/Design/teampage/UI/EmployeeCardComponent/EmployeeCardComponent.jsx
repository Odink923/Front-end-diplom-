import React from 'react';
import classes from "./EmployeeCardComponent.module.css"

const EmployeeCardComponent = (props) => {


    return (
        <div className={classes.cardGeneral}>
            <img src={props.src} className={classes.cardImage} height={425} width={455}/>
            <h4 className={classes.cardTitle1}>{props.fullName}</h4>
            <h5 className={classes.cardTitle2}>{props.rank}</h5>
            <p className={classes.cardParagraph1}>{props.description}</p>
        </div>
    );
};

export default EmployeeCardComponent;