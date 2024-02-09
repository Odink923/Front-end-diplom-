import React from 'react';
import ToolBar from '../Admin/UI/Management/Toolbar/Toolbar';
import LeftMenu from '../Admin/UI/LeftMenu/LeftMenu';
import classes from './Admin.module.css';
import Inbox from '../Admin/inbox/Inbox';
import Users from '../Admin/Users/Users';

const Admin = () => {

    return (
        <div className={classes.general}>
            <ToolBar></ToolBar>

            <div className={classes.menuAndViewBlock}>
                <LeftMenu></LeftMenu>

                <Users></Users>
            </div>
        </div>
    );
};

export default Admin;