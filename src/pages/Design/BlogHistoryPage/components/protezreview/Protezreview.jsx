import React from 'react';
import classes from './Protezreview.module.css'

const Protezreview = ({ children }) => {
    return (
        <div className={classes.protezReviewGeneral}>
            <div className={classes.protezReviewSubGeneral}>
                <div className={`${classes.protezReviewSubBlock} ${classes.subBlock1Props}`}>
                    {children}
                </div>
                <div className={`${classes.protezReviewSubBlock} ${classes.subBlock2Props}`}>
                    <h3 className={classes.spanTitleLayout}>Керування біонічним протезом</h3>
                    <div className={`${classes.protezReviewSuperSubBlock} ${classes.superSubBlockSize1}`}>
                        <div><img className={classes.protezReviewImageFrame1}/></div>
                        <div className={`${classes.protezReviewSubBlock} ${classes.protezReviewParagraphBlock1}`}>
                            <p className={classes.spanParagraphLayout3}>Біонічний протез руки містить вбудовані електроди.
                                Для якісної роботи протеза необхідно щоб відповідні м’язи були активним та щоб куксоприймальна гільза щільно прилягала до залишкової кінцівки (тобто кукса повинна бути сталою, суттєво не змінювати об‘єм),
                                адже електроди отримують сигнали від м‘язів та перетворюють їх у ту чи іншу функцію біонічної кисті.</p>
                            <p className={classes.spanParagraphLayout3}>При ампутації кінцівки на рівні плеча, електроди зчитують сигнали з біцепсів і трицепсів людини,
                                передаючи їх у лікоть; далі через перемикач до кисті, іноді через ротаційне зап‘ястя.
                                Низка досліджень, які оцінювали якість керування біонічним протезом пацієнтами, показали, що на сьогодні рівень пасивного користування або цілковитої відмови від такого протеза є досить високим.
                                Це відбувається переважно тому, що немає зворотної біо-віддачі при користуванні протезом.</p>
                        </div>
                    </div>
                </div>
                <div className={`${classes.protezReviewSubBlock} ${classes.subBlock3Props}`}>
                    <svg className={classes.protezReviewQuoteSvg1} width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="37" height="32" fill="#DADADF"/>
                        <g id="&#208;&#145;&#208;&#187;&#208;&#190;&#208;&#179; - &#209;&#150;&#209;&#129;&#209;&#130;&#208;&#190;&#209;&#128;&#209;&#150;&#209;&#143;" clip-path="url(#clip0_94_4)">
                            <rect width="1920" height="6377" transform="translate(-392 -1971)" fill="#F2F5FF"/>
                            <path id="&#226;&#128;&#156;" d="M0 2.90909L10.8934 0L18.6878 29.0909L7.79442 32L0 2.90909ZM18.2183 2.90909L29.2056 0L37 29.0909L26.0127 32L18.2183 2.90909Z" fill="#2D3361"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_94_4">
                                <rect width="1920" height="6377" fill="white" transform="translate(-392 -1971)"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <h5 className={`${classes.spanParagraphLayout1} ${classes.protezReviewQuoteParagraphProps}`}>
                        За даними наших партнерів, понад 5000 українців сьогодні змушені знайомитися з протезуванням, щоб мати можливість вести повноцінне життя.
                    </h5>
                </div>
                <div className={`${classes.protezReviewSubBlock} ${classes.subBlock4Props}`}>
                    <h3 className={classes.spanTitleLayout}>Більша кількість хватів - кращий протез?</h3>
                    <div className={`${classes.protezReviewSuperSubBlock} ${classes.superSubBlockSize2}`}>
                        <div className={`${classes.protezReviewSubBlock} ${classes.protezReviewParagraphBlock2}`}>
                            <p className={classes.spanParagraphLayout3}>З появою та вже тривалим існуванням біонічних протезів,
                                вартість яких коливається від $15 тис до $50 тис, виробники
                                почали змагатись у кількості хватів їхніх кистей.

                                Згідно нещодавного дослідження, проведеного у
                                Нідерландах, людина з ампутацією верхньої кінцівки
                                переважно використовує до 5-ти хватів. Біонічні протези рук
                                з більшою кількістю хватів не змінюють якісно досвід
                                користувача. Однак, надзвичайно важливим елементом
                                кращої функціональності біонічної кисті є функція
                                автоматичного руху/ротації великого пальця. За відсутності
                                автоматичної функції великого пальця, користувач
                                змушений постійно виставляти великий палець у необхідну
                                позицію і це спричиняє додаткове незадоволення виробом.</p>
                            <p className={`${classes.spanParagraphLayout3} ${classes.spanParagraphResearch}`}>
                                Дослідження: <a href={"https://pure.rug.nl/ws/portalfiles/portal/600144701/s12984_023_01131_w.pdf"}>https://pure.rug.nl/ws/portalfiles/
                                portal/600144701/s12984_023_01131_w.pdf</a>
                            </p>
                        </div>
                        <div><img className={classes.protezReviewImageFrame2}/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Protezreview;