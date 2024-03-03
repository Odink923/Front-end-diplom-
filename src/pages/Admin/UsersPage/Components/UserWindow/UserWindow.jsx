import React from 'react';
import classes from './UserWindow.module.css';
import InputPassword from "../UI/InputPassword/InputPassword";
import InputDate from "../UI/InputDate/InputDate";

const UserWindow = () => {
    return (
        <div className={classes.userWindowContainer}>
            <div className={classes.userMetaContainer}>
                <img className={classes.userAvatar}/>
                <div className={classes.userMeta}>
                    <h2>Ім'я Прізвище</h2>
                    <p className={classes.paragraphStyle1}>+380 88 657 45 36</p>
                    <p className={classes.paragraphStyle1}>emailadress@gmail.com</p>
                    <p className={classes.paragraphStyle1}>16092, Харківська область, місто Харків, вул. Урицького, 67</p>
                </div>
            </div>
            <div className={classes.privateInfoContainer}>
                <div className={classes.privateInfoBlock}>
                    <label className={`${classes.paragraphStyle1} ${classes.labelDesign1}`}>Дата народження:</label>
                    <InputDate/>
                </div>

                <div className={classes.privateInfoBlock}>
                    <label className={`${classes.paragraphStyle1} ${classes.labelDesign1}`}>Дата отримання травми:</label>
                    <InputDate/>
                </div>

                <div className={classes.privateInfoBlock}>
                    <label className={`${classes.paragraphStyle1} ${classes.labelDesign1}`}>Пароль:</label>
                    <InputPassword></InputPassword>
                </div>
            </div>
        </div>
    );
};

export default UserWindow;