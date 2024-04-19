import './App.css';
import ProtezPage from "./pages/Design/ProtezPage/ProtezPage";
import AboutUsPage from "./pages/Design/AboutUsPage/AboutUsPage";
import TeamPage from "./pages/Design/TeamPage/TeamPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ServicesPage from "./pages/Design/ServicesPage/ServicesPage";
import React from "react";
import BlogPageNews from "./pages/Design/BlogPageNews/BlogPageNews";
import BlogHistoryPage from "./pages/Design/BlogHistoryPage/BlogHistoryPage";
import Faq from "./pages/Design/Faq/Faq";
import Cursor from "./pages/Design/UI/Cursor/Cursor";
import MainPage from "./pages/Design/MainPage/MainPage";

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
                </Routes>
            </BrowserRouter>

        </div>
    );


}

export default App;
