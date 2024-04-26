import React, {useContext, useEffect} from 'react';
import {Context} from "../../../../index";
import SummaryMenuButtonsType2 from "../Buttons/SummaryMenuButtonsType2/SummaryMenuButtonsType2";
import {fetchActivity, fetchTypes} from "../../../../http/appointmentApi";
import {observer} from "mobx-react-lite";

const ActivityBar = observer(() => {
    const {appointment} = useContext(Context)
    useEffect(() => {
        fetchActivity().then(data=> appointment.setActivity(data))
    }, []);
    return (
        <span>
            {appointment._activity.map(activity=>
                <SummaryMenuButtonsType2 >
                    {activity.name}
                </SummaryMenuButtonsType2>
            )}
                </span>

    );
});

export default ActivityBar;