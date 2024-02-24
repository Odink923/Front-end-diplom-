import React, { useState } from 'react';
import classes from './Searchbar.module.css'
import IconsManager from '../../Icons/IconsManager'

const Searchbar = () => {

    const [searchInput, setSearchInput] = useState("");

    return (

        <div className={classes.searchBarGeneral}>
            <div className={`${classes.iconBlock}`}><IconsManager iconId="1"/></div>
            <input className={classes.searchBarBlock} type="text" placeholder="Пошук"/>
        </div>

    );
};

export default Searchbar;