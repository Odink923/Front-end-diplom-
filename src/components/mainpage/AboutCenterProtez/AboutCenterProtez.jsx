import React from 'react';
import classes from './AboutCenterProtez.module.css'
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
                            Відвідати центр
                            <svg width="217" height="25" viewBox="0 0 217 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M-4.82938e-07 12.249L214.5 12.2487M214.5 12.2487L204.75 0.998723M214.5 12.2487L204.75 23.2973" stroke="#2D3361" stroke-width="3"/>
                            </svg>

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