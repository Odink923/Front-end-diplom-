import React from 'react';
import classes from "./DarkButton.module.css";
import PropTypes from "prop-types";
const DarkButton = ({ property1 }) => {
    return (
        <div className={classes.frame} >
            <div className={classes.text}>
                {property1}
            </div>
        </div>

    );
};



export default DarkButton;