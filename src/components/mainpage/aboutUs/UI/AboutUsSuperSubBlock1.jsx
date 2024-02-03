import React from 'react';
import {animated, useSpring} from "react-spring";
import classes from "../AboutUs.module.css";

const AboutUsSuperSubBlock1 = ( props ) => {

    const[blockAnimation, set] = useSpring(() =>({
        from: {
            background: `linear-gradient(90deg, #d1d8f4 0%, #d1d8f4 0%, transparent 0%, transparent 100%)`,
            height: props.height
        },
        config:{
            duration: 750
        }
    }))
    const toggleAnimation = hovering => ({
        background: hovering
            ? `linear-gradient(90deg, #d1d8f4 0%, #d1d8f4 100%, transparent 0%, transparent 100%)`
            : `linear-gradient(90deg, #d1d8f4 0%, #d1d8f4 0%, transparent 0%, transparent 100%)`
    })

    return (
            <animated.div className={`${classes.aboutUsSubBlocks} ${classes.aboutUsSuperSubBlocks}`} style={blockAnimation}
                          onMouseEnter={() => set(toggleAnimation(true))}
                          onMouseLeave={() => set(toggleAnimation(false))}>

                <span className={`${classes.spanParagraphTitleLayout} ${classes.spanParagraphTitle2}`}>Заголовок статті про центр протезування</span>
                <span className={`${classes.spanParagraphLayout2} ${classes.spanParagraph4}`}>Екскурсії для навчальних закладів,
                                        можливість відвідати центр. Екскурсії для навчальних закладів,
                                        можливість відвідати центр і так далі тому подібне.
                </span>
            </animated.div>
    );
};

export default AboutUsSuperSubBlock1;