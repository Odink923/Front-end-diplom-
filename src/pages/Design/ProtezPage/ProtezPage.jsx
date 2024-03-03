import React, {Profiler, useRef} from 'react';
import CarrouselProtezPage from "./components/CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../../../components/Footer/Footerr";
import BionicHandle from "./components/BionicHandle/BionicHandle";
import Material from "./components/Material/Material";
import Profile from "./components/profile/Profile";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import NavMenu from "../../../components/NavMenu/NavMenu";


const ProtezPage = () => {

    const parallaxRef = useRef();
    const scrollToPage = (pageNumber) => {
        parallaxRef.current.scrollTo(pageNumber);
    };

    return (
        <Parallax ref={parallaxRef} style={{background: "#F2F5FF"}} pages={5.5}>

            <ParallaxLayer offset={0.7}>
            <Material></Material>
            </ParallaxLayer>

            <ParallaxLayer offset={0} factor={40} speed={4}>
                <BionicHandle></BionicHandle>
            </ParallaxLayer>

            <ParallaxLayer offset={1.7}>
            <CarrouselProtezPage></CarrouselProtezPage>
            </ParallaxLayer>

            <ParallaxLayer offset={3.5}>
                <div>
            <WriteToUs></WriteToUs>
            <Footerr></Footerr>
                </div>
            </ParallaxLayer>

            <ParallaxLayer  speed={1.3} offset={2.8}>
                <Profile></Profile>
            </ParallaxLayer>
            <ParallaxLayer sticky={{start:0.9, end:5.5}}  style={{ width:"20%", height:"20%", right:"0px",  top:"252px"}} >
                <NavMenu >
                    <span onClick={()=>scrollToPage(0)}>Інтро</span>
                    <span onClick={()=>scrollToPage(0.6)}>Переваги</span>
                    <span onClick={()=>scrollToPage(1.676)}>12⠀стискань</span>
                    <span onClick={()=>scrollToPage(2.353)} >Кабінет</span>
                    <span onClick={()=>scrollToPage(3.33)}>Контакти</span>

                </NavMenu>
            </ParallaxLayer>
        </Parallax>
    );
};

export default ProtezPage;