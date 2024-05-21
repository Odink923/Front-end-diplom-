import React from 'react';
import classes from './LeftMenu.module.css';
import SummaryMenuButtonsType1 from '../Buttons/SummaryMenuButtonsType1/SummaryMenuButtonsType1';
import SummaryMenuButtonsType2 from '../Buttons/SummaryMenuButtonsType2/SummaryMenuButtonsType2';
import TypeBar from "../TypeBar/TypeBar";
import ActivityBar from "../ActivityBar/ActivityBar";
import {NavLink} from "react-router-dom";

const LeftMenu = () => {
    return (
        <div className={classes.general}>
            <div className={classes.subGeneral}>
                <details className={classes.leftMenuDetails}>
                    <summary>Меню</summary>
                    <NavLink to={"/admin/user"}>  <SummaryMenuButtonsType1>Користувачі</SummaryMenuButtonsType1></NavLink>
                    <NavLink to={"/admin/visit"}> <SummaryMenuButtonsType1>Візити</SummaryMenuButtonsType1></NavLink>
                    <SummaryMenuButtonsType1>Вхідні повідомлення</SummaryMenuButtonsType1>
                    <SummaryMenuButtonsType1>Керування контентом</SummaryMenuButtonsType1>
                </details>

                <details className={`${classes.leftMenuDetails}`}>
                    <summary>Повідомлення за темою</summary>
                    <TypeBar></TypeBar>
                </details>

                <details className={`${classes.leftMenuDetails}`}>
                    <summary>Додатково</summary>
                    <ActivityBar></ActivityBar>
                </details>
            </div>
        </div>

    );
};

export default LeftMenu;