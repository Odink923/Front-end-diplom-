import React from 'react';
import classes from './ToKnowBlock.module.css'

const ToKnowBlock = () => {
    return (
        <div className={classes.box}>
            <div className={classes.header}>
                <div className={classes.label}>
                    <div className={classes.textWrapper}>
                        БІОНІЧНИЙ ПРОТЕЗ РУКИ. ЩО ВАРТО ЗНАТИ
                    </div>
                </div>
            </div>
            <div className={classes.row}>

                <div className={classes.image}>
                    <div className={classes.frameGif}>

                    </div>
                </div>

                <div className={classes.text}>
                    <div className={classes.textContent}>


                        <svg width="37" height="32" viewBox="0 0 37 32" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path id="&#226;&#128;&#156;"
                                  d="M0 2.90909L10.8934 0L18.6878 29.0909L7.79442 32L0 2.90909ZM18.2183 2.90909L29.2056 0L37 29.0909L26.0127 32L18.2183 2.90909Z"
                                  fill="#2D3361"/>
                        </svg>


                        <div className={classes.label2}>
                            <p className={classes.description}>За даними наших партнерів, понад
                                5000 українців сьогодні змушені знайомитися з протезуванням,
                                щоб мати можливість вести повноцінне життя.
                            </p>
                        </div>

                        <div className={classes.textFooter}>
                            <div className={classes.left}>

                                <div className={classes.label3}>
                                    <div className={classes.textWrapper3}>( Біонічний протез )</div>
                                </div>
                                <div className={classes.label3}>
                                    <div className={classes.textWrapper3}>( 3Д друк )</div>
                                </div>
                                <div className={classes.label3}>
                                    <div className={classes.textWrapper3}>( Протезування в Україні )</div>
                                </div>

                            </div>
                            <div className={classes.right}>
                                <div className={classes.date}>
                                    <div className={classes.dateText}>22.01.2024</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className={classes.scroll}>

                </div>

            </div>
        </div>
    );
};

export default ToKnowBlock;