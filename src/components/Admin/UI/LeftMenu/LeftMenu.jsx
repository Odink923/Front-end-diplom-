import React from 'react';
import classes from './LeftMenu.module.css';
import SummaryMenuButtonsType1 from '../Buttons/SummaryMenuButtonsType1/SummaryMenuButtonsType1';
import SummaryMenuButtonsType2 from '../Buttons/SummaryMenuButtonsType2/SummaryMenuButtonsType2';

const LeftMenu = () => {
    return (
        <div className={classes.general}>
            <div className={classes.subGeneral}>
                <details className={classes.leftMenuDetails}>
                    <summary>Меню</summary>
                    <SummaryMenuButtonsType1>Акаунт адміна</SummaryMenuButtonsType1>
                    <SummaryMenuButtonsType1>Користувачі</SummaryMenuButtonsType1>
                    <SummaryMenuButtonsType1>Вхідні повідомлення</SummaryMenuButtonsType1>
                    <SummaryMenuButtonsType1>Керування контентом</SummaryMenuButtonsType1>
                </details>

                <details className={`${classes.leftMenuDetails}`}>
                    <summary>Повідомлення за темою</summary>
                    <SummaryMenuButtonsType2>Усі повідомлення</SummaryMenuButtonsType2>
                    <SummaryMenuButtonsType2>Потенційні пацієнти</SummaryMenuButtonsType2>
                    <SummaryMenuButtonsType2>Рекрутинг</SummaryMenuButtonsType2>
                    <SummaryMenuButtonsType2>Партнерство</SummaryMenuButtonsType2>
                    <SummaryMenuButtonsType2>Спонсорство</SummaryMenuButtonsType2>
                    <SummaryMenuButtonsType2>Інше</SummaryMenuButtonsType2>
                    <SummaryMenuButtonsType2>Актуальні вакансії</SummaryMenuButtonsType2>
                    <SummaryMenuButtonsType2>Розсилка</SummaryMenuButtonsType2>
                </details>

                <details className={`${classes.leftMenuDetails}`}>
                    <summary>Додатково</summary>
                    <SummaryMenuButtonsType2>Важливі</SummaryMenuButtonsType2>
                    <SummaryMenuButtonsType2>Надіслані</SummaryMenuButtonsType2>
                    <SummaryMenuButtonsType2>Заблоковані</SummaryMenuButtonsType2>
                </details>
            </div>
        </div>

    );
};

export default LeftMenu;