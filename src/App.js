import './App.css';
import Cursor from "./pages/Design/UI/Cursor/Cursor";
import ProtezPage from "./pages/Design/ProtezPage/ProtezPage";
import AboutUsPage from "./pages/Design/AboutUsPage/AboutUsPage";
import TeamPage from "./pages/Design/TeamPage/TeamPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ServicesPage from "./pages/Design/ServicesPage/ServicesPage";
import React, {useContext, useEffect} from "react";
import Login from "./pages/Design/LoginPage/components/Login/Login";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import MainPage from "./pages/Design/MainPage/MainPage";

function App() {

    const {user} = useContext(Context);
    useEffect(() => {
        if(localStorage.getItem('token')){
            user.checkAuth();

        }
    }, []);


    return (
        <div className="App">
            <Cursor></Cursor>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/protezPage"} element={<ProtezPage/>}/>
                    <Route path={"/teamPage"} element={<TeamPage/>}/>
                    <Route path={"/aboutUsPage"} element={<AboutUsPage/>}/>
                    <Route path={"/servicesPage"} element={<ServicesPage/>} />
                    <Route path={"/login"} element={<Login/>} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default observer(App);
