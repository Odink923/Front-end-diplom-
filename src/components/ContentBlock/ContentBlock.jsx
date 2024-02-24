import React from 'react';
import classes from './ContentBlock.module.css';

const ContentBlock = ({header,text1,text2}) => {
    return (
        <div className={classes.contentBlock}>

            <div className={classes.imageFrame}>
                <div className={classes.image}></div>
            </div>

            <div className={classes.text}>
                <div className={classes.label}>
                    <div className={classes.textWrapper}>{header}</div>
                </div>
                <div className={classes.parag}>
                    <div className={classes.label2}>
                        <div className={classes.textWrapper2}>{text1}</div>
                    </div>
                    <div className={classes.label2}>
                        <div className={classes.textWrapper2}>{text2}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentBlock;