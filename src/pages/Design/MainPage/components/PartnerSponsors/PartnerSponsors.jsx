import React from 'react';
import classes from './PartnerSponsors.module.css'
import HorizontalLineButton from "../../../UI/components/HorizontalLineButton/HorizontalLineButton";
import {Link} from "react-router-dom";
import iconPartner1 from "../../../../../images/partners/partner1.png";
import iconPartner2 from "../../../../../images/partners/partner2.png";
import iconPartner3 from "../../../../../images/partners/partner3.png";
import iconPartner4 from "../../../../../images/partners/partner4.png";
import iconPartner5 from "../../../../../images/partners/partner5.png";
import iconPartner6 from "../../../../../images/partners/partner6.png";
import iconPartner7 from "../../../../../images/partners/partner7.png";
import iconSponsor1 from "../../../../../images/sponsors/sponsor1.png";
import iconSponsor2 from "../../../../../images/sponsors/sponsor2.png";
import iconSponsor3 from "../../../../../images/sponsors/sponsor3.png";
import iconSponsor4 from "../../../../../images/sponsors/sponsor4.png";
import iconSponsor5 from "../../../../../images/sponsors/sponsor5.png";
import iconSponsor6 from "../../../../../images/sponsors/sponsor6.png";
import iconSponsor7 from "../../../../../images/sponsors/sponsor7.png";
const PartnerSponsors = ({title, role}) => {

    function roleDef(){
        if(role == "партнер"){
            return(
                <div className={classes.carousellTrack}>
                    <img className={classes.icon} src={iconPartner1}/>
                    <img className={classes.icon} src={iconPartner2}/>
                    <img className={classes.icon} src={iconPartner3}/>
                    <img className={classes.icon} src={iconPartner4}/>
                    <img className={classes.icon} src={iconPartner5}/>
                    <img className={classes.icon} src={iconPartner6}/>
                    <img className={classes.icon} src={iconPartner7}/>

                    <img className={classes.icon} src={iconPartner1}/>
                    <img className={classes.icon} src={iconPartner2}/>
                    <img className={classes.icon} src={iconPartner3}/>
                    <img className={classes.icon} src={iconPartner4}/>
                    <img className={classes.icon} src={iconPartner5}/>
                    <img className={classes.icon} src={iconPartner6}/>
                    <img className={classes.icon} src={iconPartner7}/>

                    <img className={classes.icon} src={iconPartner1}/>
                    <img className={classes.icon} src={iconPartner2}/>
                    <img className={classes.icon} src={iconPartner3}/>
                    <img className={classes.icon} src={iconPartner4}/>
                    <img className={classes.icon} src={iconPartner5}/>
                    <img className={classes.icon} src={iconPartner6}/>
                    <img className={classes.icon} src={iconPartner7}/>
                </div>
            );
        }
        else if(role == "спонсор"){
            return (
                <div className={classes.carousellTrack}>
                    <img className={classes.icon} src={iconSponsor1}/>
                    <img className={classes.icon} src={iconSponsor2}/>
                    <img className={classes.icon} src={iconSponsor3}/>
                    <img className={classes.icon} src={iconSponsor4}/>
                    <img className={classes.icon} src={iconSponsor5}/>
                    <img className={classes.icon} src={iconSponsor6}/>
                    <img className={classes.icon} src={iconSponsor7}/>

                    <img className={classes.icon} src={iconSponsor1}/>
                    <img className={classes.icon} src={iconSponsor2}/>
                    <img className={classes.icon} src={iconSponsor3}/>
                    <img className={classes.icon} src={iconSponsor4}/>
                    <img className={classes.icon} src={iconSponsor5}/>
                    <img className={classes.icon} src={iconSponsor6}/>
                    <img className={classes.icon} src={iconSponsor7}/>

                    <img className={classes.icon} src={iconSponsor1}/>
                    <img className={classes.icon} src={iconSponsor2}/>
                    <img className={classes.icon} src={iconSponsor3}/>
                    <img className={classes.icon} src={iconSponsor4}/>
                    <img className={classes.icon} src={iconSponsor5}/>
                    <img className={classes.icon} src={iconSponsor6}/>
                    <img className={classes.icon} src={iconSponsor7}/>
                </div>
            );
        }
        return 0;
    }

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
                {roleDef()}
            </div>
        </div>
    );
};

export default PartnerSponsors;