import React, {useContext, useState} from 'react';
import classes from './WriteToUs.module.css'
import SendButton from "./UI/SendButton/SendButton";
import DropList from "./UI/DropList/DropList";
import UiButton2 from "../../../UI/Buttons/UIButton2/UIButton2";
import DropItem from "./UI/DropItem/DropItem";

import {Context} from "../../../../../index";
import {useNavigate} from "react-router-dom";
import {registration} from "../../../../../http/userAPI";
import DateInput from "./UI/DateInput/DateInput";

const WriteToUs = ({register}) => {
    const [selectedItem, setSelectedItem] = useState(register?"Місцезнаходження":"Тема звернення*");
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const navigate = useNavigate()
    const [date, setDate] = useState('');
    const [yearGetHurt, setYearGetHurt] = useState('');
    const [message, setMessage] = useState('')

    const handleItemClick = (itemText) => {
        setSelectedItem(itemText);
        setIsOpen(false);
    };

    // const click = async () => {
    //     try {
    //         let data;
    //         data = await registration(email);
    //         const userInfoData = {
    //             name: name,
    //             number: number,
    //             place: selectedItem,
    //             date: date,
    //             yearGetHurt: dateHurt,
    //             message: message,
    //         };
    //
    //         navigate('/');
    //
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }
    // }

    const click = async () => {
        try {
            const userInfoData = [{
                name: name,
                number:number,
                date:date,
                place:selectedItem,
                yearGetHurt:yearGetHurt,
                message:message

            }];
            await registration({ email, userInfos: JSON.stringify(userInfoData) });
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
                    <input placeholder="Ім’я та прізвище*" className={classes.formInput}
                           onChange={e => setName(e.target.value)}
                           value={name}
                    />
                </div>
                <div>
                    <input placeholder="Електронна адреса*" className={classes.formInput}
                           onChange={e => setEmail(e.target.value)}
                           value={email}/>
                </div>


                    {register ? (
                        <div>
                            <input placeholder="Номер телефону*" className={classes.formInput}
                                   onChange={e => setNumber(e.target.value)}
                                   value={number}/>
                            <DateInput onChange={e => setDate(e.target.value)}
                                       value={date}
                            >Дата народження</DateInput>
                            <DateInput onChange={e => setYearGetHurt(e.target.value)}
                                       value={yearGetHurt}
                            >Рік отримання травми</DateInput>
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
                    <textarea  placeholder="Ваше повідомлення"
                               onChange={e => setMessage(e.target.value)}
                               value={message}
                               className={`${classes.formInput} ${classes.userInput}`}/>
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