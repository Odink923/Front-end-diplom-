import React from 'react';
import classes from './Carrousel.module.css'
import { useSpringCarousel } from 'react-spring-carousel'
import CarouselItem from "./UI/CarouselItem";
import CustomButton from "../Buttons/CustomButton/CustomButton";
const Carrousel = ({mockedItems}) => {
    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem
    } = useSpringCarousel({
        itemsPerSlide: 3,
        withLoop: true,
        gutter:44,
        startEndGutter: 450,
        items: mockedItems.map((i) => ({
            id: i.id,
            renderItem: (
                <CarouselItem title={i.title} description={i.description}>

                </CarouselItem>
            ),
        })),
    });
    return (
        <div className={classes.all}>
            <div className={classes.carosel}>

                <div className={classes.leftGradient}></div>
                <div className={classes.rightGradient}></div>
                <div className={classes.caroselItems}>
            {carouselFragment}
                </div>
            </div>
            <div className={classes.buttons} >
            <CustomButton onClick={slideToPrevItem}><svg width="52" height="25" viewBox="0 0 52 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.1484 12.2503L1.99902 12.2502M1.99902 12.2502L11.749 1.00022M1.99902 12.2502L11.749 23.2988" stroke="#2D3361" stroke-width="3"/>
            </svg>
            </CustomButton>

            <CustomButton onClick={slideToNextItem}><svg width="52" height="25" viewBox="0 0 52 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-4.82948e-07 12.2503L49.1494 12.2502M49.1494 12.2502L39.3994 1.00022M49.1494 12.2502L39.3994 23.2988" stroke="#2D3361" stroke-width="3"/>
            </svg>
            </CustomButton>
            </div>
        </div>
    );
};

export default Carrousel;