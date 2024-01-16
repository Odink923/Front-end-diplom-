import React from 'react';
import classes from './WriteToUs.module.css'
const WriteToUs = () => {
    return (
        <div className={classes.all}>
            <div className={classes.title}>
                ВИ ЗАЦІКАВЛЕНІ У СПІВПРАЦІ ЧИ ПРОСТО ХОЧЕТЕ ПЕРШИМИ ДІЗНАВАТИСЯ ЩО У НАС НОВОГО?
            </div>
            <div className={classes.formContent}>
                <div className={classes.rightTitle}>
                Напишіть нам:
                </div>
                <div>
                    <input placeholder="Ім’я та прізвище*" className={classes.formInput}/>
                </div>
                <div>
                    <input placeholder="Електронна адреса*" className={classes.formInput}/>
                </div>
                <div>
                    <input placeholder="Тема звернення*" className={classes.formInput}/>
                </div>
                <div >
                    <textarea  placeholder="Ваше повідомлення"  className={`${classes.formInput} ${classes.userInput}`}/>
                </div>
            </div>
            <div className={classes.rightItems}>

            </div>
        </div>
    );
};

export default WriteToUs;