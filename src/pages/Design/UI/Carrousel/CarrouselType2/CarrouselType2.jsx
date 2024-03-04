import React, {useState} from 'react';
import {useSpringCarousel} from "react-spring-carousel";
import CaruselItemType2 from "./UI/CaruselItemType2/CaruselItemType2";
import classes from "./CarrouselType2.module.css"
import CustomButton from "../../Buttons/CustomButton/CustomButton";
import SliderButtons from "./UI/SliderButtons/SliderButtons";
import {useSpring, animated} from "react-spring";


const CarrouselType2 = ({mockedItems,inView}) => {
    const showLeftOpacity = useSpring({
        opacity: inView ? 1 : 0,

        transform: inView ? 'translateY(0)' : 'translateX(-100px)',
        config: { duration: 500 },
    });

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
                <CaruselItemType2 inView={inView} title={i.title} description={i.description} descriptionSecond={i.descriptionSecond}>
                </CaruselItemType2>
            ),
        })),
    });
    return (
        <div>
            <div className={classes.container}>
                <animated.div style={showLeftOpacity}  className={classes.image}></animated.div>
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