import React from 'react';
import Title from "../components/Design/aboutuspage/Title/Title";
import CarrouselProtezPage from "../components/Design/protezpage/CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../components/Design/mainpage/WriteToUs/WriteToUs";
import Footerr from "../components/Design/UI/Footer/Footerr";

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