import React, {useEffect, useState} from 'react';
import {animated, useSpring} from "@react-spring/web";
import classes from "./HorizontalLineButton.module.css";

const HorizontalLineButton = ({children}) => {
    {/*потрібно вставити стрічку d="" з svg (костиль)*/}
    const [isHovered, setIsHovered] = useState(false);
    const svgAnimation = useSpring({
        d: isHovered
            ? "M-4.82933e-07 12.5475L295 12.5471M295 12.5471L285.25 1.29708M295 12.5471L285.25 23.5957"
            : `${children}`,
        config: { duration: 300 },
    });

    return (
        <div
            className={classes.frame}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <animated.svg
                className={classes.vector}
                width="297"
                height="25"
                viewBox="0 0 297 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#2D3361"
                strokeWidth="3"
                style={{...svgAnimation}}
            >
                <animated.path d={svgAnimation.d}/>
            </animated.svg>

        </div>
    );
};

export default HorizontalLineButton;