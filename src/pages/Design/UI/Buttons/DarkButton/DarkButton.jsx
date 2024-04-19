import React from 'react';
import classes from "./DarkButton.module.css";
import PropTypes from "prop-types";
const DarkButton = ({ property1 }) => {
    return (
        <button className={classes.frame} >
            <div className={classes.text}>
                {property1}
            </div>
        </button>

    );
};



export default DarkButton;