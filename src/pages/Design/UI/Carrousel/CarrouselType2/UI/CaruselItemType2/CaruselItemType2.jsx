import React from 'react';
import classes from './CaruselItemType2.module.css';
import {useSpring,animated} from "react-spring";

const CaruselItemType2 = ({inView,title, description,descriptionSecond}) => {
    const showTopOpacity = useSpring({
        opacity: inView ? 1 : 0,

        transform: inView ? 'translateY(0)' : 'translateY(-100px)',
        config: { duration: 500 },
    });
    const showOpacity = useSpring({
        opacity: inView ? 1 : 0,
        config: { duration: 500 },
    });
    return (
        <div >

            <animated.div style={showTopOpacity} >
                <div className={classes.title} >
                    {title}
                </div>
            </animated.div>
            <animated.div style={showOpacity}>
                <div className={classes.description}>
                    {description}
                </div>
            </animated.div>
            <animated.div style={showOpacity} >
                <div className={`${classes.description} ${classes.secondDescription}`}>
                    {descriptionSecond}
                </div>
            </animated.div>


        </div>
    );
};

export default CaruselItemType2;