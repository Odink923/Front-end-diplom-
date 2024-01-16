import React from 'react';
import classes from "./DarkButton.module.css";
import PropTypes from "prop-types";
const DarkButton = ({ property1 }) => {
    return (
        <div className={`${classes.frame} ${property1}`}>
            <div className={classes.text}>
                {property1 === "default" && <>Напишіть нам</>}

                {property1 === "variant-2" && <>Надіслати</>}
            </div>
        </div>

    );
};
DarkButton.propTypes = {
    property1: PropTypes.oneOf(["variant-2", "default"]),
};


export default DarkButton;