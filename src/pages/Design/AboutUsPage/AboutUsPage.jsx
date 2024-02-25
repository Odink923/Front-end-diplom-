import React, {useRef} from 'react';
import Title from "./components/Title/Title";
import CarrouselProtezPage from "../ProtezPage/components/CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../../../components/Footer/Footerr";
import Stats from "./components/Stats/Stats";
import Invitation from "./components/Invitation/Invitation";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import PartnerSponsors from "./components/PartnerSponsors/PartnerSponsors";
import classes from "./AboutUsPage.module.css"
import NavMenu from "../../../components/NavMenu/NavMenu";

const AboutUsPage = () => {
    const parallaxRef = useRef();
    const scrollToPage = (pageNumber) => {
        parallaxRef.current.scrollTo(pageNumber);
    };
    return (
        <Parallax ref={parallaxRef} style={{background: "#F2F5FF"}} pages={5.1}>


            <ParallaxLayer offset={0.5}>
            <Stats></Stats>
            </ParallaxLayer>

            <ParallaxLayer offset={0} speed={4}>
                <Title></Title>
            </ParallaxLayer>

            <ParallaxLayer offset={1.5}>
            <CarrouselProtezPage></CarrouselProtezPage>
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={1.3}>
                <Invitation></Invitation>
            </ParallaxLayer>

            <ParallaxLayer offset={3.1}  >
                <div>
                <WriteToUs></WriteToUs>
                <Footerr></Footerr>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.9} speed={1.3} >
                <div className={classes.gradient}>
                    <PartnerSponsors title="ПАРТНЕРИ" role="партнером" description="Для
                 зручності наших пацієнтів ми співпрацюємо більш ніж з десятьма клініками України.
                 Ми прагнемо зробити наші послуги доступними для всіх, хто їх потребує.
                 Можливо саме ви можете допомогти нам наблизитися до мети."></PartnerSponsors>
                    <PartnerSponsors title="СПОНСОРИ" role="спонсором" description="Для
                 зручності наших пацієнтів ми співпрацюємо більш ніж з десятьма клініками України.
                 Ми прагнемо зробити наші послуги доступними для всіх, хто їх потребує.
                 Можливо саме ви можете допомогти нам наблизитися до мети."></PartnerSponsors>
                </div>
            </ParallaxLayer>
            <ParallaxLayer sticky={{start:0.8, end:5.1}}  style={{ width:"20%", height:"20%",   top:"252px"}} >
                <NavMenu>
                    <span onClick={()=>scrollToPage(0)}>Цілі⠀та⠀цінності</span>
                    <span onClick={()=>scrollToPage(0.5)}>Статистика</span>
                    <span onClick={()=>scrollToPage(1)}>Відвідайте⠀центер</span>
                    <span onClick={()=>scrollToPage(1.5)} >Команда</span>
                    <span onClick={()=>scrollToPage(2.9)}>Партнери</span>
                    <span onClick={()=>scrollToPage(3.0)}>Спонсори</span>
                    <span onClick={()=>scrollToPage(3.1)}>Контакти</span>
                </NavMenu>
            </ParallaxLayer>

        </Parallax>

    );
};

export default AboutUsPage;