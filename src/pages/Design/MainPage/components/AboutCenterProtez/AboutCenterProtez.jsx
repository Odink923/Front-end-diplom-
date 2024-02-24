import React from 'react';
import classes from './AboutCenterProtez.module.css'
import HorizontalLineButton from "../../../../../components/HorizontalLineButton/HorizontalLineButton";
import {useSpring,animated} from "react-spring";
const AboutCenterProtez = ({inView}) => {
    const showLeftOpacity = useSpring({
        opacity: inView ? 1 : 0,

        transform: inView ? 'translateY(0)' : 'translateX(-100px)',
        config: { duration: 500 },
    });
    const showTopOpacity = useSpring({
        opacity: inView ? 1 : 0,

        transform: inView ? 'translateY(0)' : 'translateY(-100px)',
        config: { duration: 500 },
    });
    const showDownOpacity = useSpring({
        opacity: inView ? 1 : 0,

        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 },
    });
    const showOpacity = useSpring({
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    });
    return (
        <div className={classes}>
            <div className={classes.content}>
                <div className={classes.leftItems}>
                    <div className={classes.items}>
                        <animated.div  style={showTopOpacity}>ПРО ЦЕНТР ПРОТЕЗУВАННЯ</animated.div>
                        <animated.div style={showOpacity} className={classes.descriptions}>Короткий опис того, які послуги пропонуються і всяке таке подібне
                            Короткий опис того, які послуги пропонуються і всяке таке подібне. Короткий опис того, які послуги пропонуються і всяке таке подібне </animated.div>
                        <animated.div style={showLeftOpacity} className={classes.icon}></animated.div>
                    </div>
                    <div className={classes.itemsRight}>
                        <animated.div style={showOpacity} className={classes.descriptionsRight}>Екскурсії для навчальних закладів,
                            можливість відвідати центр. Екскурсії для навчальних закладів,
                            можливість відвідати центр і так далі тому подібне. </animated.div>
                        <animated.div style={showDownOpacity} className={classes.reusableItem}>
                            {/*if bug use display flex*/}
                           <HorizontalLineButton>Відвідати центр</HorizontalLineButton>

                        </animated.div>
                    </div>

                </div>
                <div className={classes.rightItems}>

                </div>
            </div>

        </div>
    );
};

export default AboutCenterProtez;