import React from 'react';
import DropDownList from "../../../components/DropDownList/DropDownList";
import DropDownItem from "./components/DropDownItem/DropDownItem";

const Faq = () => {
    return (
        <div>
            <DropDownList>
                <DropDownItem title={`Як довго зазвичай триває процес виготовлення протезу?`} upItem={true}></DropDownItem>
                <DropDownItem title={`Які гарантії та сервісні послуги ви надаєте разом з протезами?`}></DropDownItem>
                <DropDownItem title={`Як довго зазвичай триває процес виготовлення протезу?`}></DropDownItem>
                <DropDownItem title={`Чи проводяться тренування та підтримка для користувачів після отримання протезу?`}></DropDownItem>
                <DropDownItem title={`Які переваги має виготовлення протезів за допомогою 3D друку?`}></DropDownItem>
                <DropDownItem title={`Як у вас проходить процес навчання користуванню протезом?`}></DropDownItem>
                <DropDownItem title={`Як ви використовуєте технології 3D друку для створення індивідуальних протезів?`}></DropDownItem>
                <DropDownItem title={`Чи можливе індивідуалізоване налаштування біонічних протезів для  потреб користувача?`}></DropDownItem>
                <DropDownItem title={`Які функції біонічних протезів можна програмувати та налаштовувати?`} downItem={true}></DropDownItem>
            </DropDownList>
        </div>
    );
};

export default Faq;