import React, {useState} from 'react';
import AnimatedItem from "./UI/AnimatedItem";
import DropDownList from "../../../../components/DropDownList/DropDownList";

const BionicProtez = () => {


    return (
        <div>
            <DropDownList>
                <AnimatedItem title="БІОНІЧНІ ПРОТЕЗИ РУК" upItem={true}></AnimatedItem>
                <AnimatedItem title="КАСТОМНІ ОБОЛОНКИ" ></AnimatedItem>
                <AnimatedItem title="НАВЧАННЯ І РЕАБІЛІТАЦІЯ"></AnimatedItem>
                <AnimatedItem title="ПОДАЛЬШЕ ОБСЛУГОВУВАННЯ ПРОТЕЗІВ" downItem={true}></AnimatedItem>
            </DropDownList>
        </div>
    );
};

export default BionicProtez;