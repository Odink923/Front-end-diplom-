import React, {useState} from 'react';
import classes from './DropList.module.css'
import {useSpring, animated} from "react-spring";
import DropItem from "../DropItem/DropItem";
const DropList = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownAnimation = useSpring({
        height: isOpen ? '288px' : '68px',
        config: { duration: 200 },
        overflow: 'hidden',

    });


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <animated.div style={dropdownAnimation} className={classes.formInput}>
            <span className={classes.customButton}   onClick={toggleDropdown}>
                <div className={classes.title}>
                Тема звернення*
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
                    <DropItem>Item 1</DropItem>
                    <DropItem>Item 2</DropItem>
                    <DropItem>Item 3</DropItem>
                    <DropItem>Item 3</DropItem>
                    <DropItem>Item 3</DropItem>
                </div>

            )}
        </animated.div>
    );
};

export default DropList;