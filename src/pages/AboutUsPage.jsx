import React from 'react';
import Title from "../components/aboutuspage/Title/Title";
import CarrouselProtezPage from "../components/page2/CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../components/mainpage/WriteToUs/WriteToUs";
import Footerr from "../components/UI/Footer/Footerr";

const AboutUsPage = () => {
    return (
        <div>
            <Title></Title>
            <CarrouselProtezPage></CarrouselProtezPage>
            <WriteToUs></WriteToUs>
            <Footerr></Footerr>
        </div>
    );
};

export default AboutUsPage;