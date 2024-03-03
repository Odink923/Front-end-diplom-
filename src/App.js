import './App.css';
import Cursor from "./components/Cursor/Cursor";
import ProtezPage from "./pages/Design/ProtezPage/ProtezPage";
import MainPage from "./pages/Design/MainPage/MainPage";
import AboutUsPage from "./pages/Design/AboutUsPage/AboutUsPage";
import TeamPage from "./pages/Design/TeamPage/TeamPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import ServicesPage from "./pages/Design/ServicesPage/ServicesPage";
import React from "react";
import BlogPage from "./pages/Design/BlogPage/BlogPage";
import BlogArticlePage from "./pages/Design/BlogArticlePage/BlogArticlePage";
import BlogArticlesPage from "./pages/Design/BlogArticlesPage/BlogArticlesPage";



function App() {

    return (
        <div className="App">
            <Cursor></Cursor>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<BlogArticlesPage/>}/>
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
