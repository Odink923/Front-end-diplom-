import React from "react";
import classes from "../Stats/Stats.module.css";

const StatsInfoReUsableItem = (props) => {
    return(
        <div className={classes.statsSubInfoBlock}>
            <span className={classes.statsSpanTitle}>{props.countOfTitle}</span>
            <span className={classes.statsSpanParagraph}>{props.description}</span>
        </div>

    )
}

export default StatsInfoReUsableItem;