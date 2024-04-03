import React from 'react';
import classes from "./DarkButton.module.css";
import PropTypes from "prop-types";
import {observer} from "mobx-react-lite";
const DarkButton = ({ property1, onClick }) => {
    return (
        <button onClick={onClick} className={classes.frame} >
            <div className={classes.text}>
                {property1}
            </div>
        </button>

    );
};



export default observer(DarkButton);