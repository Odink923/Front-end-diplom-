import React from 'react';
import classes from "./PartnerSponsors.module.css";
import HorizontalLineButton from "../../../UI/components/HorizontalLineButton/HorizontalLineButton";

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

            <div className={classes.carousellContainer}>
                <div className={classes.carousellTrack}>
                <img className={classes.icon} src={"C:/Users/malya/OneDrive/Images/Memes/2.jpg"}/>
                <img className={classes.icon}/>
                <img className={classes.icon}/>
                <img className={classes.icon}/>
                <img className={classes.icon}/>

                <img className={classes.icon} src={"C:/Users/malya/OneDrive/Images/Memes/2.jpg"}/>
                <img className={classes.icon}/>
                <img className={classes.icon}/>
                <img className={classes.icon}/>
                <img className={classes.icon}/>

                <img className={classes.icon} src={"C:/Users/malya/OneDrive/Images/Memes/2.jpg"}/>
                <img className={classes.icon}/>
                <img className={classes.icon}/>
                <img className={classes.icon}/>
                <img className={classes.icon}/>
                </div>
            </div>
        </div>
    );
};

export default PartnerSponsors;