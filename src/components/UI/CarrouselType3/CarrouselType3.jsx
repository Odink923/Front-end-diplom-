import React from 'react';
import classes from "../../mainpage/aboutUs/AboutUs.module.css";
import SliderButtons from "../CarrouselType2/UI/SliderButtons/SliderButtons";
import {useSpringCarousel} from "react-spring-carousel";
import CaruselItemType2 from "../CarrouselType2/UI/CaruselItemType2/CaruselItemType2";
import CarrouselItemType3 from "./UI/CarrouselItemType3/CarrouselItemType3";

const CarrouselType3 = ({mockedItems}) => {
    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
        slideToItem,
    } = useSpringCarousel({
        itemsPerSlide: 1,
        withLoop: true,

        items: mockedItems.map((i) => ({
            id: i.id,
            renderItem: (
                <CarrouselItemType3  description={i.description} >
                </CarrouselItemType3>
            ),
        })),
    });
    return (
        <div >
            <div className={classes.aboutUsSubBlocks}>
                <div style={{display:"flex",overflow:"hidden",flexDirection:"column", width:"780px", alignItems:"end", marginTop:"36px", marginLeft:"4.16666666667%"}}>

                {carouselFragment}
                    <div style={{marginTop:"148px"}}>
                <SliderButtons slideToPrevItem={slideToPrevItem}
                               slideToNextItem={slideToNextItem}
                               slideToItem={slideToItem}
                               mockedItems={mockedItems}
                ></SliderButtons>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarrouselType3;