import React from "react";
import classes from "./Profile.module.css";
import UIButton3 from "../../../UI/Buttons/UIButton3/UIButton3";
import HorizontalLineButton from "../../../UI/components/HorizontalLineButton/HorizontalLineButton";
import {Link} from "react-router-dom";

const Profile = () => {

    return(
        <div className={classes.profileGeneral}>
            <div className={classes.profileSubGeneral}>
                <div className={`${classes.profileRegion} ${classes.profilePersonalOfficeRegion}`}>
                    <div className={classes.profileSubBlocks}>
                        <span className={`${classes.spanTitleLayout} ${classes.spanTitle1}`}>особистий кабінет</span>
                        <span className={`${classes.spanParagraphLayout} ${classes.spanParagraph1}`}>Отримавши доступ до особистого кабінету, ви зможете: </span>
                        <ul className={classes.profileEnumeration1}>
                                <li><span className={`${classes.spanParagraphLayout}`}>відслідковувати технічний стан протеза;</span></li>
                                <li><span className={`${classes.spanParagraphLayout}`}>налаштовувати стискання руки;</span></li>
                                <li><span className={`${classes.spanParagraphLayout}`}>створити  для вашої руки яка не тільки дасть додатковий захист від зовнішніх чинників, а й підкреслить ваш індивідуальний стиль;</span></li>
                                <li><span className={`${classes.spanParagraphLayout}`}>стати частиною спільноти, з можливістю обмінюватися досвідом з іншими;</span></li>
                                <li><span className={`${classes.spanParagraphLayout}`}>відстежувати час наступних візитів та багато іншого.</span></li>
                        </ul>
                        <div className={classes.profileSubBlockButton}><UIButton3>Стати пацієнтом</UIButton3></div>
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
                        <ul className={classes.profileEnumeration2}>
                            <li><span className={`${classes.spanParagraphLayout}`}>додатковий захист від вологи та пилу;</span></li>
                            <li><span className={`${classes.spanParagraphLayout}`}>спосіб самовираження;</span></li>
                            <li><span className={`${classes.spanParagraphLayout}`}>можливість проявити свою креативність.</span></li>
                        </ul>

                        <div className={`${classes.spanAltParagraphLayout} ${classes.spanAltParagraph1}`}>
                            {/*If bug use display flex*/}
                            <Link style={{textDecorationLine:"none", color:"inherit"}} to={"/servicesPage"}>
                            <HorizontalLineButton><div >Дізнатися більше</div></HorizontalLineButton>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
  
};

export default Profile;