import React from 'react';
import classes from './PartnerSponsors.module.css'
const PartnerSponsors = ({title, role}) => {
    return (
        <div className={classes.all}>
            <div className={classes.conentTitle}>
                <div className={classes.title}>{title}</div>
                <div className={classes.reusableItemContent}>Стати {role}
                    <svg width="217" height="25" viewBox="0 0 217 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-4.82938e-07 12.249L214.5 12.2487M214.5 12.2487L204.75 0.998723M214.5 12.2487L204.75 23.2973" stroke="#2D3361" stroke-width="3"/>
                    </svg>

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