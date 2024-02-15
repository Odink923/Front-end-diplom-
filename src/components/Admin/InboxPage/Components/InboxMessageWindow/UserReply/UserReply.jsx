import React from 'react';
import classes from '../UI/reply.module.css';
import AnswerButton from "../../../../UI/Buttons/AnswerButton/AnswerButton";
import ForwardButton from "../../../../UI/Buttons/ForwardButton/ForwardButton";

const UserReply = () => {
    return (
        <div className={`${classes.replyContainer} ${classes.userContainer}`}>
            <div className={classes.replyContent}>
                <div className={classes.headerAndDateBlock}>
                    <h2 className={classes.header1}>Рекрутинг</h2>
                    <p>13.02.23 12:34</p>
                </div>
                <h2 className={classes.header2}>Ім'я Прізвище</h2>
                <p>emailaddress@gmail.com</p>
                <div className={classes.specializationBlock}>
                    <div className={classes.paragraph2}>Спеціалізація:</div>
                    <div className={classes.paragraph3}>Реабілітолог</div>
                </div>
                <p className={classes.paragraph3}>
                    Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення.
                </p>

                <div className={classes.filesList}>
                    {/*Тут буде реюз компонент прев'юшки файлу*/}
                </div>

                <div className={`${classes.buttonsContainer} ${classes.buttonUserContainer}`}>
                    <div><AnswerButton>Відповісти</AnswerButton></div>
                    <div className={classes.forwardButtonBlock}><ForwardButton>Переслати</ForwardButton></div>
                </div>
            </div>
        </div>
    );
};

export default UserReply;