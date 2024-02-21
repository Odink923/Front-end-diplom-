import React from 'react';
import classes from './Material.module.css'
const Material = () => {
    return (
        <div>
            <div className={classes.title}>
                <div className={classes.titleContent}>
                    <div><svg width="52" height="25" viewBox="0 0 52 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M51.1494 12.25L2 12.25M2 12.25L11.75 0.999975M2 12.25L11.75 23.2986" stroke="#2D3361" stroke-width="3"/>
                    </svg>
                    </div>
                    <div>(МАТЕРІАЛИ)</div>
                    <div className={classes.titleText}>
                        <div>ВИТРИВАЛІСТЬ</div>
                        <div>КОНТРОЛЬ</div>
                        <div>КРІПЛЕННЯ</div>
                        <div>ІНДИВІДУАЛЬНІСТЬ</div>
                        <div>ОБСЛУГОВУВАННЯ</div>
                    </div>
                    <div>
                    <svg width="52" height="25" viewBox="0 0 52 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.149414 12.25L49.2988 12.25M49.2988 12.25L39.5488 0.999975M49.2988 12.25L39.5488 23.2986" stroke="#2D3361" stroke-width="3"/>
                    </svg>
                    </div>
                </div>
                <div className={classes.model}>

                </div>
            </div>
        </div>
    );
};

export default Material;