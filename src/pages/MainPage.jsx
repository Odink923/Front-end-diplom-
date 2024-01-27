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



    return (
        <div >
            <div className="container">
                <section>
            <SpecificProtez></SpecificProtez>
                </section>
                <section>
            <BionicProtez ></BionicProtez>
                </section>
                <section >
            <AboutCenterProtez></AboutCenterProtez>
                </section>
                <section>
                    <AboutUs></AboutUs>
                </section>
                <section>
                    <PartnerSponsors title="Партнер" role="партнер"></PartnerSponsors>
                    <PartnerSponsors title="Спонсор" role="спонсор"></PartnerSponsors>
                </section>
                <section>
                    <WriteToUs></WriteToUs>
                </section>
                <section>
                    <Footerr></Footerr>
                </section>

            </div>
        </div>
    );
};

export default MainPage;