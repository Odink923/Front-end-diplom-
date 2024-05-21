import React from 'react';
import classes from "../AboutUs.module.css";
import {animated, useSpring} from "react-spring";

const AboutUsMediaRegionSubBlockRight = () => {

    const[blockAnimation, set] = useSpring(() =>({
        from: {
            background: `linear-gradient(180deg, #d1d8f4 0%, #d1d8f4 0%, transparent 0%, transparent 100%)`
        },
        config:{
            duration: 750
        }
    }))



    const toggleAnimation = hovering => ({
        background: hovering
            ? `linear-gradient(180deg, #d1d8f4 0%, #d1d8f4 100%, transparent 0%, transparent 100%)`
            : `linear-gradient(180deg, #d1d8f4 0%, #d1d8f4 0%, transparent 0%, transparent 100%)`
    })


    return (
        <animated.div className={`${classes.aboutUsSubBlocks} ${classes.aboutUsMediaRegionSubBlockRight}`} style={blockAnimation}
                      onMouseEnter={() => set(toggleAnimation(true))}
                      onMouseLeave={() => set(toggleAnimation(false))}>
            <span className={`${classes.spanTitleLayout} ${classes.spanTitle3}`}>медіа</span>
            <span className={`${classes.spanParagraphTitleLayout} ${classes.spanParagraphTitle1}`}>Олена Зеленська відвідала відкриття нового медичного центру з протезування та реабілітації Octa Bionics у Києві</span>
            <span className={`${classes.spanParagraphLayout2} ${classes.spanParagraph2}`}>На відкриття національного медичного центру Octa Bionics завітала перша леді України, членкиня Наглядової ради Superhumans, Олена Зеленська.
                        </span>
            {/*<span className={`${classes.spanParagraphLayout2} ${classes.spanParagraph3}`}>Екскурсії для навчальних закладів,*/}
            {/*                            можливість відвідати центр. Екскурсії для навчальних закладів,*/}
            {/*                            можливість відвідати центр і так далі тому подібне.*/}
            {/*            </span>*/}
            <shape className={classes.aboutUsPhotoFrame2}></shape>
        </animated.div>
    );
};

export default AboutUsMediaRegionSubBlockRight;