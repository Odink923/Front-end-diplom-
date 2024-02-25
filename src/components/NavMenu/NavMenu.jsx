import React from 'react';
import classes from "./NavMenu.module.css"

const NavMenu = ({children}) => {
    return (
        <div className={classes.container}>
            <div style={{display:"flex"}}>
            <div className={classes.containerContent}>
                {children}
            </div>
            <div >
                <div className={classes.gradient}></div>
            </div>
            </div>
        </div>
    );
};

export default NavMenu;