import React from 'react';
import ToolBar from '../Admin/UI/Management/Toolbar/Toolbar';
import LeftMenu from '../Admin/UI/LeftMenu/LeftMenu';
import classes from './Admin.module.css';
import Users from '../Admin/Users/Users';
import InboxMessagesList from "./InboxPage/Components/InboxMessagesList/InboxMessagesList";
import AddVisit from "./Calendar/AddVisit";
import {Outlet, Route, Routes} from "react-router-dom";

const Admin = () => {

    return (
        <div className={classes.general}>



            <ToolBar></ToolBar>

            <div className={classes.menuAndViewBlock}>
                <LeftMenu></LeftMenu>

           <Outlet/>

            </div>
        </div>
    );
};

export default Admin;