import React from 'react';
import classes from './PartnerSponsors.module.css'
import HorizontalLineButton from "../../UI/HorizontalLineButton/HorizontalLineButton";
const PartnerSponsors = ({title, role}) => {
    return (
        <div className={classes.all}>
            <div className={classes.conentTitle}>
                <div className={classes.title}>{title}</div>
                <div className={classes.reusableItemContent}>
                  <div> Стати {role}ом</div>
                    <HorizontalLineButton>
                    {/*потрібно вставити стрічку d="" з svg (костиль)*/}
                    M-5.8463e-07 14.6252L232 14.6219M232 14.6219L220.219 0.999999M232 14.6219L220.219 28
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