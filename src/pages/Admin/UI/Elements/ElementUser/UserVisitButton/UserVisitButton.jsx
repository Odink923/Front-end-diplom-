import React, {useState} from 'react';
import classes from './UserVisitButton.module.css'

const UserVisitButton = ({text, color}) => {
    const [stateSvg, setStateSvg] = useState(true);
    const toggleSvg= ()=>{
        setStateSvg(!stateSvg);
    }
    return (
        <span onClick={toggleSvg} className={classes.box}>
            {text}
            {
                stateSvg?
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z" fill="white" fill-opacity="0.5"/>
            </svg>:
            <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.03658 -0.000195698L7.47311 6.01564L0.544975 5.98384L4.03658 -0.000195698Z" fill="white" fill-opacity="0.5"/>
            </svg>
            }
        </span>
    );
};

export default UserVisitButton;