import React from 'react';
import classes from './Footer.module.css'
import Navbar from "../Navbar/Navbar";
import NavbarButton from "../../Buttons/NavbarButton/NavbarButton";
import LogoSvgComp from "../../../../../images/SvgComponents/LogoSvgComp";
const Footer = () => {
    return (
        <div className={classes.futter}>
            <div className={classes.futterContent}>
                <div className={classes.titleContent}>
                    <div className={classes.title}>СЛОГАН БАЖАЄТЕ ПЕРШИМИ ДІЗНАВАТИСЯ</div>
                    <LogoSvgComp></LogoSvgComp>
                </div>
                <div className={classes.contact}>
                    <div className={classes.contactContent}>
                        <div className={classes.contactItems}>
                            <div>+380 99 875 65 67</div>
                            <div>GETProsthetics@gmail.com</div>
                            <div>Київ, вул. Калачівська, 13 (Стара Дарниця)</div>
                        </div>
                    </div>
                    <div className={classes.socialMedia}>
                        <div>
                        ( INSTAGRAM )
                        </div>
                        <div>
                            ( FACEBOOK )
                        </div>
                        <div>
                            ( LINKEDIN )
                        </div>
                    </div>
                </div>
                <div className={classes.navFutter}>
                    <div className={classes.navFutterContent}>
                        <NavbarButton property1={"Про нас"} link={"/aboutUsPage"} blackWhite={true}/>
                        <NavbarButton property1={"Послуги"} link={"/servicesPage"} blackWhite={true}/>
                        <NavbarButton property1={"Блог"} link={"/blog"} blackWhite={true}/>
                        <NavbarButton property1={"FAQ"} link={"/faqpage"} blackWhite={true}/>
                        <NavbarButton property1={"En/Ua"} link={"/EuUa"} blackWhite={true}/>
                        <NavbarButton property1={"Увійти"} link={"/login"} blackWhite={true}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;