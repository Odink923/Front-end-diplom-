import React from 'react';
import classes from './Login.module.css'
import Navbar from "../../UI/Navbar/Navbar";
import DarkButton from "../../UI/DarkButton/DarkButton";

const Login = () => {
    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>

                <Navbar></Navbar>

                <div className={classes.login}>
                <div className={classes.frameScreen}>
                    <div className={classes.div}>
                        <div className={classes.divWrapper}>
                            <div className={classes.textWrapper2}>Електронна адреса*</div>
                        </div>
                        <div className={classes.frame2}>
                            <div className={classes.textWrapper2}>Пароль*</div>
                            <svg width="38" height="24" viewBox="0 0 38 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M37.7584 11.2767C37.4189 10.8221 29.3304 0.147827 18.9998 0.147827C8.66919 0.147827 0.580235 10.8221 0.241129 11.2762C0.084438 11.4863 0 11.7397 0 11.9998C0 12.2599 0.084438 12.5133 0.241129 12.7234C0.580235 13.1779 8.66919 23.8522 18.9998 23.8522C29.3304 23.8522 37.4189 13.1779 37.7584 12.7238C37.9153 12.5138 37.9999 12.2604 37.9999 12.0002C37.9999 11.7401 37.9153 11.4867 37.7584 11.2767ZM18.9998 21.4001C11.3902 21.4001 4.7995 14.3153 2.84851 11.9992C4.79697 9.68105 11.3739 2.6 18.9998 2.6C26.609 2.6 33.1992 9.68352 35.151 12.0009C33.2026 14.3189 26.6257 21.4001 18.9998 21.4001Z"
                                    fill="#8C96C1"/>
                                <path
                                    d="M19.0009 4.64355C14.8564 4.64355 11.4844 7.94379 11.4844 12.0001C11.4844 16.0565 14.8564 19.3567 19.0009 19.3567C23.1454 19.3567 26.5174 16.0565 26.5174 12.0001C26.5174 7.94379 23.1454 4.64355 19.0009 4.64355ZM19.0009 16.9045C16.2377 16.9045 13.9899 14.7044 13.9899 12.0001C13.9899 9.29583 16.2378 7.09579 19.0009 7.09579C21.764 7.09579 24.0118 9.29583 24.0118 12.0001C24.0118 14.7044 21.764 16.9045 19.0009 16.9045Z"
                                    fill="#8C96C1"/>
                            </svg>


                        </div>
                    </div>
                    <div className={classes.frame3}>
                        <div className={classes.textWrapper3}>Забули пароль?</div>
                        <DarkButton property1="Увійти"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;