import './App.css';
import Cursor from "./pages/Design/UI/Cursor/Cursor";
import ProtezPage from "./pages/Design/ProtezPage/ProtezPage";
import AboutUsPage from "./pages/Design/AboutUsPage/AboutUsPage";
import TeamPage from "./pages/Design/TeamPage/TeamPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ServicesPage from "./pages/Design/ServicesPage/ServicesPage";
import React from "react";
import BlogPageNews from "./pages/Design/BlogPageNews/BlogPageNews";
import BlogHistoryPage from "./pages/Design/BlogHistoryPage/BlogHistoryPage";
import Faq from "./pages/Design/Faq/Faq";
import MainPage from "./pages/Design/MainPage/MainPage";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Design/LoginPage/components/Login/Login";

function App() {

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

export default App;
