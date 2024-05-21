import React from 'react';
import classes from "../AboutUs.module.css";
import {animated, useSpring} from "react-spring";

const AboutUsPhotoFrame1 = () => {

    const [shapeAnimation, set] = useSpring(() => ({
        config:{
            duration: 200
        },

    }))


    const toggleAnimation = hovering =>({
        borderRadius: hovering
            ? `0px`
            : `60px`,

    })

    return (
        <animated.div className={classes.aboutUsPhotoFrame1} style={shapeAnimation}
                        onMouseEnter={() => set(toggleAnimation(true))}
                        onMouseLeave={() => set(toggleAnimation(false))}></animated.div>

    );
};

export default AboutUsPhotoFrame1;