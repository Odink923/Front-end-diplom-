import React, {useRef} from 'react';
import Title from "./components/Title/Title";
import CarrouselProtezPage from "../ProtezPage/components/CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../UI/Managament/Footer/Footerr";
import Stats from "./components/Stats/Stats";
import Invitation from "./components/Invitation/Invitation";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import PartnerSponsors from "./components/PartnerSponsors/PartnerSponsors";
import classes from "./AboutUsPage.module.css"
import NavMenu from "../UI/Managament/NavMenu/NavMenu";

const AboutUsPage = () => {
    const parallaxRef = useRef();
    const scrollToPage = (pageNumber) => {
        parallaxRef.current.scrollTo(pageNumber);
    };
    return (
        <Parallax ref={parallaxRef} style={{background: "#F2F5FF"}} pages={5.1}>

            <ParallaxLayer offset={0.7}>
            <Stats></Stats>
            </ParallaxLayer>

            <ParallaxLayer offset={0} factor={40} speed={4}>
                <Title></Title>
            </ParallaxLayer>

            <ParallaxLayer offset={1.8}>
            <CarrouselProtezPage></CarrouselProtezPage>
            </ParallaxLayer>

            <ParallaxLayer offset={1.4} speed={1.3}>
                <Invitation></Invitation>
            </ParallaxLayer>

            <ParallaxLayer offset={3.3}  >
                <div>
                <WriteToUs></WriteToUs>
                <Footerr></Footerr>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2.999} speed={1.3} >
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
            <ParallaxLayer sticky={{start:0.75, end:5.1}}  style={{ width:"20%", height:"20%",   top:"252px"}} >
                <NavMenu>
                    <span onClick={()=>scrollToPage(0)}>Цілі⠀та⠀цінності</span>
                    <span onClick={()=>scrollToPage(0.7)}>Статистика</span>
                    <span onClick={()=>scrollToPage(1.17)}>Відвідайте⠀центер</span>
                    <span onClick={()=>scrollToPage(2.0)} >Команда</span>
                    <span onClick={()=>scrollToPage(2.44)}>Партнери</span>
                    <span onClick={()=>scrollToPage(2.55)}>Спонсори</span>
                    <span onClick={()=>scrollToPage(3.1)}>Контакти</span>
                </NavMenu>
            </ParallaxLayer>

        </Parallax>

    );
};

export default AboutUsPage;