import React from 'react';
import classes from './TeamOrService.module.css'
import ViewMoreButton from "../ViewMoreButton/ViewMoreButton";

const TeamOrService = ({text1, text2, discription}) => {
    return (
        <div className={classes.frame}>
            <div className={classes.row}>
                <div className={classes.label}>
                    <div className={classes.textWrapper}>{text1}</div>
                </div>
                <div className={classes.label2}>
                    <div className={classes.textWrapper2}>{text2}</div>
                </div>
            </div>
            <div className={classes.box}>
                    <div className={classes.label3}>
                        <div className={classes.discription}>{discription}</div>
                    </div>
                    <div className={classes.viewMore}>
                        <ViewMoreButton></ViewMoreButton>
                    </div>
            </div>
        </div>
    );
};

export default TeamOrService;