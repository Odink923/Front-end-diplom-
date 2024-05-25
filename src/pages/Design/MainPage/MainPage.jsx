import React, {useEffect, useRef, useState} from 'react';
import Logo from "./components/Logo/Logo";
import SpecificProtez from "./components/SpecificProtez/SpecificProtez";
import BionicProtez from "./components/BionicProtez/BionicProtez";
import AboutCenterProtez from "./components/AboutCenterProtez/AboutCenterProtez";
import AboutUs from "./components/aboutUs/AboutUs";
import WriteToUs from "./components/WriteToUs/WriteToUs";
import Footerr from "../UI/Managament/Footer/Footerr";
import {Parallax, ParallaxLayer } from "@react-spring/parallax";
import CustomWaypoint from "../UI/components/CustomWaypoint/CustomWaypoint";
import {useSpring, animated} from "react-spring";
import PartnerSponsors from "./components/PartnerSponsors/PartnerSponsors";
import classes from "./MainPage.module.css"
import NavMenu from "../UI/Managament/NavMenu/NavMenu";
import specificProtez from "./components/SpecificProtez/SpecificProtez";
const MainPage = () => {
    const parallaxRef = useRef();
    const specificProtezRef = useRef();
    const scrollToPage = (pageNumber) => {
        parallaxRef.current.scrollTo(pageNumber);
    };
    const scrollToNextBlock = (pageNumber) => {
        parallaxRef.current.scrollTo(pageNumber);
    };

    return (
        <Parallax ref={parallaxRef} style={{background: "#F2F5FF"}} pages={7}>



            <ParallaxLayer style={{marginTop: "-100px"}} offset={1} factor={10} speed={0}>
                <CustomWaypoint>
                    <SpecificProtez ref={specificProtezRef}></SpecificProtez>
                </CustomWaypoint>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={0.3}>
                <Logo scrollToNextBlock={() => scrollToNextBlock(1)}/>
            </ParallaxLayer>

            <ParallaxLayer offset={2}>
                <CustomWaypoint>
                <AboutCenterProtez></AboutCenterProtez>
                </CustomWaypoint>
            </ParallaxLayer>

            <ParallaxLayer offset={1.9} speed={1.5} factor={1}>
                <BionicProtez/>
            </ParallaxLayer>

            <ParallaxLayer offset={3.5}>
                <PartnerSponsors title="Партнер" role="партнер"></PartnerSponsors>
                <PartnerSponsors title="Спонсор" role="спонсор"></PartnerSponsors>
            </ParallaxLayer>

            <ParallaxLayer offset={2.9}  speed={1.3} >
                <AboutUs></AboutUs>
            </ParallaxLayer>

            <ParallaxLayer offset={5}>
            <WriteToUs title={"ВИ ЗАЦІКАВЛЕНІ У СПІВПРАЦІ ЧИ ПРОСТО ХОЧЕТЕ ПЕРШИМИ ДІЗНАВАТИСЯ ЩО У НАС НОВОГО?"}></WriteToUs>
            <Footerr></Footerr>
            </ParallaxLayer>

            <ParallaxLayer sticky={{start:1, end:6}}  style={{ width:"20%", height:"20%",   top:"252px"}} >
               <NavMenu>
                   <span onClick={()=>scrollToPage(0)}>Інтро</span>
                   <span onClick={()=>scrollToPage(0.9)}>Про⠀протез</span>
                   <span onClick={()=>scrollToPage(1.35)}>Послуги</span>
                   <span onClick={()=>scrollToPage(1.9)} >Наш⠀центр</span>
                   <span onClick={()=>scrollToPage(2.4)}>Відгуки</span>
                   <span onClick={()=>scrollToPage(3.7)}>Партнери</span>
                   <span onClick={()=>scrollToPage(4.8)}>Контакти</span>
               </NavMenu>
            </ParallaxLayer>

        </Parallax>

    );
};

export default MainPage;