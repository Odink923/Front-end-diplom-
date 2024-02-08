import React from 'react';
import classes from './AboutUsMedia.module.css'
import AboutUsSuperSubBlock1 from "../../../mainpage/aboutUs/UI/AboutUsSuperSubBlock1";
import AboutUsPhotoFrame1 from "../../../mainpage/aboutUs/UI/AboutUsPhotoFrame1";

const AboutUsMedia = () => {
    return (
        <div className={classes.AboutUsMediaGeneral}>
            <div className={classes.AboutUsMediaSubGeneral}>
                <div className={`${classes.subBlock} ${classes.subBlockRight}`}>
                    <h2 className={`${classes.spanTitle1Layout} ${classes.spanTitle1Design}`}>медіа про нас</h2>
                    <h4 className={`${classes.spanParagraphTitleLayout} ${classes.spanParagraphTitle1Design}`}>
                        Заголовок статті про центр протезування
                    </h4>
                    <div className={`${classes.paragraphContainerBlock} ${classes.aboutUsMediaParagraphLayout}`}>
                        <p>Екскурсії для навчальних закладів, можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.</p>
                        <p>Екскурсії для навчальних закладів, можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.</p>
                        <p>Екскурсії для навчальних закладів, можливість відвідати центр. Екскурсії для навчальних закладів, можливість відвідати центр і так далі тому подібне.</p>
                    </div>
                    <div className={`${classes.readMoreRef} ${classes.aboutUsMediaParagraphLayout}`}>
                        <a href={"#"}>Читати повністю</a>
                        <svg width="222" height="29" style={{marginTop: "-17"}} viewBox="0 0 222 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-5.84597e-07 14.626L219.5 14.6219M219.5 14.6219L207.719 1M219.5 14.6219L207.719 28" stroke="#D1D8F4" stroke-width="3"/>
                        </svg>
                    </div>
                    <img className={classes.aboutUsMediaPhotoFrame}/>
                </div>
                <div className={`${classes.subBlock} ${classes.subBlockLeft}`}>
                    <AboutUsSuperSubBlock1 height={382}/>
                    <AboutUsSuperSubBlock1 height={382}/>
                    <AboutUsSuperSubBlock1 height={382}/>
                    <AboutUsSuperSubBlock1 height={437}/>
                </div>
            </div>
        </div>
    );
};

export default AboutUsMedia;