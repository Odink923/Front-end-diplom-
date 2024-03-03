import React from 'react';
import Title from "./Title/Title";
import CarrouselProtezPage from "../protezpage/CarrouselProtezPage/CarrouselProtezPage";
import WriteToUs from "../mainpage/WriteToUs/WriteToUs";
import Footerr from "../UI/Management/Footer/Footerr";

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