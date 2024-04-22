import React, {useContext} from 'react';
import classes from "../ElementUser/ElementUser.module.css";
import UserVisitButton from "../ElementUser/UserVisitButton/UserVisitButton";


const ElementVisit = ({...appointment}) => {
    return (
        <div className={classes.general}>
            <img className={classes.avatarPart} src={appointment.avatar}/>
            <div className={classes.namePart}>{appointment.name}</div>
            <div className={classes.mailPart}>{appointment.date}</div>
            <div className={classes.phonePart}>{appointment.dateTime}</div>
            <div className={classes.phonePart}>{appointment.nameDoctor}</div>
            <div className={classes.addressPart}>{appointment.address}</div>
            <UserVisitButton text="Заплановано"></UserVisitButton>
        </div>
    );
};

export default ElementVisit;