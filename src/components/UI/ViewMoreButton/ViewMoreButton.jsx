import React, { useState } from 'react';
import classes from './ViewMoreButton.module.css';
import {useSpring,animated} from "@react-spring/web";


const ViewMoreButton = ({color}) => {
    const [isHovered, setIsHovered] = useState(false);

    const svgAnimation = useSpring({
        d: isHovered
            ? "M14.6458 1L12.0486 274M12.0486 274L23.2986 264.25M12.0486 274L1 264.25"
            : "M12.0486 0L12.0486 212M12.0486 212L23.2986 202.25M12.0486 212L1 202.25",
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
                width="25"
                height="276"
                viewBox="0 0 25 276"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke={color}
                strokeWidth="3"
                style={{...svgAnimation}}
            >
                <animated.path d={svgAnimation.d} />
            </animated.svg>
            <div className={classes.textWrapper} color={color}>Дізнатися більше</div>
        </div>
    );
};

export default ViewMoreButton;
