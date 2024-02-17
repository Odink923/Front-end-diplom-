import React, {useState} from 'react';
import {animated, useSpring} from "react-spring";
import classes from "./DropDownItem.module.css";
import UiButton2 from "../../../../components/UIButton2/UIButton2";

const DropDownItem = ({title,upItem,downItem}) => {
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

    });

    //change width in component
    const widthAnimation = useSpring({
        height: item ? '395px' : '222px',
        config: { duration: 200 },
        background: isHover? 'linear-gradient(to right, #5D638C 100%, transparent 100%)' :
            item? 'linear-gradient(to right, #5D638C 100%, transparent 100%)' : 'linear-gradient(to right, #5D638C00 0%, transparent 0%)',
        transition: 'background 0.5s',
    })
    const titleAnimation = useSpring({
        marginTop: item ? '0px': '120px',
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
                    <animated.div style={titleAnimation}>
                        {title}
                    </animated.div>
                    <animated.div className={classes.titleText} style={animation}>
                        Ми надаємо гарантії на якість та функціональність протезу, а також забезпечуємо сервіс та підтримку для користувачів.
                    </animated.div>

                </div>

            </div>
        </animated.div>
    );
};

export default DropDownItem;