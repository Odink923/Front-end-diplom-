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

                <span className={`${classes.spanParagraphTitleLayout} ${classes.spanParagraphTitle2}`}>Футуризм в дії: як у Києві працює реабілітаційний центр світового рівня</span>
                <span className={`${classes.spanParagraphLayout2} ${classes.spanParagraph4}`}>Сьогодні ведучий ZAXID.NET Новин Андрій Дрозда розповість про те, як у Києві працює надсучасний центр протезування для постраждалих від війни українців. 
                </span>
            </animated.div>
    );
};

export default AboutUsSuperSubBlock1;