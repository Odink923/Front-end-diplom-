import React, {useRef, useState} from 'react';
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
import {useSpring,animated} from "react-spring";
import {Waypoint} from "react-waypoint";
import CustomWaypoint from "../../components/CustomWaypoint/CustomWaypoint";

const MainPage = () => {
    const parallaxRef = useRef();
    const scrollToPage = (pageNumber) => {
        parallaxRef.current.scrollTo(pageNumber);
    };
    return (
        <Parallax ref={parallaxRef} style={{background: "#F2F5FF"}} pages={6}>
            <ParallaxLayer offset={0} speed={0.3}>
                <Logo/>
            </ParallaxLayer>
            <ParallaxLayer style={{marginTop: "-100px"}} offset={1} factor={10} speed={0}>
                <CustomWaypoint>
                    <SpecificProtez></SpecificProtez>
                </CustomWaypoint>
            </ParallaxLayer>
            <ParallaxLayer offset={2}>
                <CustomWaypoint>
                <AboutCenterProtez ></AboutCenterProtez>
                </CustomWaypoint>
            </ParallaxLayer>
            <ParallaxLayer offset={1.9} speed={1.5} factor={1}>
                <BionicProtez/>
            </ParallaxLayer>
            <ParallaxLayer offset={2.9}  speed={1.3} >
                <AboutUs></AboutUs>
            </ParallaxLayer>
            <ParallaxLayer offset={4}>
            <WriteToUs></WriteToUs>
            <Footerr></Footerr>
            </ParallaxLayer>

        </Parallax>
    );
};

export default MainPage;