import React, {useContext} from 'react';
import classes from './Users.module.css';
import ElementUser from '../UI/Elements/ElementUser/ElementUser';
import {Context} from "../../../index";
import ElementVisit from "../UI/Elements/ElementVisit/ElementVisit";
import {NavLink} from "react-router-dom";



const Users = ({visit}) => {
    const {appointment} = useContext(Context);
    const users = [
        {avatar: "#", name: "Andrea Garsia", mail: "popapisyachleeen@gmail.com", phone: "+380 50 709 72 76", address: "22869 youkalemene, halupasheta 18A" },
        {avatar: "#", name: "Andrea Garsia", mail: "popapisyachleeen@gmail.com", phone: "+380 50 709 72 76", address: "22869 youkalemene, halupasheta 18A" },
        {avatar: "#", name: "Andrea Garsia", mail: "popapisyachleeen@gmail.com", phone: "+380 50 709 72 76", address: "22869 youkalemene, halupasheta 18A" },
        {avatar: "#", name: "Andrea Gaa", mail: "popapisyachleeen@gmail.cum", phone: "+380 50 709 72 76", address: "22869 youkalemene, halupasheta 18A" },
        {avatar: "#", name: "Andrea Garsia", mail: "popapisyachleeen@gmail.com", phone: "+380 50 709 72 76", address: "22869 youkalemene, halupasheta 18A" },
    ]

    return (
        <div className={classes.usersListContainer}>


            {
                visit?
                    <div >
                <span className={classes.addVisit}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1915_4456)">
                        <path d="M15 0C6.7285 0 0 6.7285 0 15C0 23.2715 6.7285 30 15 30C23.2715 30 30 23.2703 30 15C30 6.72967 23.2715 0 15 0ZM15 27.6762C8.01123 27.6762 2.32377 21.9899 2.32377 15C2.32377 8.01006 8.01123 2.32377 15 2.32377C21.9888 2.32377 27.6762 8.01006 27.6762 15C27.6762 21.9899 21.9899 27.6762 15 27.6762Z" fill="#546EF8"/>
                        <path d="M20.8096 13.7338H16.1621V9.08623C16.1621 8.44486 15.6427 7.92432 15.0002 7.92432C14.3576 7.92432 13.8383 8.44486 13.8383 9.08623V13.7338H9.19072C8.54818 13.7338 8.02881 14.2543 8.02881 14.8957C8.02881 15.5371 8.54818 16.0576 9.19072 16.0576H13.8383V20.7051C13.8383 21.3465 14.3576 21.8671 15.0002 21.8671C15.6427 21.8671 16.1621 21.3465 16.1621 20.7051V16.0576H20.8096C21.4522 16.0576 21.9715 15.5371 21.9715 14.8957C21.9715 14.2543 21.4522 13.7338 20.8096 13.7338Z" fill="#546EF8"/>
                    </g>
                        <defs>
                        <clipPath id="clip0_1915_4456">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                    Запланувати візит
                   </span>
                    </div>: ""
            }
            {
                visit?

                    appointment._appointments.map((appointment) => (

                    <ElementVisit name={appointment.name}
                                  date={appointment.date}
                                  dateTime={appointment.dateTime}
                                  nameDoctor={appointment.nameDoctor}
                                  address={appointment.address}></ElementVisit>
            )): users.map((user) => (
                        <ElementUser name={user.name} mail={user.mail} phone={user.phone} address={user.address}></ElementUser>
                    ))


            }
        </div>
    );
};

export default Users;