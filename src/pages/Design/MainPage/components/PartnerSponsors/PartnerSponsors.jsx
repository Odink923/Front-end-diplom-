import React from 'react';
import classes from './PartnerSponsors.module.css'
import HorizontalLineButton from "../../../UI/components/HorizontalLineButton/HorizontalLineButton";
import {Link} from "react-router-dom";
const PartnerSponsors = ({title, role}) => {
    return (
        <div className={classes.all}>
            <div className={classes.conentTitle}>
                <div className={classes.title}>{title}</div>
                <div className={classes.reusableItemContent}>
                    <Link style={{textDecorationLine:"none", color:"inherit"}} to={"/aboutUsPage"}>
                    <HorizontalLineButton>
                        <div>
                            {`Стати ${role}ом`}
                        </div>
                </HorizontalLineButton>
                    </Link>
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