import React from 'react';
import classes from './MainPage.module.css'
import Logo from "../components/mainpage/Logo/Logo";
import SpecificProtez from "../components/mainpage/SpecificProtez/SpecificProtez";
import BionicProtez from "../components/mainpage/BionicProtez/BionicProtez";
import AboutCenterProtez from "../components/mainpage/AboutCenterProtez/AboutCenterProtez";
import AboutUs from "../components/mainpage/aboutUs/AboutUs";
import PartnerSponsors from "../components/mainpage/PartnerSponsors/PartnerSponsors";
import WriteToUs from "../components/mainpage/WriteToUs/WriteToUs";
import Footerr from "../components/UI/Footer/Footerr";

const MainPage = () => {
    return (
        <div className={classes.page}>
            <Logo></Logo>
            <SpecificProtez></SpecificProtez>
            <BionicProtez></BionicProtez>
            <AboutCenterProtez></AboutCenterProtez>
            <AboutUs></AboutUs>
            <PartnerSponsors></PartnerSponsors>
            <WriteToUs></WriteToUs>
            <Footerr></Footerr>
        </div>
    );
};

export default MainPage;