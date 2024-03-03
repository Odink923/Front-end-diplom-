import React, {useRef} from 'react';
import ServicesTitle from "./components/ServicesTitle/ServicesTitle";
import BestOfUs from "./components/BestOfUs/BestOfUs";
import Material from "../ProtezPage/components/Material/Material";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../../../components/Footer/Footerr";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import NavMenu from "../../../components/NavMenu/NavMenu";

const ServicesPage = () => {
    const parallaxRef = useRef();
    const scrollToPage = (pageNumber) => {
        parallaxRef.current.scrollTo(pageNumber);
    };
    return (
        <Parallax ref={parallaxRef} style={{background: "#F2F5FF"}} pages={4.5}>
            <ParallaxLayer offset={0.7}>
                <Material></Material>
            </ParallaxLayer>
            <ParallaxLayer  offset={0} factor={40} speed={4}>
            <ServicesTitle></ServicesTitle>
            </ParallaxLayer>
            <ParallaxLayer offset={2.5}>
            <WriteToUs ></WriteToUs>
            <Footerr></Footerr>
            </ParallaxLayer>
            <ParallaxLayer offset={1.999} speed={1.3}>
                <BestOfUs ></BestOfUs>
            </ParallaxLayer>
            <ParallaxLayer sticky={{start:0.75, end:5.1}}  style={{ width:"20%", height:"20%",   top:"252px"}} >
                <NavMenu>
                    <span onClick={()=>scrollToPage(0)}>Інфо</span>
                    <span onClick={()=>scrollToPage(0.8)}>Послуги</span>
                    <span onClick={()=>scrollToPage(1.444)}>Відгуки</span>
                    <span onClick={()=>scrollToPage(2.3)} >Контакти</span>
                </NavMenu>
            </ParallaxLayer>
        </Parallax>
    );
};

export default ServicesPage;