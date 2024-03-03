import React from "react";
import classes from "./Leader.module.css";
import EmployeeCardComponent from "../UI/EmployeeCardComponent/EmployeeCardComponent";

const Leader = ({children}) => {
    return(
        <div>
            <h2 className={`${classes.leaderTitle} ${classes.leaderTitleDesign1}`}>лідери</h2>
            <div className={classes.leaderGeneral}>
                {children}
            </div>
        </div>
    )
}

export default Leader;