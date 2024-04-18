import React from 'react';
import ToolBar from '../Admin/UI/Management/Toolbar/Toolbar';
import LeftMenu from '../Admin/UI/LeftMenu/LeftMenu';
import classes from './Admin.module.css';
import Users from '../Admin/Users/Users';

const Admin = () => {

    return (
        <div className={classes.general}>
            <ToolBar></ToolBar>

            <div className={classes.menuAndViewBlock}>
                <LeftMenu></LeftMenu>

                {/* тут головні вікна, мб чілдреном */}

                <Users visit={true}></Users>
            </div>
        </div>
    );
};

export default Admin;