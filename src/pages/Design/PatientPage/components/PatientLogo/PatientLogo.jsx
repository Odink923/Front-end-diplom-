import React from 'react';
import classes from './PatientLogo.module.css'
import Navbar from "../../../UI/Managament/Navbar/Navbar";
import ReadAll from "../../../UI/components/ReadAll/ReadAll";
import ViewMoreButton from "../../../UI/Buttons/ViewMoreButton/ViewMoreButton";

const PatientLogo = ({title, visible}) => {

    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>
                <Navbar></Navbar>
                <div className={classes.row}>
                    <div className={classes.text}>
                        <div className={classes.textContent}>

                            <div className={classes.label3}>
                                <div className={classes.textWrapper3}>
                                    Бажаєте розпочати співпрацю?
                                </div>
                            </div>



                            <div className={classes.label2}>
                                <p className={classes.description}>Шлях до комфортного використання протеза полягає у постійній взаємодії міжпацієнтом і медичним персоналом. Тому ми не пропонуємо вам лише протез, ми пропонуємо співпрацю, результатом якої буде ваша автономність та свобода у повсякденному житті.
                                </p>
                            </div>

                            {/*<div className={classes.other}>
                                {visible?
                                <ReadAll visible={visible}>   <svg className={classes.img} width="222" height="29" viewBox="0 0 222 29" fill="none" xmlns="http://www.w3.org/2000/svg">


                                    <path
                                        d="M-5.84597e-07 14.6259L219.5 14.6218M219.5 14.6218L207.719 0.999878M219.5 14.6218L207.719 27.9999"
                                        stroke="#F2F5FF" stroke-width="3"/>
                                </svg></ReadAll>
                                    :
                                    <ReadAll>
                                        <ViewMoreButton color={"#F2F5FF"}></ViewMoreButton>
                                    </ReadAll>

                                }
                            </div>*/}
                        </div>
                    </div>
                    <div className={classes.image}>
                        <div className={classes.frameGif}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientLogo;