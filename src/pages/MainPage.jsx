import Logo from "../components/mainpage/Logo/Logo";
import SpecificProtez from "../components/mainpage/SpecificProtez/SpecificProtez";
import BionicProtez from "../components/mainpage/BionicProtez/BionicProtez";
import AboutCenterProtez from "../components/mainpage/AboutCenterProtez/AboutCenterProtez";
import AboutUs from "../components/mainpage/aboutUs/AboutUs";
import PartnerSponsors from "../components/mainpage/PartnerSponsors/PartnerSponsors";
import WriteToUs from "../components/mainpage/WriteToUs/WriteToUs";
import Footerr from "../components/UI/Footer/Footerr";
import {useEffect, useState} from "react";


const MainPage = () => {


//please dont delete)
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