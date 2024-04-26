import React from 'react';
import classes from './LogoBlog.module.css'
import Navbar from "../../../UI/Managament/Navbar/Navbar";
import ReadAll from "../../../UI/components/ReadAll/ReadAll";
import ViewMoreButton from "../../../UI/Buttons/ViewMoreButton/ViewMoreButton";

const LogoBlog = ({title, visible}) => {

    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>
                <Navbar></Navbar>
                <div className={classes.row}>
                    <div className={classes.text}>
                        <div className={classes.textContent}>
                            <div className={classes.label}>
                                <div className={classes.textWrapper}>
                                    {title}
                                </div>
                            </div>
                            <div className={classes.label3}>
                                <div className={classes.textWrapper3}>
                                    ПИЛАТЮК РОМАН. ТРАВМА - НЕ ВИРОК. ІСТОРІЯ ЖИТТЯ З ПРОТЕЗОМ
                                </div>
                            </div>
                            <svg width="37" height="32" viewBox="0 0 37 32" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path id="&#226;&#128;&#156;"
                                      d="M0 2.90909L10.8934 0L18.6878 29.0909L7.79442 32L0 2.90909ZM18.2183 2.90909L29.2056 0L37 29.0909L26.0127 32L18.2183 2.90909Z"
                                      fill="#2D3361"/>
                            </svg>


                            <div className={classes.label2}>
                                <p className={classes.description}>Війна в Україні стала серйозним випробуванням
                                    для тих, хто отримав тяжкі поранення та втратив кінцівки – як військових,
                                    так і мирних мешканців. За даними наших партнерів, понад 5000 українців сьогодні
                                    змушені
                                    знайомитися з протезуванням, щоб мати можливість вести повноцінне життя.
                                </p>
                            </div>

                            <div className={classes.other}>
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
                            </div>
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

export default LogoBlog;