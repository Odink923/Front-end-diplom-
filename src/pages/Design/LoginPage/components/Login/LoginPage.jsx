import React, {useState} from 'react';
import classes from './Login.module.css'
import Navbar from "../../../UI/Managament/Navbar/Navbar";
import DarkButton from "../../../UI/Buttons/DarkButton/DarkButton";
 import axios from "axios";
import {useNavigate} from 'react-router-dom';


const LoginPage = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
    const navigate = useNavigate ();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7038/api/user/Login', { "Name":`${username}`, "Password":`${password}` });
            console.log('Response from server:', response.data);
            // Обробляйте отриману відповідь від сервера тут
            navigate('/');
        } catch (error) {
            console.error('Error:', error);
            // Обробляйте помилки тут
            setUsername(''); // присвоїти порожній рядок
            setPassword('');
        }


    };

    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>
                <Navbar></Navbar>
                <div className={classes.login}>
                    <div  className={classes.frameScreen}>
                        <div className={classes.div}>
                            <div>
                                <input placeholder="Логін*" className={classes.formInput} value={username}  onChange={handleUsernameChange}/>
                            </div>
                            <div>
                                <input placeholder="Пароль*" className={classes.formInput} type="password" value={password} onChange={handlePasswordChange}/>
                            </div>
                        </div>
                        <div className={classes.frame3}>
                            <div className={classes.textWrapper3}>Забули пароль?</div>

                            <DarkButton  onClick={handleSubmit} property1="Увійти"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
