import {makeAutoObservable} from "mobx";
import {login} from "../http/userAPI"
import SummaryMenuButtonsType2 from "../pages/Admin/UI/Buttons/SummaryMenuButtonsType2/SummaryMenuButtonsType2";
import React from "react";
export default class AppointmentStore {
    constructor() {
        this._types = [
            // {id: 1, name: 'Усі повідомлення'},
            // {id: 2, name: 'Потенційні пацієнти'},
            // {id: 3, name: 'Рекрутинг'},
            // {id: 4, name: 'Партнерство'},
            // {id: 5, name: 'Спонсорство'},
            // {id: 6, name: 'Інше'},
            // {id: 7, name: 'Актуальні вакансії'},
            // {id: 8, name: 'Розсилка'}
        ]
        this._activity = [
            // {id: 1, name: 'Важливі'},
            // {id: 2, name: 'Надіслані'},
            // {id: 3, name: 'Заблоковані'},
        ]
         this._appointments = [
            {id: 1, avatar: "#", name: "Andrea Garsia", date: "26.09.2024", dateTime:"13:00", nameDoctor: "Ім'я Прізвище", address: "22869 youkalemene, halupasheta 18A", state: "Заплановано"},
            {id: 2, avatar: "#", name: "Andrea Garsia", date: "26.09.2024", dateTime:"13:00", nameDoctor: "Ім'я Прізвище", address: "22869 youkalemene, halupasheta 18A", state: "Заплановано"},
            {id: 3, avatar: "#", name: "Andrea Garsia", date: "26.09.2024", dateTime:"13:00", nameDoctor: "Ім'я Прізвище", address: "22869 youkalemene, halupasheta 18A", state: "Заплановано"},
            {id: 4, avatar: "#", name: "Andrea Garsia", date: "26.09.2024", dateTime:"13:00", nameDoctor: "Ім'я Прізвище", address: "22869 youkalemene, halupasheta 18A", state: "Заплановано"},
            {id: 5, avatar: "#", name: "Andrea Garsia", date: "26.09.2024", dateTime:"13:00", nameDoctor: "Ім'я Прізвище", address: "22869 youkalemene, halupasheta 18A", state: "Заплановано"},
        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setActivity(activity) {
        this._activity = activity
    }



}