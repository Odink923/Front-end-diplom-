import React, {useContext, useState} from 'react';
import classes from './Login.module.css'
import Navbar from "../../../UI/Managament/Navbar/Navbar";
import DarkButton from "../../../UI/Buttons/DarkButton/DarkButton";
import {Context} from "../../../../../index";
import {useLocation, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {login} from "../../../../../http/userAPI";

const Login = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            data = await login(email, password);
            user.setUser(user)
            user.setIsAuth(true)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    // const checkLogin=()=>{
    //     user.login(email,password)
    //
    // }

    return (
        <div className={classes.box}>
            <div className={classes.rectangle}>
                <Navbar></Navbar>
                <div className={classes.login}>
                    <div  className={classes.frameScreen}>
                        <div className={classes.div}>
                            <div>
                                <input placeholder="Логін*" className={classes.formInput} onChange={e => setEmail(e.target.value)}
                                       value={email}
                                       type="text"/>
                            </div>
                            <div>
                                <input placeholder="Пароль*" className={classes.formInput} type="password"
                                       onChange={e => setPassword(e.target.value)}
                                       value={password}/>
                            </div>
                        </div>
                        <div className={classes.frame3}>
                            <div className={classes.textWrapper3}>Забули пароль?</div>

                            { user.isAuth ?
                                        navigate('/') :
                                            <DarkButton onClick={click} property1="Увійти"/>

                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Login);
