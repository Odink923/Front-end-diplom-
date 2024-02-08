import React from 'react';
import classes from '../../../blogpage/blognews/AboutUsMedia/AboutUsMedia.module.css'
import AboutUsSuperSubBlock1 from "./AboutUsSuperSubBlock1";

const ArticleCardsComponent = () => {
    return (
        <div className={`${classes.subBlock} ${classes.subBlockLeft}`}>
            <AboutUsSuperSubBlock1 height={382}/>
            <AboutUsSuperSubBlock1 height={382}/>
            <AboutUsSuperSubBlock1 height={382}/>
            <AboutUsSuperSubBlock1 height={437}/>
        </div>
    );
};

export default ArticleCardsComponent;