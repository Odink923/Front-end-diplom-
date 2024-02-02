import React from "react";
import classes from "./Invitation.module.css";
import DarkButton from "../../UI/DarkButton/DarkButton";
import UIButton2 from "../../UI/UIButton2/UIButton2";

const Invitation = () => {
    return(
        <div className={classes.invitationGeneral}>
            <div className={`${classes.invitationSubBlock} ${classes.subBlockDesign1}`}>
                <h2 className={classes.invitationTitle}>побачте все на власні очі</h2>
                <span className={`${classes.invitationParagraph} ${classes.paragraphDesign1}`}>Хочете самі переконатися, що все саме так як ми розповідаємо? Чи, можливо, бажаєте підглянути за процесом створення наших протезів?У вас є така можливість!</span>
                <span className={`${classes.invitationParagraph} ${classes.paragraphDesign2}`}>Якщо ви:</span>
                <ul className={classes.invitationEnumeration}>
                    <li><p className={classes.invitationParagraph}>потенційний користувач нашого протеза;</p></li>
                    <li><p className={classes.invitationParagraph}>людина, яка розуміє важливість нашої місії і хоче долучитися до неї ;</p></li>
                    <li><p className={classes.invitationParagraph}>керівник навчального закладу, який прагне збільшити обізнаність навколо теми протезування ;</p></li>
                </ul>
                <span className={`${classes.invitationParagraph} ${classes.paragraphDesign3}`}>Напишіть нам і побачте все на власні очі.</span>
                <UIButton2>Відвідати центр</UIButton2>
            </div>
            <img className={`${classes.invitationSubBlock} ${classes.subBlockDesign2}`}/>
        </div>
    )
}

export default Invitation;