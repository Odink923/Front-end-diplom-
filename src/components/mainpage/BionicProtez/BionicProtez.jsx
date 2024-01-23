import React, {useState} from 'react';
import classes from './BionicProtez.module.css'
import {useSpring, animated} from "react-spring";
import AnimatedItem from "./UI/AnimatedItem";

const BionicProtez = () => {

    return (
        <div className={classes.gradient}>
            <div className={classes.content}>
            <div className={classes.leftItems}>

                <AnimatedItem title="БІОНІЧНІ ПРОТЕЗИ РУК" upItem={true}></AnimatedItem>
                <AnimatedItem title="КАСТОМНІ ОБОЛОНКИ"></AnimatedItem>
                <AnimatedItem title="НАВЧАННЯ І РЕАБІЛІТАЦІЯ"></AnimatedItem>
                <AnimatedItem title="ПОДАЛЬШЕ ОБСЛУГОВУВАННЯ ПРОТЕЗІВ" downItem={true}></AnimatedItem>

            </div>
            <div className={classes.rightItems}>
            </div>
            </div>
        </div>
    );
};

export default BionicProtez;