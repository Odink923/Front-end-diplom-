import React from 'react';
import Logo from "./components/Logo/Logo";
import SpecificProtez from "./components/SpecificProtez/SpecificProtez";
import BionicProtez from "./components/BionicProtez/BionicProtez";
import AboutCenterProtez from "./components/AboutCenterProtez/AboutCenterProtez";
import AboutUs from "./components/aboutUs/AboutUs";
import PartnerSponsors from "./components/PartnerSponsors/PartnerSponsors";
import WriteToUs from "./components/WriteToUs/WriteToUs";
import Footerr from "../../components/Footer/Footerr";


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