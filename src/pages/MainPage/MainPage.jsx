import React, {useRef} from 'react';
import Logo from "./components/Logo/Logo";
import SpecificProtez from "./components/SpecificProtez/SpecificProtez";
import BionicProtez from "./components/BionicProtez/BionicProtez";
import AboutCenterProtez from "./components/AboutCenterProtez/AboutCenterProtez";
import AboutUs from "./components/aboutUs/AboutUs";
import PartnerSponsors from "./components/PartnerSponsors/PartnerSponsors";
import WriteToUs from "./components/WriteToUs/WriteToUs";
import Footerr from "../../components/Footer/Footerr";
import DropDownList from "../../components/DropDownList/DropDownList";
import classes from "./MainPage.module.css"

import {Parallax, ParallaxLayer } from "@react-spring/parallax";



const MainPage = () => {
    const parallax = useRef(null)
    return (

        <div >

            <Parallax  ref={parallax}
                       className={classes.par} pages={3}>
                <ParallaxLayer offset={0} speed={0.3}>
                    {/* Content for BionicProtez */}
                    <Logo></Logo>

                </ParallaxLayer>
                <ParallaxLayer style={{ marginTop:"-100px"}} offset={1} factor={10} speed={0}>
                    {/* Content for BionicProtez */}

                    <SpecificProtez />
                </ParallaxLayer>

                <ParallaxLayer offset={1.9}   speed={1.5}>
                    {/* Content for SpecificProtez */}
                    <BionicProtez />
                </ParallaxLayer>
            </Parallax>



            {/*<AboutCenterProtez></AboutCenterProtez>*/}
            {/*<AboutUs></AboutUs>*/}
            {/*<div className="partnerSponsors">*/}
            {/*    <PartnerSponsors title="Партнер" role="партнер"></PartnerSponsors>*/}
            {/*    <PartnerSponsors title="Спонсор" role="спонсор"></PartnerSponsors>*/}
            {/*</div>*/}

        </div>
    );
};

export default MainPage;