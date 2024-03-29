import React from 'react';
import LogoNews from "./components/LogoNews/LogoNews";
import StoriesBlock from "../BlogArticlePage/components/StoriesBlock/StoriesBlock";
import AboutUs from "../MainPage/components/aboutUs/AboutUs";
import AboutUsMedia from "./components/AboutUsMedia/AboutUsMedia";
import classes from "../BlogPage/BlogPage.module.css";
import EmployeeCardComponent from "../TeamPage/components/UI/EmployeeCardComponent/EmployeeCardComponent";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../UI/Managament/Footer/Footerr";

const BlogPageNews = () => {
    return (
        <div>
            <LogoNews></LogoNews>
            <StoriesBlock></StoriesBlock>
            <AboutUsMedia></AboutUsMedia>
            <div style={{marginTop:"150px"}} className={classes.containerForCards}>
                <EmployeeCardComponent src={"#"} fullName={"Історії успіху"}
                                       description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Статті"}
                                       description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Новини"}
                                       description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
            </div>
            <div style={{marginTop:"150px"}}>
            <WriteToUs></WriteToUs>
            </div>
            <Footerr></Footerr>
        </div>
    );
};

export default BlogPageNews;