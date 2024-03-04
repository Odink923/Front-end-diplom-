import React from 'react';
import classes from './AboutUs.module.css';
import { animated, useSpring} from "react-spring";
import AboutUsSuperSubBlock1 from "./UI/AboutUsSuperSubBlock1";
import AboutUsMediaRegionSubBlockRight from "./UI/AboutUsMediaRegionSubBlockRight";
import AboutUsPhotoFrame1 from "./UI/AboutUsPhotoFrame1";
import ArticleCardsComponent from "./UI/articleCardsComponent";
import CarrouselType3 from "../../../UI/Carrousel/CarrouselType3/CarrouselType3";


const AboutUs = () => {
    const mockedItems = [
        {    id: 1,
            description: "Екскурсії для навчальних закладів,\n" +
                "можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.\n" +
                "Екскурсії для навчальних закладів,\n" +
                "можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.",

        },
        {    id: 2,
            description: "Екскурсії для навчальних закладів,\n" +
                "можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.\n" +
                "Екскурсії для навчальних закладів,\n" +
                "можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.",

        },
        {    id: 3,
            description: "3Екскурсії для навчальних закладів,\n" +
                "можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.\n" +
                "Екскурсії для навчальних закладів,\n" +
                "можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.",

        },
        {    id: 4,
            description: "4Екскурсії для навчальних закладів,\n" +
                "можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.\n" +
                "Екскурсії для навчальних закладів,\n" +
                "можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.",

        },

    ];
    return (
        <div className={classes.aboutUsGeneral}>
            <div className={classes.aboutUsSubGeneral}>
                <div className={`${classes.aboutUsRegion} ${classes.patientsRegion}`}>
                    <div className={classes.aboutUsSubBlocks}>
                        <span className={`${classes.spanTitleLayout} ${classes.spanTitle1}`}>про нас говорять:</span>
                        <AboutUsPhotoFrame1></AboutUsPhotoFrame1>
                    </div>
                    <div className={classes.flexing}>
                    <span className={`${classes.spanTitleLayout} ${classes.spanTitle2}`}>наші пацієнти</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={classes.quoteSvg} width="37" height="32" viewBox="0 0 37 32" fill="none">
                        <path d="M0 2.90909L10.8934 0L18.6878 29.0909L7.79442 32L0 2.90909ZM18.2183 2.90909L29.2056 0L37 29.0909L26.0127 32L18.2183 2.90909Z" fill="#2D3361"/>
                    </svg>
                    <CarrouselType3 mockedItems={mockedItems}></CarrouselType3>
                    </div>
                </div>
                <div className={`${classes.aboutUsRegion} ${classes.mediaRegion}`} >

                    <AboutUsMediaRegionSubBlockRight></AboutUsMediaRegionSubBlockRight>

                    <ArticleCardsComponent></ArticleCardsComponent>

                </div>
            </div>

        </div>
    );
};

export default AboutUs;