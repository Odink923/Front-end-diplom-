import React from 'react';
import LogoBlog from "../BlogPage/components/LogoBlog/LogoBlog";
import StoriesBlock from "../BlogArticlePage/components/StoriesBlock/StoriesBlock";
import Lifewithprotez from "./components/lifewithprotez/lifewithprotez";
import classes from "../BlogPage/BlogPage.module.css";
import EmployeeCardComponent from "../TeamPage/components/UI/EmployeeCardComponent/EmployeeCardComponent";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../UI/Managament/Footer/Footerr";

const BlogSuccessPage = () => {
    return (
        <div>
            <LogoBlog></LogoBlog>
            <StoriesBlock></StoriesBlock>
            <Lifewithprotez title="життя з протезом"></Lifewithprotez>
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

export default BlogSuccessPage;