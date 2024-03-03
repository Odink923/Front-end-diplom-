import React, {useRef} from 'react';
import LogoBlog from "./components/LogoBlog/LogoBlog";
import ToKnowBlock from "./components/ToKnowBlock/ToKnowBlock";
import ToKnowBlockOther from "./components/ToKnowBlockOther/ToKnowBlockOther";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import EmployeeCardComponent from "../TeamPage/components/UI/EmployeeCardComponent/EmployeeCardComponent";
import classes from "./BlogPage.module.css"
import AboutUs from "../MainPage/components/aboutUs/AboutUs";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../../../components/Footer/Footerr";
import NavMenu from "../../../components/NavMenu/NavMenu";
const BlogPage = () => {
    const parallaxRef = useRef();
    const scrollToPage = (pageNumber) => {
        parallaxRef.current.scrollTo(pageNumber);
    };
    return (
        <Parallax ref={parallaxRef} style={{background: "#F2F5FF"}} pages={6.3}>
            <ParallaxLayer  offset={0.9}>
                <div className={classes.containerForCards}>
                    <EmployeeCardComponent src={"#"} fullName={"Історії успіху"}
                                       description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                    <EmployeeCardComponent src={"#"} fullName={"Статті"}
                                           description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                    <EmployeeCardComponent src={"#"} fullName={"Новини"}
                                           description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} factor={40} speed={4}>
                <LogoBlog></LogoBlog>
            </ParallaxLayer>

            <ParallaxLayer offset={1.5}>
                <ToKnowBlock></ToKnowBlock>
            </ParallaxLayer>
            <ParallaxLayer offset={2.7}>
            <ToKnowBlockOther></ToKnowBlockOther>
            </ParallaxLayer>

            <ParallaxLayer offset={4.3}>
                <WriteToUs></WriteToUs>
                <Footerr></Footerr>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={1.5}>
                <AboutUs></AboutUs>
            </ParallaxLayer>

            <ParallaxLayer sticky={{start:0.75, end:5.1}}  style={{ width:"20%", height:"20%",   top:"252px"}} >
                <NavMenu>
                    <span onClick={()=>scrollToPage(0)}>Історія⠀місяця</span>
                    <span onClick={()=>scrollToPage(0.6)}>Пошук</span>
                    <span onClick={()=>scrollToPage(0.7)}>Категорії</span>
                    <span onClick={()=>scrollToPage(1.6)} >Статті</span>
                    <span onClick={()=>scrollToPage(2.5)}>Новини</span>
                    <span onClick={()=>scrollToPage(3.0)}>Відгуки</span>
                    <span onClick={()=>scrollToPage(4.1)}>Контакти</span>
                </NavMenu>
            </ParallaxLayer>
        </Parallax>


    );
};

export default BlogPage;