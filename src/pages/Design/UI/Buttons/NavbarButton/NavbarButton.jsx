import React from 'react';
import classes from "./NavbarButton.module.css";
import {Link} from "react-router-dom";

const NavbarButton = ({property1, onHover, onMouseLeave, link, blackWhite}) => {
    return (
        <Link className={classes.mainLink} to={link}>
            <div className={!blackWhite? classes.textWrapper3 : classes.textWrapper4} onMouseOver={onHover} onMouseLeave={onMouseLeave}>
                {property1}
            </div>
        </Link>
    );
};

export default NavbarButton;