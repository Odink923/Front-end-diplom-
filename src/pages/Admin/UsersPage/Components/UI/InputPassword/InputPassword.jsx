import React from 'react';
import classes from "./InputPassword.module.css";
import IconsManager from "../../../../UI/Icons/IconsManager";

const InputPassword = () => {



    return (
        <div className={classes.container}>
            <input type="password" name="password" className={classes.passwordField}/>
            <button className={classes.visiblePasswordButton}><IconsManager iconId="16"/></button>
        </div>
    );
};

export default InputPassword;