import React from 'react';
import classes from './MainPage.module.css'
import Logo from "../components/mainpage/Logo/Logo";
import SpecificProtez from "../components/mainpage/SpecificProtez/SpecificProtez";
import ViewMoreButton from "../components/UI/ViewMoreButton/ViewMoreButton";
import BionicHandle from "../components/protezpage/BionicHandle/BionicHandle";

const MainPage = () => {
    return (
        <div className={classes.page}>
            {/*<Logo></Logo>*/}
            {/*<SpecificProtez></SpecificProtez>*/}
            <BionicHandle></BionicHandle>
        </div>
    );
};

export default MainPage;