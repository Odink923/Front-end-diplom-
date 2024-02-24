import React from 'react';
import classes from './BestOfUs.module.css'
import Navbar from "../../../../../components/Navbar/Navbar";
import TeamOrService from "../../../../../components/TeamOrService/TeamOrService";

const BestOfUs = () => {
    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>

                <div className={classes.title}>
                    <div className={classes.label}>
                        <div className={classes.textWrapper}>Найкраще про нас розкажуть наші пацієнти:</div>
                    </div>
                </div>

                <div className={classes.content}>

                    <div className={classes.image}></div>

                    <div className={classes.text}>

                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="32" viewBox="0 0 37 32" fill="none">
                            <path
                                d="M0 2.90909L10.8934 0L18.6878 29.0909L7.79442 32L0 2.90909ZM18.2183 2.90909L29.2056 0L37 29.0909L26.0127 32L18.2183 2.90909Z"
                                fill="#2D3361"/>
                        </svg>
                        <div className={classes.textContent}>
                        <div className={classes.label2}>
                            <div className={classes.textWrapper2}>
                                Екскурсії для навчальних закладів,<br/>
                                можливість відвідати центр. Екскурсії для навчальних закладів,
                                можливість відвідати центр і так далі тому подібне.<br/>
                                Екскурсії для навчальних закладів,<br/>
                                можливість відвідати центр. Екскурсії для навчальних закладів,
                                можливість відвідати центр і так далі тому подібне.
                            </div>
                        </div>
                        </div>

                        <div className={classes.other}></div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default BestOfUs;