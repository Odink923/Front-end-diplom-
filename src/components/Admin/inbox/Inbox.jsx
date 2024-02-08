import React from 'react';
import ToolBar from '../UI/Toolbar/Toolbar';
import LeftMenu from '../UI/LeftMenu/LeftMenu'
import classes from './Inbox.module.css';
import ElementMessage from '../UI/ElementMessage/ElementMessage'

const Inbox = () => {

    const messages = [
        {
            name: "Andrea",
            theme: "Партнерство",
            text: "Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомленн...",
            date: "23.33.22"
        },
        {
            name: "Andrea",
            theme: "Партнерство",
            text: "Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомленн...",
            date: "23.33.22"
        },
        {
            name: "Andrea",
            theme: "Партнерство",
            text: "Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомленн...",
            date: "23.33.22"
        },
        {
            name: "Andrea",
            theme: "Партнерство",
            text: "Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомленн...",
            date: "23.33.22"
        },
        {
            name: "Andrea",
            theme: "Партнерство",
            text: "Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомленн...",
            date: "23.33.22"
        },
        {
            name: "Andrea Overdovermoverpower",
            theme: "Потенційні клієнти",
            text: "Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомленн...",
            date: "23.33.22"
        },
        {
            name: "Andrea Overdovermoverpower",
            theme: "Потенційні клієнти",
            text: "Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомленн...",
            date: "23.33.22"
        },
        {
            name: "Andrea Overdovermoverpower",
            theme: "Потенційні клієнти",
            text: "Якесь повідомлення якесь повідомлення якесь повідомленняякесь повідомлення якесь повідомлення якесь повідомлення якесь повідомлення якесь повідомленн...",
            date: "23.33.22"
        }
    ]

    return (
        <div className={classes.inboxGeneral}>
            <ToolBar></ToolBar>

            <div className={classes.menuAndViewBlock}>
                <LeftMenu></LeftMenu>

                <div className={classes.messagesListContainer}>
                    {messages.map((message) => (
                        <ElementMessage name={message.name} theme={message.theme} text={message.text} date={message.date}></ElementMessage>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Inbox;