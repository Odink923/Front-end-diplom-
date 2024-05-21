import React from 'react';
import classes from './AboutCenterProtez.module.css'
import HorizontalLineButton from "../../../UI/components/HorizontalLineButton/HorizontalLineButton";
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
                        <animated.div style={showOpacity} className={classes.descriptions}>Центр протезування Octa Bionics — це місце, де ми скурпульозно створюємо протези, які допомагають сотням людей відновити мобільність. Це також місце реабілітації, яка допомагає відновити надію і впевненість. </animated.div>
                        <animated.div style={showLeftOpacity} className={classes.icon}></animated.div>
                    </div>
                    <div className={classes.itemsRight}>
                        <animated.div style={showOpacity} className={classes.descriptionsRight}>Хочете самі переконатися, що все саме так як ми розповідаємо? Чи, можливо, бажаєте підглянути за процесом створення наших протезів? У вас є така можливість! </animated.div>
                        <animated.div style={showDownOpacity} className={classes.reusableItem}>
                            {/*if bug use display flex*/}
                           <HorizontalLineButton>
                               Відвідати центр</HorizontalLineButton>

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