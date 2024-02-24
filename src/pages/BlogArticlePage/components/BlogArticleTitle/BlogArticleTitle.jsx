import React from 'react';
import classes from './BlogArticleTitle.module.css'
import Navbar from "../../../../components /Navbar/Navbar";

const BlogArticleTitle = () => {
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
                            <div className={classes.textWrapper}>Блог</div>
                            <svg className={classes.vector} xmlns="http://www.w3.org/2000/svg" width="20" height="11"
                                 viewBox="0 0 20 11" fill="none">
                                <path
                                    d="M-1.86696e-07 5.53895L19 5.53893M19 5.53893L15.2309 1.18994M19 5.53893L15.2309 9.81006"
                                    stroke="#8C96C1" stroke-width="1.15973"/>
                            </svg>
                            <div className={classes.div}>Біонічний протез руки. Що варто знати</div>
                        </div>
                        {/* End component*/}
                    </div>
                </div>

                <div className={classes.container}>
                    <div className={classes.contentBlock}>
                        <div className={classes.frame2}>
                            <div className={classes.title}>
                                <div className={classes.label}>
                                    <div className={classes.textWrapper2}>Біонічний протез руки. Що варто знати</div>
                                </div>
                            </div>

                            <div className={classes.row}>
                                <div className={classes.left}>

                                    <div className={classes.label}>
                                        <div className={classes.textWrapper4}>( Біонічний протез )</div>
                                    </div>
                                    <div className={classes.label}>
                                        <div className={classes.textWrapper4}>( 3Д друк )</div>
                                    </div>
                                    <div className={classes.label}>
                                        <div className={classes.textWrapper4}>( Протезування в Україні )</div>
                                    </div>

                                </div>
                                    <div className={classes.date}>
                                        <div className={classes.dateText}>22.01.2024</div>
                                    </div>
                            </div>

                            <div className={classes.box2}>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BlogArticleTitle;