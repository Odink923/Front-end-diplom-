import React from 'react';
import AnimatedCursor from "react-animated-cursor";
import classes from "./Cursor.module.css";

const Cursor = () => {
    return (
        <AnimatedCursor
            innerSize={25}
            innerStyle={{
                mixBlendMode: "difference",
                opacity: "100%"
            }}
            outerSize={null}
            color='255, 255, 255'
            outerAlpha={null}
            innerScale={1.5}
            outerScale={null}
        />
    );
};

export default Cursor;