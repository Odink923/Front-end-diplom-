import React from 'react';
import TeamTitle from "./components/TeamTitle/TeamTitle";
import WriteToUs from "../MainPage/components/WriteToUs/WriteToUs";
import Footerr from "../../components/Footer/Footerr";
import AnimatedDropList from "./components/AnimatedDropList/AnimatedDropList";

const TeamPage = () => {
    return (
        <div>
            <TeamTitle></TeamTitle>
            <AnimatedDropList></AnimatedDropList>
        </div>
    );
};

export default TeamPage;