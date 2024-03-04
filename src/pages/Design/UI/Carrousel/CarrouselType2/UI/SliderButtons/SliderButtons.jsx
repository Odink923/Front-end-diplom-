import React, {useState} from 'react';
import CustomButton from "../../../../Buttons/CustomButton/CustomButton";
import classes from "../../CarrouselType2.module.css";

const SliderButtons = ({slideToNextItem,slideToPrevItem,slideToItem,mockedItems}) => {
    const [page,setPage] = useState(1);
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
    const clickSlide = (i) =>{
        setPage(i);
        slideToItem(i-1);
    }
    return (
        <div>
            <CustomButton onClick={left}>
                <svg width="52" height="25" viewBox="0 0 52 25" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M51.1484 12.2503L1.99902 12.2502M1.99902 12.2502L11.749 1.00022M1.99902 12.2502L11.749 23.2988"
                        stroke="#2D3361" stroke-width="3"/>
                </svg>
            </CustomButton>
            {mockedItems.map(i =>
                <span  key={i.id}
                      onClick={() => clickSlide(i.id)}
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
            </CustomButton>
        </div>
    );
};

export default SliderButtons;