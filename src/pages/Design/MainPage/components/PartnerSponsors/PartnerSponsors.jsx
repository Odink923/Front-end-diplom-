import React from 'react';
import classes from './PartnerSponsors.module.css'
import HorizontalLineButton from "../../../UI/components/HorizontalLineButton/HorizontalLineButton";
const PartnerSponsors = ({title, role}) => {
    return (
        <div className={classes.all}>
            <div className={classes.conentTitle}>
                <div className={classes.title}>{title}</div>
                <div className={classes.reusableItemContent}>

                    <HorizontalLineButton>
                        <div>
                        Стати {role}ом
                        </div>
                </HorizontalLineButton>
                </div>
            </div>
            <div className={classes.contentIcons}>
                <div className={classes.icon}></div>
                <div className={classes.icon}></div>
                <div className={classes.icon}></div>
                <div className={classes.icon}></div>
                <div className={classes.icon}></div>
            </div>
        </div>
    );
};

export default PartnerSponsors;