import React from 'react';
import classes from '../../../../BlogPageNews/components/AboutUsMedia/AboutUsMedia.module.css'
import AboutUsSuperSubBlock1 from "./AboutUsSuperSubBlock1";

const ArticleCardsComponent = () => {
    return (
        <div className={`${classes.subBlock} ${classes.subBlockLeft}`}>
            <AboutUsSuperSubBlock1 height={382}/>
            <AboutUsSuperSubBlock1 height={382}/>
            <AboutUsSuperSubBlock1 height={382}/>
            <AboutUsSuperSubBlock1 height={382}/>
        </div>
    );
};

export default ArticleCardsComponent;