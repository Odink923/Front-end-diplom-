import React from 'react';
import {useSpringCarousel} from "react-spring-carousel";
import classes from "./CarrouselNews.module.css"
import CarrouselItemNews from "../CarrouselItemNews/CarrouselItemNews";
import SliderButtons from "../../../../../../../components/CarrouselType2/UI/SliderButtons/SliderButtons";

const CarrouselNews = ({mockedItems}) => {
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
                <CarrouselItemNews title={i.title} description={i.description} >
                </CarrouselItemNews>
            ),
        })),
    });
    return (
        <div >
            <div className={classes.containerCarrousel}>
            {carouselFragment}
                <div style={{marginTop:"195px"}}>
                <SliderButtons slideToPrevItem={slideToPrevItem}
                               slideToNextItem={slideToNextItem}
                               slideToItem={slideToItem}
                               mockedItems={mockedItems}
                ></SliderButtons>
                </div>
            </div>

        </div>
    );
};

export default CarrouselNews;