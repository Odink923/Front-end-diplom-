import React from 'react';
import Logo from "../components/Design/mainpage/Logo/Logo";
import SpecificProtez from "../components/Design/mainpage/SpecificProtez/SpecificProtez";
import BionicProtez from "../components/Design/mainpage/BionicProtez/BionicProtez";
import AboutCenterProtez from "../components/Design/mainpage/AboutCenterProtez/AboutCenterProtez";
import AboutUs from "../components/Design/mainpage/aboutUs/AboutUs";
import PartnerSponsors from "../components/Design/mainpage/PartnerSponsors/PartnerSponsors";
import WriteToUs from "../components/Design/mainpage/WriteToUs/WriteToUs";
import Footerr from "../components/Design/UI/Management/Footer/Footerr";
import {useEffect, useState} from "react";


const MainPage = () => {
    return (

        <div>
            <Logo></Logo>
            <SpecificProtez></SpecificProtez>
            <BionicProtez></BionicProtez>
            <AboutCenterProtez></AboutCenterProtez>
            <AboutUs></AboutUs>
            <div className="partnerSponsors">
                <PartnerSponsors title="Партнер" role="партнер"></PartnerSponsors>
                <PartnerSponsors title="Спонсор" role="спонсор"></PartnerSponsors>
            </div>
            <WriteToUs></WriteToUs>
            <Footerr></Footerr>
        </div>
    );
};

export default MainPage;