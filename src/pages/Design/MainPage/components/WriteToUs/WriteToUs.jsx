import React, {useContext, useState} from 'react';
import classes from './WriteToUs.module.css'
import SendButton from "./UI/SendButton/SendButton";
import DropList from "./UI/DropList/DropList";
import UiButton2 from "../../../UI/Buttons/UIButton2/UIButton2";
import DropItem from "./UI/DropItem/DropItem";

import {Context} from "../../../../../index";
import {useNavigate} from "react-router-dom";
import {registration} from "../../../../../http/userAPI";

const WriteToUs = ({register}) => {
    const [selectedItem, setSelectedItem] = useState(register?"Місцезнаходження":"Тема звернення*");
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleItemClick = (itemText) => {
        setSelectedItem(itemText);
        setIsOpen(false);
    };

    const click = async () => {
        try {
            let data;
            data = await registration(email);
            navigate('/');

        } catch (e) {
            alert(e.response.data.message)
        }
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={classes.all}>
            <div className={classes.title}>
                ВИ ЗАЦІКАВЛЕНІ У СПІВПРАЦІ ЧИ ПРОСТО ХОЧЕТЕ ПЕРШИМИ ДІЗНАВАТИСЯ ЩО У НАС НОВОГО?
            </div>
            <div className={classes.formContent}>
                <div className={classes.rightTitle}>
                Напишіть нам:
                </div>
                <div>
                <div>
                    <input placeholder="Ім’я та прізвище*" className={classes.formInput}/>
                </div>
                <div>
                    <input placeholder="Електронна адреса*" className={classes.formInput} onChange={e => setEmail(e.target.value)}
                           value={email}/>
                </div>


                    {register ? (
                        <div>
                            <input placeholder="Дата народження*" className={classes.formInput} />
                            <input placeholder="Рік отримання травми*" className={classes.formInput} />
                            <DropList toggleDropdown={toggleDropdown} isOpen={isOpen} selectedItem={selectedItem}>
                                <DropItem onClick={() => handleItemClick("Тернопіль")}>Тернопіль</DropItem>
                                <DropItem onClick={() => handleItemClick("Львів")}>Львів</DropItem>
                                <DropItem onClick={() => handleItemClick("Івано-Франківськ")}>Івано-Франківськ</DropItem>
                                <DropItem onClick={() => handleItemClick("Рівне")}>Рівне</DropItem>
                                <DropItem onClick={() => handleItemClick("Луцьк")}>Луцьк</DropItem>
                            </DropList>
                            <input placeholder="Документи*" className={classes.formInput} />
                        </div>
                    ) : (
                        <DropList toggleDropdown={toggleDropdown} isOpen={isOpen} selectedItem={selectedItem}>
                            <DropItem onClick={() => handleItemClick("Хочу отримувати новини на пошту")}>Хочу отримувати новини на електронну пошту</DropItem>
                            <DropItem onClick={() => handleItemClick("Хочу стати спонсором")}>Хочу стати спонсором</DropItem>
                            <DropItem onClick={() => handleItemClick("Хочу стати партнером")}>Хочу стати партнером</DropItem>
                            <DropItem onClick={() => handleItemClick("Хочу дізнатися про актуальні вакансії ")}>Хочу дізнатися про актуальні вакансії  </DropItem>
                            <DropItem onClick={() => handleItemClick("Інше")}>Інше</DropItem>
                        </DropList>
                    )}
                <div>
                    <textarea  placeholder="Ваше повідомлення"  className={`${classes.formInput} ${classes.userInput}`}/>
                </div>
                <div className={classes.positionSendButton}>
                <UiButton2 onClick={click}>Надіслати</UiButton2>
                </div>
                </div>
            </div>

        </div>
    );
};

export default WriteToUs;