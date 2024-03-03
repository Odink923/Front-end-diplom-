import React from 'react';
import classes from '../../UI/reply.module.css';
import ForwardButton from "../../../../UI/Buttons/ForwardButton/ForwardButton";

const AdminReply = () => {
    return (
        <div className={`${classes.replyContainer} ${classes.adminContainer}`}>
            <div className={classes.replyContent}>
                <div className={classes.headerAndDateBlock}>
                    <h2 className={classes.header1}>Рекрутинг</h2>
                    <p>13.02.23 12:34</p>
                </div>

                <div className={classes.replyFromToSignContainer}>
                    <div className={classes.replyFromToSign}>
                        <h2 className={classes.header2}>Admin</h2>
                        <p>emailaddress@gmail.com</p>
                    </div>
                    <div className={classes.replyFromToSign}>
                        <div className={classes.replyToBlock}>
                            <p>кому:</p>
                            <h2 className={classes.header2} style={{marginLeft: "11px"}}>Ім'я Прізвище</h2>
                        </div>
                        <p>emailaddress@gmail.com</p>
                    </div>
                </div>
                <div className={classes.replyTextContainer}>
                    <p className={classes.paragraph3}>Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення. Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення.</p>
                </div>

                <div className={`${classes.buttonsContainer} ${classes.buttonsAdminContainer}`}>
                    <ForwardButton>Переслати</ForwardButton>
                </div>
            </div>

        </div>
    );
};

export default AdminReply;