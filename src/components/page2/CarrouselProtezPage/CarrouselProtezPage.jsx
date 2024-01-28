import React from 'react';
import Carrousel from "../../UI/Carrousel/Carrousel";
import classes from ".//CarrouselProtezPage.module.css"

const CarrouselProtezPage = () => {
    const mockedItems = [
        { id: 1, title: '( 1 ) Кулак', description: "Найчастіше використовується для тримання пляшок, склянок, захоплення дверних ручок." },
        { id: 2, title: '( 2 ) Item 2', description: "Найчастіше використовується для тримання пляшок, склянок, захоплення дверних ручок."},
        { id: 3, title: '( 3 ) Item 3', description: "Найчастіше використовується для тримання пляшок, склянок, захоплення дверних ручок."},
        { id: 5, title: 'Item 4',description: "Найчастіше використовується для тримання пляшок, склянок, захоплення дверних ручок." },
        { id: 6, title: 'Item 5',description: "Найчастіше використовується для тримання пляшок, склянок, захоплення дверних ручок." },
        { id: 7, title: 'Item 6',description: "Найчастіше використовується для тримання пляшок, склянок, захоплення дверних ручок." },

    ];
    return (
        <div>
            <div className={classes.title}>
            <div className={classes.titleContent}>
                <div>Доступні стискання руки = автономність у повсякденному житті.</div>
                <div className={classes.bigTitle}>12 СТИСКАНЬ РУКИ</div>
            </div>
            </div>
            <Carrousel mockedItems={mockedItems}></Carrousel>
        </div>
    );
};

export default CarrouselProtezPage;