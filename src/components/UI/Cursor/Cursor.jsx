import React, {useEffect, useState} from 'react';
import classes from './Cursor.module.css'
import {useSpring, animated} from "react-spring";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const onMouseMove = (e) => {
        const offsetX = 15;
        const offsetY = 15;
        setPosition({ x: e.clientX - offsetX, y: e.clientY - offsetY });
    };
    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };

    }, []);


    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cursorStyle = window.getComputedStyle(e.target).getPropertyValue('cursor');
            setIsPointer(cursorStyle === 'pointer');

        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [setIsPointer]);

    const springProps = useSpring({
        scale: isPointer ? 1.5 : 1,
    });



    return (
        <animated.div className={classes.attachment}  style={{left: position.x, top: position.y,pointerEvents: 'none',  transform: springProps.scale.interpolate((s) => `scale(${s})`) }}>
            <div  className="cursor__ball cursor__ball--big ">
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="12" ></circle>
                </svg>
            </div>


        </animated.div>
    );
};

export default Cursor;