import React from 'react';
import BionicProtez from "../components/mainpage/BionicProtez/BionicProtez";
import AboutCenterProtez from "../components/mainpage/AboutCenterProtez/AboutCenterProtez";
import PartnerSponsors from "../components/mainpage/PartnerSponsors/PartnerSponsors";
import WriteToUs from "../components/mainpage/WriteToUs/WriteToUs";
import Footer from "../components/UI/Footer/Footer";

const MainPage = () => {
    return (
        <div>
            <AboutCenterProtez></AboutCenterProtez>
            <BionicProtez></BionicProtez>
            <PartnerSponsors title="Спонсор" role="спонсор"></PartnerSponsors>
            <WriteToUs></WriteToUs>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;