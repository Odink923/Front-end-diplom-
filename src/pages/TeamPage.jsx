import React from 'react';
import TeamTitle from "../components/teampage/TeamTitle/TeamTitle";
import WriteToUs from "../components/mainpage/WriteToUs/WriteToUs";
import Footerr from "../components/UI/Footer/Footerr";

const TeamPage = () => {
    return (
        <div>
            <TeamTitle></TeamTitle>
            <WriteToUs></WriteToUs>
            <Footerr></Footerr>
        </div>
    );
};

export default TeamPage;