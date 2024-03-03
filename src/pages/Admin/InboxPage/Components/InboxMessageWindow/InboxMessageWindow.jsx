import React from 'react';
import classes from "./InboxMessageWindow.module.css";
import UserReply from "./UserReply/UserReply";
import AdminReply from "./AdminReply/AdminReply";

const InboxMessageWindow = () => {
    return (
        <div className={classes.messageWindowContainer}>
            <UserReply></UserReply>
            <AdminReply></AdminReply>
        </div>
    );
};

export default InboxMessageWindow;