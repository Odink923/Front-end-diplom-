import React, {useRef} from 'react';
import BlogArticleTitle from "./components/BlogArticleTitle/BlogArticleTitle";
import StoriesBlock from "./components/StoriesBlock/StoriesBlock";
import classes from "../BlogPage/BlogPage.module.css";
import EmployeeCardComponent from "../TeamPage/components/UI/EmployeeCardComponent/EmployeeCardComponent";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../UI/Managament/Footer/Footerr";
import NavMenu from "../UI/Managament/NavMenu/NavMenu";
import LogoBlog from "../BlogPage/components/LogoBlog/LogoBlog";

const BlogArticlePage = () => {
    const parallaxRef = useRef();
    const scrollToPage = (pageNumber) => {
        parallaxRef.current.scrollTo(pageNumber);
    };
    return (
        <Parallax ref={parallaxRef} style={{background: "#F2F5FF"}} pages={6.5}>

            <ParallaxLayer offset={0.7}>
            <StoriesBlock></StoriesBlock>
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

            <ParallaxLayer offset={4.5}>
                <div>
                    <WriteToUs></WriteToUs>
                    <Footerr></Footerr>
                </div>
            </ParallaxLayer>
            <ParallaxLayer sticky={{start:0.75, end:4.4}}  style={{ width:"20%", height:"20%",   top:"252px"}} >
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

export default BlogArticlePage;