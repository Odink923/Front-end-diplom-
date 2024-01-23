import React from "react";
import classes from "./Profile.module.css";
import ui from "../ui/ui.module.css"

const Profile = () => {

    return(
        <div className={classes.profileGeneral}>
            <div className={classes.profileSubGeneral}>
                <div className={`${classes.profileRegion} ${classes.profilePersonalOfficeRegion}`}>
                    <div className={classes.profileSubBlocks}>
                        <span className={`${classes.spanTitleLayout} ${classes.spanTitle1}`}>особистий кабінет</span>
                        <span className={`${classes.spanParagraphLayout} ${classes.spanParagraph1}`}>Отримавши доступ до особистого кабінету, ви зможете: </span>
                        <ul className={classes.enumeration1}>
                                <li><span className={`${classes.spanParagraphLayout}`}>відслідковувати технічний стан протеза;</span></li>
                                <li><span className={`${classes.spanParagraphLayout}`}>налаштовувати стискання руки;</span></li>
                                <li><span className={`${classes.spanParagraphLayout}`}>створити  для вашої руки яка не тільки дасть додатковий захист від зовнішніх чинників, а й підкреслить ваш індивідуальний стиль;</span></li>
                                <li><span className={`${classes.spanParagraphLayout}`}>стати частиною спільноти, з можливістю обмінюватися досвідом з іншими;</span></li>
                                <li><span className={`${classes.spanParagraphLayout}`}>відстежувати час наступних візитів та багато іншого.</span></li>
                        </ul>
                        <button className={`${ui.becomePatientButtonLayout} ${ui.becomePatientButton1}`}><p>Стати пацієнтом</p></button>
                    </div>
                    <div className={classes.profileSubBlocks}>
                        <shape className={classes.profilePhotoFrame1}></shape>
                    </div>
                </div>
                <div className={`${classes.profileRegion} ${classes.profileCustomSkinRegion}`}>
                    <div className={classes.profileSubBlocks}>
                        <shape className={classes.profilePhotoFrame2}></shape>
                    </div>
                    <div className={classes.profileSubBlocks}>
                        <span className={`${classes.spanTitleLayout} ${classes.spanTitle2}`}>кастомні оболонки</span>
                        <ul className={classes.enumeration2}>
                            <li><span className={`${classes.spanParagraphLayout}`}>додатковий захист від вологи та пилу;</span></li>
                            <li><span className={`${classes.spanParagraphLayout}`}>спосіб самовираження;</span></li>
                            <li><span className={`${classes.spanParagraphLayout}`}>можливість проявити свою креативність.</span></li>
                        </ul>
                        <span className={`${classes.spanAltParagraphLayout} ${classes.spanAltParagraph1}`}>Дізнатися більше</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="237" height="25" style={{margin: "-10px 0px 0px 85"}} viewBox="0 0 237 25" fill="none">
                            <path d="M-4.82991e-07 12.249L234.5 12.25M234.5 12.25L224.75 0.999967M234.5 12.25L224.75 23.2986" stroke="#2D3361" stroke-width="3"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
  
};

export default Profile;