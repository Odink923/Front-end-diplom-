import React from 'react';
import classes from './ToKnowBlockOther.module.css'

const ToKnowBlockOther = () => {
    return (
        <div className={classes.box}>

            <div className={classes.row}>

                <div className={classes.image}>
                    <div className={classes.frameGif}>

                    </div>
                </div>

                <div className={classes.text}>
                    <div className={classes.textContent}>


                        <div className={classes.label}>
                            <div className={classes.textWrapper}>
                                КАНАДА СПРИЯЄ СВОЄЧАСНІЙ ПІСЛЯОПЕРАЦІЙНІЙ
                                РЕАБІЛІТАЦІЇ УКРАЇНЦІВ, ЯКІ ВТРАТИЛИ КІНЦІВКИ.
                            </div>
                        </div>


                        <div className={classes.label2}>
                            <p className={classes.description}>За сприяння Канадського фонду
                                місцевих ініціатив було зібрано та передано 2000 рюкзаків для
                                осіб з ампутацією кінцівки, а також створено онлайн групу підтримки.
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
                        <div className={classes.other}>

                        </div>

                    </div>
                </div>

                <div className={classes.scroll}>

                </div>

            </div>
        </div>
    );
};

export default ToKnowBlockOther;