import React, {useRef} from 'react';
import TeamTitle from "./components/TeamTitle/TeamTitle";
import DoctorRehabilitation from "./components/DoctorRehabilitation/DoctorRehabilitation";
import Leader from "./components/Leader/Leader";
import EmployeeCardComponent from "./components/UI/EmployeeCardComponent/EmployeeCardComponent";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../UI/Managament/Footer/Footerr";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import NavMenu from "../UI/Managament/NavMenu/NavMenu";


const TeamPage = () => {
    const parallaxRef = useRef();
    const scrollToPage = (pageNumber) => {
        parallaxRef.current.scrollTo(pageNumber);
    };
    return (

            <Parallax ref={parallaxRef} style={{background: "#F2F5FF"}} pages={5.5}>

                <ParallaxLayer offset={0.7}>
            <Leader>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
            </Leader>

                </ParallaxLayer>
                <ParallaxLayer  offset={0} factor={40} speed={4}>
                    <TeamTitle></TeamTitle>
                </ParallaxLayer>
                <ParallaxLayer offset={1.6}>
            <Leader>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
            </Leader>
                </ParallaxLayer>

                <ParallaxLayer offset={3.5}>
                    <div>
            <WriteToUs></WriteToUs>
            <Footerr></Footerr>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer  style={{marginTop:"700px"}} offset={2.9} speed={1.1}>
                    <DoctorRehabilitation></DoctorRehabilitation>
                </ParallaxLayer>

                <ParallaxLayer sticky={{start:0.75, end:5.1}}  style={{ width:"20%", height:"20%",   top:"252px"}} >
                    <NavMenu>
                        <span onClick={()=>scrollToPage(0)}>Ми</span>
                        <span onClick={()=>scrollToPage(0.7)}>Лідери</span>
                        <span onClick={()=>scrollToPage(1.6)}>Персонал</span>
                        <span onClick={()=>scrollToPage(2.777)} >Вакансії</span>
                        <span onClick={()=>scrollToPage(3.3)}>Контакти</span>

                    </NavMenu>
                </ParallaxLayer>
            </Parallax>

    );
};

export default TeamPage;