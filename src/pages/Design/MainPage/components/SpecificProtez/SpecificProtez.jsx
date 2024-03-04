import React, {useState} from 'react';
import classes from './SpecificProtez.module.css';
import CarrouselType2 from "../../../UI/Carrousel/CarrouselType2/CarrouselType2";
import {Waypoint} from "react-waypoint";
import {useSpring} from "react-spring";

const SpecificProtez = ({inView}) => {

    const mockedItems = [
        { id: 1, title: "3Д ДРУК",
            description: "Технології, використані при створенні NeuroSync" +
                " - 305 дозволяють за відносно короткий термін спроектувати протез," +
                " який ідеально відповідатиме анатомічним потребам кожного користувача.",
            descriptionSecond: "Нейлон та АБС - матеріали, які є основою конструкції " +
                "протеза поєднують в собі міцність та легкість, що сприяє комфортності" +
                " використання."
        },
        { id: 2, title: "ІНТУЇТИВНИЙ КОНТРОЛЬ",
            description: "Технології, використані при створенні NeuroSync - 305 " +
                "дозволяють за відносно короткий термін спроектувати протез, який ідеально відповідатиме анатомічним потребам кожного користувача.",
            descriptionSecond: "Нейлон та АБС - матеріали, які є основою" +
                " конструкції протеза поєднують в собі міцність та легкість, що сприяє комфортності використання."
        },
        { id: 3, title: "РОЗМАЇТТЯ МОЖЛИВОСТЕЙ",
            description: "Технології, використані при створенні NeuroSync - 305 дозволяють" +
                " за відносно короткий термін спроектувати протез, який ідеально відповідатиме анатомічним потребам кожного користувача.",
            descriptionSecond: "Нейлон та АБС - матеріали, які є основою" +
                " конструкції протеза поєднують в собі міцність та легкість, що сприяє комфортності використання."
        },
        { id: 4, title: "НАДІЙНІСТЬ",
            description: "Технології, використані при створенні NeuroSync - 305 дозволяють" +
                " за відносно короткий термін спроектувати протез, який ідеально відповідатиме анатомічним потребам кожного користувача.",
            descriptionSecond: "Нейлон та АБС - матеріали, які є основою" +
                " конструкції протеза поєднують в собі міцність та легкість, що сприяє комфортності використання."
        },
    ];


    return (
        <div className={classes.box}>

            <CarrouselType2 inView={inView}  mockedItems={mockedItems}></CarrouselType2>
            <div className={classes.other}>

            </div>
            <div className={classes.scroll}>

            </div>

        </div>
    );
};

export default SpecificProtez;