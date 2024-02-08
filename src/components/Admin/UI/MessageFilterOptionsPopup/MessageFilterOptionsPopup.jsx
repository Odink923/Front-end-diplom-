import React from 'react';
import classes from './MessageFilterOptionsPopup.module.css'

function MessageFilterOptionsPopup(props) {
    return (props.trigger) ? (
        <div className={classes.popupContainer}>
            <button className={classes.popupButton} onClick={() => props.setTrigger(false)} style={{borderRadius: "6px 6px 0px 0px"}}>Вибрати всі</button>
            <button className={classes.popupButton} onClick={() => props.setTrigger(false)}>Непрочитані</button>
            <button className={classes.popupButton} onClick={() => props.setTrigger(false)} style={{borderRadius: "0px 0px 6px 6px"}}>Прочитані</button>
        </div>
    ) : "";
};

export default MessageFilterOptionsPopup;