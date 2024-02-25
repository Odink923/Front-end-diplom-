import React from 'react';
import classes from "./PartnerSponsors.module.css";
import HorizontalLineButton from "../../../../../components/HorizontalLineButton/HorizontalLineButton";

const PartnerSponsors = ({title, role,description}) => {
    return (
        <div className={classes.all}>
            <div className={classes.conentTitle}>
                <div className={classes.title}><div>{title}</div>
                    <div className={classes.titleDescription}>{description}</div>

                    </div>

                <div className={classes.reusableItemContent}>

                    <HorizontalLineButton>
                        <div>
                            Стати {role}
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