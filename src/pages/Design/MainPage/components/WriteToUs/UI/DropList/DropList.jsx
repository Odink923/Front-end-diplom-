import React, {useState} from 'react';
import classes from './DropList.module.css'
import {useSpring, animated} from "react-spring";
import DropItem from "../DropItem/DropItem";
const DropList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Тема звернення*");
    const dropdownAnimation = useSpring({
        height: isOpen ? '260px' : '68px',
        config: { duration: 200 },
        overflow: 'hidden',

    });

    const handleItemClick = (itemText) => {
        setSelectedItem(itemText);
        setIsOpen(false);
    };
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <animated.div style={dropdownAnimation} className={classes.formInput}>
            <span className={classes.customButton}   onClick={toggleDropdown}>
                <div className={classes.title}>
                {selectedItem}
                </div>
                <div className={classes.title}>
                    {isOpen ?
                        <svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00022 11.875L12.2502 2.125L23.2988 11.875" stroke="#8C96C1" stroke-width="3"/>
                        </svg>
                        :
                        <svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.2986 1.125L12.0486 10.875L1 1.125" stroke="#8C96C1" stroke-width="3"/>
                        </svg>
                    }
                </div>
            </span>
            {isOpen && (
                <div >
                    <DropItem onClick={()=>handleItemClick("Хочу отримувати новини на пошту")}>Хочу отримувати новини на електронну пошту</DropItem>
                    <DropItem onClick={()=>handleItemClick("Хочу стати спонсором")}>Хочу стати спонсором</DropItem>
                    <DropItem onClick={()=>handleItemClick("Хочу стати партнером")}>Хочу стати партнером</DropItem>
                    <DropItem onClick={()=>handleItemClick("Хочу дізнатися про актуальні вакансії ")}>Хочу дізнатися про актуальні вакансії  </DropItem>
                    <DropItem onClick={()=>handleItemClick("Інше")}>Інше</DropItem>
                </div>

            )}
        </animated.div>
    );
};

export default DropList;