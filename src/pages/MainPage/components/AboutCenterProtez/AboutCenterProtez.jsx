import React from 'react';
import classes from './AboutCenterProtez.module.css'
import HorizontalLineButton from "../../../../components/HorizontalLineButton/HorizontalLineButton";
const AboutCenterProtez = () => {

    return (
        <div className={classes}>
            <div className={classes.content}>
                <div className={classes.leftItems}>
                    <div className={classes.items}>
                        <div >ПРО ЦЕНТР ПРОТЕЗУВАННЯ</div>
                        <div className={classes.descriptions}>Короткий опис того, які послуги пропонуються і всяке таке подібне
                            Короткий опис того, які послуги пропонуються і всяке таке подібне. Короткий опис того, які послуги пропонуються і всяке таке подібне </div>
                        <div className={classes.icon}></div>
                    </div>
                    <div className={classes.itemsRight}>
                        <div className={classes.descriptionsRight}>Екскурсії для навчальних закладів,
                            можливість відвідати центр. Екскурсії для навчальних закладів,
                            можливість відвідати центр і так далі тому подібне. </div>
                        <div className={classes.reusableItem}>
                            {/*if bug use display flex*/}
                           <HorizontalLineButton>Відвідати центр</HorizontalLineButton>

                        </div>
                    </div>

                </div>
                <div className={classes.rightItems}>

                </div>
            </div>

        </div>
    );
};

export default AboutCenterProtez;