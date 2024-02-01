import React from 'react';
import classes from './ServicesTitle.module.css'
import Navbar from "../../UI/Navbar/Navbar";
import TeamOrService from "../../UI/TeamOrService/TeamOrService";

const ServicesTitle = () => {
    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>

                    <Navbar></Navbar>
                <div className={classes.path}>
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
                        <div className={classes.div}>Послуги</div>
                    </div>
                    {/* End component*/}
                </div>
                <div className={classes.teamOrService}>
                    <TeamOrService text1={"Послуги"}></TeamOrService>
                </div>

            </div>
        </div>
    );
};

export default ServicesTitle;