import './App.css';
import Cursor from "./components/UI/Cursor/Cursor";
import ProtezPage from "./pages/ProtezPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import TeamPage from "./pages/TeamPage";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {ParallaxProvider} from "react-scroll-parallax";
import ServicesPage from "./pages/ServicesPage";


function App() {

    return (
        <div className="App">
            <Cursor></Cursor>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<ServicesPage/>}/>
                    <Route path={"/protezPage"} element={<ProtezPage/>}/>
                    <Route path={"/teamPage"} element={<TeamPage/>}/>
                    <Route path={"/aboutUsPage"} element={<AboutUsPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
