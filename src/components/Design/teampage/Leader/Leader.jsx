import React from "react";
import classes from "./Leader.module.css";
import EmployeeCardComponent from "../UI/EmployeeCardComponent/EmployeeCardComponent";

const Leader = () => {
    return(
        <div>
            <h2 className={`${classes.leaderTitle} ${classes.leaderTitleDesign1}`}>лідери</h2>
            <div className={classes.leaderGeneral}>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
                <EmployeeCardComponent src={"#"} fullName={"Ім’я Прізвище"} rank={"Посада"} description={"Короткий опис того за що відповідає Короткий опис того за що відповідає "}/>
            </div>
        </div>
    )
}

export default Leader;