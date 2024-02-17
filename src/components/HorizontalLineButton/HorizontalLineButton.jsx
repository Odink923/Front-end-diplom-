import React, {useEffect, useRef, useState} from 'react';
import {animated, useSpring} from "@react-spring/web";
import classes from "./HorizontalLineButton.module.css";

const HorizontalLineButton = ({children}) => {
    const divRef = useRef(null);
    const [divWidth, setDivWidth] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const svgAnimation = useSpring({
        transform: `scale(${isHovered ? divWidth / 235 : 1}, 1)`
    });
    useEffect(() => {
        if (divRef.current) {
            const width = divRef.current.offsetWidth;
            setDivWidth(width);
        }
    }, [children]);
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className={classes.title} ref={divRef}>{children}</div>
            <svg style={{marginTop:"-70px"}} width="294" height="29" viewBox="0 0 294 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <animated.path style={svgAnimation}
                               d="M-5.8463e-07 14.6252L232 14.6219M232 14.6219L220.219 0.999999M232 14.6219L220.219 28" stroke="#2D3361" stroke-width="3"/>
            </svg>
        </div>
    );
};
export default HorizontalLineButton;