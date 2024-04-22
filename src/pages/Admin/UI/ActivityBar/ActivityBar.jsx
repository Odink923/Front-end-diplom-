import React, {useContext} from 'react';
import {Context} from "../../../../index";
import SummaryMenuButtonsType2 from "../Buttons/SummaryMenuButtonsType2/SummaryMenuButtonsType2";

const ActivityBar = () => {
    const {appointment} = useContext(Context)
    return (
        <span>
            {appointment._activity.map(type=>
                <SummaryMenuButtonsType2 >
                    {type.name}
                </SummaryMenuButtonsType2>
            )}
                </span>

    );
};

export default ActivityBar;