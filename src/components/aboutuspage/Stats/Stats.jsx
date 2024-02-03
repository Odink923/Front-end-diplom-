import React from "react";
import classes from "./Stats.module.css";
import StatsInfoReUsableItem from "../UI/statsInfoReUsableItem";


const Stats = () => {

    return(
        <div className={classes.statsGeneral}>
            <div className={classes.statsSubGeneral}>
                <div className={classes.statsSubBlock}>
                    <div className={classes.statsPhotoBlock}></div>

                    <div className={classes.statsInfoBlock}>
                        <StatsInfoReUsableItem countOfTitle={"1000+"} description={"пацієнтів на рік"}></StatsInfoReUsableItem>
                        <StatsInfoReUsableItem countOfTitle={"1365"} description={"протезів встановлено"}></StatsInfoReUsableItem>
                        <StatsInfoReUsableItem countOfTitle={"50+"} description={"медичних фахівців"}></StatsInfoReUsableItem>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Stats;