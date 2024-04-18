import './App.css';
import Cursor from "./pages/Design/UI/Cursor/Cursor";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import AppRouter from "./router/AppRouter";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";

function App() {

    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    return (
        <div className="App">
            <Cursor></Cursor>
            <BrowserRouter>
                <AppRouter></AppRouter>
            </BrowserRouter>

        </div>
    );
}

export default observer(App);
