import React from 'react';
import classes from './ElementUser.module.css';
import IconsManager from '../../Icons/IconsManager';
const ElementUser = (user) => {
    return (
        <div className={classes.general}>
            <img className={classes.avatarPart} src={user.avatar}/>
            <div className={classes.namePart}>{user.name}</div>
            <div className={classes.mailPart}>{user.mail}</div>
            <div className={classes.phonePart}>{user.phone}</div>
            <div className={classes.addressPart}>{user.address}</div>
            <button className={classes.chatButton}><IconsManager iconId="12"/></button>
        </div>
    );
};

export default ElementUser;