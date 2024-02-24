import React, {useState} from 'react';
import {animated, useSpring} from "react-spring";
import classes from "../BionicProtez.module.css";

const AnimatedItem = ({title, upItem, downItem}) => {
    const [item,setItem] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isHoverIcon, setIsHoverIcon] = useState(false);
    const handle = () =>{
        setItem(!item);
        console.log(item);
    }
    //hide more
    const animation = useSpring({
        opacity: item ? 1 : 0,
        config: { duration: 200 },
        borderRadius: isHoverIcon? '5px' : '60px'
    });

    //change width in component
    const widthAnimation = useSpring({
        height: item ? '604px' : '222px',
        config: { duration: 200 },
        background: isHover? 'linear-gradient(to right, #5D638C 100%, transparent 100%)' :
            item? 'linear-gradient(to right, #5D638C 100%, transparent 100%)' : 'linear-gradient(to right, #5D638C00 0%, transparent 0%)',
        transition: 'background 0.5s',
    })
    const titleAnimation = useSpring({
        marginTop: item ? '0px': '170px',
        config: { duration: 200 },

    })
    return (
        <animated.div  style={widthAnimation}
                       onClick={handle}
                       onMouseEnter={() => setIsHover(true)}
                       onMouseLeave={() => setIsHover(false)}
                       className={upItem ? classes.item1:downItem ? classes.downItem :classes.item2}>
            <div className={classes.itemContent}>
                <div className={classes.item2Content}>
                    <animated.div style={titleAnimation} >
                        {title}
                    </animated.div>
                    <animated.div style={animation} className={classes.text2Item2}>Короткий опис того, які послуги пропонуються і всяке таке подібне. Короткий опис того,
                        які послуги пропонуються і всяке таке подібне  Короткий опис того, які
                        послуги пропонуються і всяке таке подібне.
                        Короткий опис того, які послуги пропонуються і всяке таке подібне </animated.div>
                </div>
                <div  className={classes.iconMarg}>
                    <animated.div style={animation} className={classes.icon}
                                  onMouseEnter={() => setIsHoverIcon(true)}
                                  onMouseLeave={() => setIsHoverIcon(false)}>
                    </animated.div>
                </div>
            </div>
        </animated.div>
    );
};

export default AnimatedItem;