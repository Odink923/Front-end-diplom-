import './App.css';
import Cursor from "./components/UI/Cursor/Cursor";
import ProtezPage from "./pages/ProtezPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import TeamPage from "./pages/TeamPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {ParallaxProvider} from "react-scroll-parallax";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import WriteToUs from "./components/mainpage/WriteToUs/WriteToUs";
import Footerr from "./components/UI/Footer/Footerr";
import React from "react";
import BlogPageNews from "./pages/BlogPageNews";


function App() {

    return (
        <div className="App">
            <Cursor></Cursor>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<BlogPageNews/>}/>
                    <Route path={"/protezPage"} element={<ProtezPage/>}/>
                    <Route path={"/teamPage"} element={<TeamPage/>}/>
                    <Route path={"/aboutUsPage"} element={<AboutUsPage/>}/>
                    <Route path={"/servicesPage"} element={<ServicesPage/>} />
                </Routes>
            </BrowserRouter>
            <WriteToUs></WriteToUs>
            <Footerr></Footerr>
        </div>
    );
}

export default App;
