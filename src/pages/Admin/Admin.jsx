import React from 'react';
import ToolBar from '../Admin/UI/Management/Toolbar/Toolbar';
import LeftMenu from '../Admin/UI/LeftMenu/LeftMenu';
import classes from './Admin.module.css';
import InboxMessagesList from './InboxPage/Components/InboxMessagesList/InboxMessagesList';
import Users from '../Admin/Users/Users';
import InboxMessageWindow from "./InboxPage/Components/InboxMessageWindow/InboxMessageWindow";
import AdminReply from "./InboxPage/Components/InboxMessageWindow/AdminReply/AdminReply";

const Admin = () => {

    return (
        <div className={classes.general}>
            <ToolBar></ToolBar>

            <div className={classes.menuAndViewBlock}>
                <LeftMenu></LeftMenu>

                {/* тут головні вікна, мб чілдреном */}

                <InboxMessagesList></InboxMessagesList>
            </div>
        </div>
    );
};

export default Admin;