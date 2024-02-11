import React, { useState} from 'react';
import classes from './Navbar.module.css';
import DarkButton from "../Buttons/DarkButton/DarkButton";
import NavbarButton from "../Buttons/NavbarButton/NavbarButton";
import {animated, useSpring} from '@react-spring/web'
import {Link} from "react-router-dom";

const Navbar = () => {

    const [isHovered, setIsHovered] = useState(false);
    const slideAnimation = useSpring({
        height: isHovered ? '410' : '0px',
        overflow: 'hidden',
    });
    const slideAnimationNavbar = useSpring({
        borderRadius: isHovered ? '5px' : '50px',
        overflow: 'hidden',

    });
    const lineAnimation = useSpring({
        width: isHovered ? '100%' : '0%',
        config: { duration: 1000 },
    });

    return (
            <div className={classes.component}>
                <animated.div className={classes.overlapGroup} style={slideAnimationNavbar}>
                    <div className={classes.overlapGroupFrame}>
                        <div className={classes.div}>
                            <Link to={"/"}>
                            <div className={classes.textWrapper2}>ЛОГОТИП</div>
                            </Link>
                            <div className={classes.frame2}>
                                <NavbarButton property1={"Пацієнтам"}/>
                                    <Link to={"/aboutUsPage"}>
                                    <NavbarButton property1={"Про нас"}
                                                  onHover={() => setIsHovered(true)}
                                                  onMouseLeave={() => setIsHovered(false)}
                                         />
                                    </Link>
                                <NavbarButton property1={"Блог"}/>
                                <NavbarButton property1={"FAQ"}/>
                            </div>
                        </div>
                    </div>

                    <animated.div className={classes.dropdownMenu} style={slideAnimation}
                                  onMouseEnter={() => setIsHovered(true)}
                                  onMouseLeave={() => setIsHovered(false)}>
                        <animated.div className={classes.line} style={lineAnimation}></animated.div>
                        <div className={classes.dropdownFrame}>
                            <div className={classes.dropdownMenuBlock}>
                                <div className={classes.dropdownMenuImage}></div>
                                <Link to={"/protezPage"}>
                                <div className={classes.dropdownMenuText}>Біонічна рука</div>
                                </Link>
                            </div>
                            <div className={classes.dropdownMenuBlock}>
                                <div className={classes.dropdownMenuImage}></div>
                                <div className={classes.dropdownMenuText}>Послуги</div>
                            </div>
                            <div className={classes.dropdownMenuBlock}>
                                <div className={classes.dropdownMenuImage}></div>
                                <div className={classes.dropdownMenuText}>Команда</div>
                            </div>
                            <div className={classes.dropdownMenuBlock}>
                                <div className={classes.dropdownMenuImage}></div>
                                <div className={classes.dropdownMenuText}>Партнери</div>
                            </div>
                        </div>
                    </animated.div>
                </animated.div>
                <div className={classes.overlap}>
                    <div className={classes.frame3}>
                        <p className={classes.ENG}>
                            <span className={classes.span}>ENG/</span>
                            <span className={classes.textWrapper4}>УКР</span>
                        </p>
                        <div className={classes.textWrapper5}>Увійти</div>
                        <DarkButton property1="Напишіть нам"></DarkButton>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;