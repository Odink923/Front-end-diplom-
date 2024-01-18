import React from 'react';
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <div className={classes.futter}>
            <div className={classes.futterContent}>
                <div className={classes.titleContent}>
                    <div className={classes.title}>СЛОГАН БАЖАЄТЕ ПЕРШИМИ ДІЗНАВАТИСЯ</div>
                    <div className={classes.logo}>ЛОГОТИП</div>
                </div>
                <div className={classes.contact}>
                    <div className={classes.contactContent}>
                        <div className={classes.contactItems}>
                            <div>+380 99 875 65 67</div>
                            <div>GETProsthetics@gmail.com</div>
                            <div>Київ, вул. Калачівська, 13 (Стара Дарниця)</div>
                        </div>
                    </div>
                    <div className={classes.socialMedia}>
                        <div>
                        ( INSTAGRAM )
                        </div>
                        <div>
                            ( FACEBOOK )
                        </div>
                        <div>
                            ( LINKEDIN )
                        </div>
                    </div>
                </div>
                <div className={classes.navFutter}>
                    <div className={classes.navFutterContent}>
                    <div>Пацієнтам</div>
                    <div>Про нас</div>
                    <div>Блог</div>
                    <div>FAQ</div>
                    <div>ENG/УКР</div>
                    <div>Увійти</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;