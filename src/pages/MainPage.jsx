import React from 'react';
import classes from './MainPage.module.css'
import Logo from "../components/mainpage/Logo/Logo";
import SpecificProtez from "../components/mainpage/SpecificProtez/SpecificProtez";
import ViewMoreButton from "../components/UI/ViewMoreButton/ViewMoreButton";

const MainPage = () => {
    return (
        <div className={classes.page}>
            <Logo></Logo>
            <SpecificProtez></SpecificProtez>
            {/*<ViewMoreButton></ViewMoreButton>*/}
        </div>
    );
};

export default MainPage;