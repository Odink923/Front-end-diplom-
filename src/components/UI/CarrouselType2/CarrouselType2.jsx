import React, {useState} from 'react';
import {useSpringCarousel} from "react-spring-carousel";
import CaruselItemType2 from "./UI/CaruselItemType2";
import classes from "./CarrouselType2.module.css"
import CustomButton from "../Button/CustomButton";


const CarrouselType2 = ({mockedItems}) => {
    const [page,setPage] = useState(1);
    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem
    } = useSpringCarousel({
        itemsPerSlide: 1,
        withLoop: true,

        items: mockedItems.map((i) => ({
            id: i.id,
            renderItem: (
                <CaruselItemType2 title={i.title} description={i.description}>

                </CaruselItemType2>
            ),
        })),
    });
    const right = () =>{
        page>3 ?
            setPage(1)
            :
        setPage(page+1)
        slideToNextItem();
    }
    const left = () =>{
        page<2 ?
        setPage(4)
            :
        setPage(page-1)
        slideToPrevItem();
    }
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.image}></div>
                <div className={classes.contertCarousel}>
                    <div className={classes.carosel}>
                        {carouselFragment}
                    </div>
                    <div style={{marginTop: "261px"}}>
                        <CustomButton onClick={left}>
                            <svg width="52" height="25" viewBox="0 0 52 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M51.1484 12.2503L1.99902 12.2502M1.99902 12.2502L11.749 1.00022M1.99902 12.2502L11.749 23.2988"
                                    stroke="#2D3361" stroke-width="3"/>
                            </svg>
                        </CustomButton>
                        {mockedItems.map(i =>
                                <span key={i.id}
                                      onClick={() => setPage(i.id)}
                                      className={page === i.id ? `${classes.activeItem}` : `${classes.notActiveItem}`}>
                                       {page === i.id ? `(${i.id})` : i.id}
                                </span>
                        )}
                        <CustomButton onClick={right}>
                            <svg width="52" height="25" viewBox="0 0 52 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M-4.82948e-07 12.2503L49.1494 12.2502M49.1494 12.2502L39.3994 1.00022M49.1494 12.2502L39.3994 23.2988"
                                    stroke="#2D3361" stroke-width="3"/>
                            </svg>
                        </CustomButton></div>
                </div>
            </div>
        </div>
    );
};

export default CarrouselType2;