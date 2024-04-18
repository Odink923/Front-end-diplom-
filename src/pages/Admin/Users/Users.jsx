import React from 'react';
import classes from './Users.module.css';
import ElementUser from '../UI/Elements/ElementUser/ElementUser';


const Users = ({visit}) => {

    const users = [
        {avatar: "#", name: "Andrea Garsia", mail: "popapisyachleeen@gmail.com", phone: "+380 50 709 72 76", address: "22869 youkalemene, halupasheta 18A" },
        {avatar: "#", name: "Andrea Garsia", mail: "popapisyachleeen@gmail.com", phone: "+380 50 709 72 76", address: "22869 youkalemene, halupasheta 18A" },
        {avatar: "#", name: "Andrea Garsia", mail: "popapisyachleeen@gmail.com", phone: "+380 50 709 72 76", address: "22869 youkalemene, halupasheta 18A" },
        {avatar: "#", name: "Andrea Gaa", mail: "popapisyachleeen@gmail.cum", phone: "+380 50 709 72 76", address: "22869 youkalemene, halupasheta 18A" },
        {avatar: "#", name: "Andrea Garsia", mail: "popapisyachleeen@gmail.com", phone: "+380 50 709 72 76", address: "22869 youkalemene, halupasheta 18A" },
    ]

    return (
        <div className={classes.usersListContainer}>
            {users.map((user) => (
                <ElementUser visit={visit} name={user.name} mail={user.mail} phone={user.phone} address={user.address}></ElementUser>
            ))}
        </div>
    );
};

export default Users;