import React, {useContext} from 'react';
import SummaryMenuButtonsType2 from "../Buttons/SummaryMenuButtonsType2/SummaryMenuButtonsType2";
import classes from "../LeftMenu/LeftMenu.module.css";
import {Context} from "../../../../index";

const TypeBar = () => {
    const {appointment} = useContext(Context)
    return (
            <span>
            {appointment._types.map(type=>
            <SummaryMenuButtonsType2 >
                {type.name}
            </SummaryMenuButtonsType2>
            )}
                </span>

    );
};

export default TypeBar;