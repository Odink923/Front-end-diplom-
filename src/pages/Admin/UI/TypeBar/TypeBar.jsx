import React, {useContext, useEffect} from 'react';
import SummaryMenuButtonsType2 from "../Buttons/SummaryMenuButtonsType2/SummaryMenuButtonsType2";
import classes from "../LeftMenu/LeftMenu.module.css";
import {Context} from "../../../../index";

import {observer} from "mobx-react-lite";
import {fetchTypes} from "../../../../http/appointmentApi";

const TypeBar =observer( () => {
    const {appointment} = useContext(Context)
    useEffect(() => {
        fetchTypes().then(data=>appointment.setTypes(data))
    }, []);
    return (
            <span>
            {appointment._types.map(type=>
            <SummaryMenuButtonsType2 >
                {type.name}
            </SummaryMenuButtonsType2>
            )}
                </span>

    );
});

export default TypeBar;