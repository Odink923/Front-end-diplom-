import React from 'react';
import classes from "./NavbarButton.module.css";

const NavbarButton = ({property1, onHover, onMouseLeave}) => {
    return (
        <div className={classes.textWrapper3} onMouseOver={onHover} onMouseLeave={onMouseLeave}>
            {property1}
        </div>
    );
};

export default NavbarButton;