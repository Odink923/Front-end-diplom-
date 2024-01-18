import React from 'react';
import classes from './Navbar.module.css';
import DarkButton from "../../UI/DarkButton/DarkButton";
import NavbarButton from "../../UI/NavbarButton/NavbarButton";

const Navbar = () => {
    return (
            <div className={classes.component}>
                <div className={classes.overlapGroup}>
                    <div className={classes.div}>
                        <div className={classes.textWrapper2}>ЛОГОТИП</div>
                        <div className={classes.frame2}>
                            <NavbarButton property1={"Пацієнтам"}/>
                            <NavbarButton property1={"Про нас"}/>
                            <NavbarButton property1={"Блог"}/>
                            <NavbarButton property1={"FAQ"}/>
                        </div>
                    </div>
                </div>
                <div className={classes.overlap}>
                    <div className={classes.frame3}>
                        <p className={classes.ENG}>
                            <span className={classes.span}>ENG/</span>
                            <span className={classes.textWrapper4}>УКР</span>
                        </p>
                        <div className={classes.textWrapper5}>Увійти</div>
                        <DarkButton property1={"default"}></DarkButton>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;