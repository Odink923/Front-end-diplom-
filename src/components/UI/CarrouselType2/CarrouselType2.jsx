import React, {useState} from 'react';
import {useSpringCarousel} from "react-spring-carousel";
import CaruselItemType2 from "./UI/CaruselItemType2";
import classes from "./CarrouselType2.module.css"
import CustomButton from "../Button/CustomButton";
import SliderButtons from "./UI/SliderButtons/SliderButtons";


const CarrouselType2 = ({mockedItems}) => {

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
                <CaruselItemType2 title={i.title} description={i.description} descriptionSecond={i.descriptionSecond}>
                </CaruselItemType2>
            ),
        })),
    });
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.image}></div>
                <div className={classes.contertCarousel}>
                    <div className={classes.carosel}>
                        {carouselFragment}
                    </div>
                    <div style={{marginTop: "261px"}}>
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

export default CarrouselType2;