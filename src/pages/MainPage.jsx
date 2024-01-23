import React from 'react';
import classes from './MainPage.module.css'
import Logo from "../components/mainpage/Logo/Logo";
import SpecificProtez from "../components/mainpage/SpecificProtez/SpecificProtez";
import ViewMoreButton from "../components/UI/ViewMoreButton/ViewMoreButton";
import BionicHandle from "../components/page2/BionicHandle/BionicHandle";
import BionicProtez from "../components/mainpage/BionicProtez/BionicProtez";

const MainPage = () => {
    return (
        <div className={classes.page}>
            <BionicProtez></BionicProtez>

        </div>
    );
};

export default MainPage;