import React, {useState} from 'react';
import classes from './ElementMessage.module.css';


const ElementMessage = (message) => {

    const [isChecked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    }

    return (
        <div className={classes.general} style={{ background: isChecked ? "#DAE4FF" : "#F3F6FF"}}>
            <input type="checkbox" className={classes.customCheckBox} id="message" name="message" onChange={handleCheckboxChange}/>

            <div className={classes.senderNamePart}>{message.name}</div>
            <div className={classes.messageThemePart}>{message.theme}</div>
            <div className={classes.messageTextPart}>{message.text}</div>
            <div className={classes.messageDatePart}>{message.date}</div>
        </div>
    );
};

export default ElementMessage;