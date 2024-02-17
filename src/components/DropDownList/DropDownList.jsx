import React from 'react';
import classes from "./DropDownList.module.css";


const DropDownList = ({children}) => {
    return (
        <div  className={classes.gradient}>
            <div className={classes.content}>
                <div className={classes.leftItems}>
                    {children}
                </div>
            </div>

        </div>
    );
};

export default DropDownList;