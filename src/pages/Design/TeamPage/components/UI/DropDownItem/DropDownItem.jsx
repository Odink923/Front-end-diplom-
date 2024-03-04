import React, {useState} from 'react';
import {animated, useSpring} from "react-spring";
import classes from "./DropDownItem.module.css";
import UiButton2 from "../../../../UI/Buttons/UIButton2/UIButton2";

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
        height: item ? '490px' : '222px',
        config: { duration: 200 },
        background: isHover? 'linear-gradient(to right, #5D638C 100%, transparent 100%)' :
            item? 'linear-gradient(to right, #5D638C 100%, transparent 100%)' : 'linear-gradient(to right, #5D638C00 0%, transparent 0%)',
        transition: 'background 0.5s',
    })
    const titleAnimation = useSpring({
        marginTop: item ? '0px': '350px',
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
                        Що ми очікуємо від Вас:
                        <ul className={classes.text2Item2}>
                            <li>Наявність діючого сертифіката лікаря-спеціаліста та діючої лікарської категорії;</li>
                            <li className={classes.descriptionUl}>Повна вища освіта за напрямом «Медицина», спеціальність «Лікувальна справа»;</li>
                            <li className={classes.descriptionUl}>Досвід роботи від 2 років;</li>
                            <li className={classes.descriptionUl}>Знання сучасних методик діагностики.</li>
                        </ul>
                    </animated.div>
                    <animated.div className={classes.buttons} style={animation}>
                        <span  className={classes.buttonItem}>
                            Дізнатися більше
                        <svg  width="237" height="25" viewBox="0 0 237 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-4.82991e-07 12.249L234.5 12.25M234.5 12.25L224.75 0.999967M234.5 12.25L224.75 23.2986" stroke="#B8BFDA" stroke-width="3"/>
                        </svg>
                        </span>
                        <UiButton2 >Відгукнутися</UiButton2>
                    </animated.div>
                </div>

            </div>
        </animated.div>
    );
};

export default DropDownItem;