import React from 'react';
import Logo from "./Logo/Logo";
import SpecificProtez from "./SpecificProtez/SpecificProtez";
import BionicProtez from "./BionicProtez/BionicProtez";
import AboutCenterProtez from "./AboutCenterProtez/AboutCenterProtez";
import AboutUs from "./aboutUs/AboutUs";
import PartnerSponsors from "./PartnerSponsors/PartnerSponsors";
import WriteToUs from "./WriteToUs/WriteToUs";
import Footerr from "../UI/Management/Footer/Footerr";
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