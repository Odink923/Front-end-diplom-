import React, {cloneElement, useState} from 'react';
import {Waypoint} from "react-waypoint";
import {useSpring,animated} from "react-spring";
const CustomWaypoint = ({children}) => {
    const [inView, setInView] = useState(false);



    const childrenWithProps = cloneElement(children, { inView });
    return (
        <Waypoint   onEnter={() => setInView(true)} onLeave={()=> setInView(false)}>
            <div >
                {childrenWithProps}
            </div>
        </Waypoint>
    );
};

export default CustomWaypoint;