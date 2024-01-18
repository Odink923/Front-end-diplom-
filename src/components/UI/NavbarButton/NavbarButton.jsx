import React from 'react';
import classes from "./NavbarButton.module.css";

const NavbarButton = ({property1}) => {
    return (
        <div className={classes.textWrapper3}>
            {property1}
        </div>
    );
};

export default NavbarButton;