import React, {useState} from 'react';
import classes from "../../WriteToUs.module.css";

const DateInput = ({children,onChange,value}) => {
    const [dateText, setDateText] = useState('text')
    return (
        <div>
            <input placeholder={`${children}*`} className={classes.formInput}
                   onClick={()=>setDateText("date")} type={dateText}
                   onChange={onChange}
                   value={value}
            />
        </div>
    );
};

export default DateInput;