import React, {useState} from 'react';
import { useRef } from 'react';
import classes from './Toolbar.module.css';
import SearchBar from '../../Management/Searchbar/Searchbar';
import IconsManager from '../../Icons/IconsManager';
import MessageFilterOptionsPopup from '../../Popups/MessageFilterOptionsPopup/MessageFilterOptionsPopup';


const Toolbar = () => {

    const [buttonPopup, setButtonPopup] = useState(false);

    const [buttonFocus, setStyles] = useState(false);

    return (
        <div className={classes.general}>

            <div><IconsManager iconId="0"/></div>

            <div className={`${classes.tools} ${classes.toolsDesign}`}>
                <div className={`${classes.searchTools} ${classes.toolsDesign}`}>
                    <SearchBar/>

                    <button className={classes.filterPopupButton} onClick={() => { buttonPopup ? setButtonPopup(false) : setButtonPopup(true)}}><IconsManager isFocused={buttonFocus} setFocus={setStyles} iconId="2"/></button>
                    <MessageFilterOptionsPopup trigger={buttonPopup} setTrigger={setButtonPopup}/>

                    <IconsManager iconId="3"/>
                </div>

                <div className={`${classes.otherTools} ${classes.toolsDesign}`}>
                    <IconsManager iconId="4"/>
                    <IconsManager iconId="5"/>
                    <IconsManager iconId="6"/>
                    <IconsManager iconId="7"/>
                    <IconsManager iconId="8"/>
                </div>

            </div>

            <div><IconsManager iconId="9"/></div>

        </div>
    );
};

export default Toolbar;