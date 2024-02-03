import React from 'react';
import classes from './BionicHandle.module.css'
import Navbar from "../../UI/Navbar/Navbar";
import BigProtezComponent from "../UI(page2)/BigProtezComponent/BigProtezComponent";

const BionicHandle = () => {
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
                                stroke="#9FA7C7" stroke-width="1.15973"/>
                        </svg>
                        <div className={classes.textWrapper}>Про нас</div>
                        <svg className={classes.vector} xmlns="http://www.w3.org/2000/svg" width="20" height="11"
                             viewBox="0 0 20 11" fill="none">
                            <path
                                d="M-1.86696e-07 5.53895L19 5.53893M19 5.53893L15.2309 1.18994M19 5.53893L15.2309 9.81006"
                                stroke="#9FA7C7" stroke-width="1.15973"/>
                        </svg>
                        <div className={classes.div}>Біонічна рука</div>
                    </div>
                    {/* End component*/}
                </div>
                <div className={classes.label}>
                    <div className={classes.textWrapperBig}>БІОНІЧНА РУКА</div>
                </div>
                <div className={classes.labelName}>
                    <div className={classes.neurosync}>NEUROSYNC - 305</div>
                </div>
                <div className={classes.hand}>
                    <BigProtezComponent header={"Інновативність"}
                                        text={"Проотез працює за рахунок зчитування сигналів, які генеруються в м’язах. Зчитані сигнали обробляються комп’ютерними алгоритмами і формуються в команди, які за частки секунди перетворюються на рухи протеза."}>
                    </BigProtezComponent>
                </div>
            </div>
        </div>
    );
};

export default BionicHandle;