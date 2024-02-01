import React from 'react';
import classes from './TeamTitle.module.css'
import Navbar from "../../UI/Navbar/Navbar";
import TeamOrService from "../../UI/TeamOrService/TeamOrService";

const TeamTitle = () => {
    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>

                <Navbar></Navbar>
                <div className={classes.path}>
                    <div className={classes.pathFrame}>
                    {/*Path component*/}
                    <div className={classes.frame}>
                        <div className={classes.textWrapper}>Головна</div>
                        <svg className={classes.vector} xmlns="http://www.w3.org/2000/svg" width="20" height="11"
                             viewBox="0 0 20 11" fill="none">
                            <path
                                d="M-1.86696e-07 5.53895L19 5.53893M19 5.53893L15.2309 1.18994M19 5.53893L15.2309 9.81006"
                                stroke="#8C96C1" stroke-width="1.15973"/>
                        </svg>
                        <div className={classes.textWrapper}>Про нас</div>
                        <svg className={classes.vector} xmlns="http://www.w3.org/2000/svg" width="20" height="11"
                             viewBox="0 0 20 11" fill="none">
                            <path
                                d="M-1.86696e-07 5.53895L19 5.53893M19 5.53893L15.2309 1.18994M19 5.53893L15.2309 9.81006"
                                stroke="#8C96C1" stroke-width="1.15973"/>
                        </svg>
                        <div className={classes.div}>Команда</div>
                    </div>
                    {/* End component*/}
                    </div>
                </div>
                <div className={classes.container}>
                <div className={classes.teamOrService}>
                    <TeamOrService text1={"НАША КОМАНДА"} text2={"ПОЗНАЙОМИМОСЬ?"}
                                   discription={"Короткий опис того, які " +
                                       "послуги пропонуються і всяке таке подібне. " +
                                       "Короткий опис того, які послуги пропонуються і всяке таке подібне"}></TeamOrService>
                </div>
                </div>
            </div>
        </div>
    );
};

export default TeamTitle;