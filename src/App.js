import './App.css';
import Cursor from "./components/Cursor/Cursor";
import ProtezPage from "./pages/ProtezPage/ProtezPage";
import MainPage from "./pages/MainPage/MainPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
// import {ParallaxProvider} from "react-scroll-parallax";
// import ServicesPage from "./pages/ServicesPage/ServicesPage";
// import BlogPage from "./pages/BlogPage/BlogPage";
// import WriteToUs from "./pages/MainPage/components/WriteToUs/WriteToUs";
// import Footerr from "./components/Footer/Footerr";
import React from "react";
// import BlogArticlePage from "./pages/BlogArticlePage/BlogArticlePage"



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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
