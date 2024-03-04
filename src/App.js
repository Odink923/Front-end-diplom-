import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {ParallaxProvider} from "react-scroll-parallax";
import Cursor from "./pages/Design/UI/Cursor/Cursor";
import ProtezPage from "./pages/Design/protezpage/ProtezPage";
import MainPage from "./pages/Design/mainpage/MainPage";
import AboutUsPage from "./pages/Design/aboutuspage/AboutUsPage";
import TeamPage from "./pages/Design/teampage/TeamPage";
// import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
// import {ParallaxProvider} from "react-scroll-parallax";
import ServicesPage from "./pages/Design/servicespage/ServicesPage";
import Lifewithprotez from "./pages/Design/blogpage/blogstorysuccess/lifewithprotez/lifewithprotez";
import AboutUsMedia from './pages/Design/blogpage/blognews/AboutUsMedia/AboutUsMedia';
import AboutUs from './pages/Design/mainpage/aboutUs/AboutUs';
// import InboxMessagesList from './components/Admin/inbox/InboxMessagesList';
import CustomButton from './pages/Design/UI/Buttons/CustomButton/CustomButton'
import TeamOrService from "./pages/Design/UI/Management/TeamOrService/TeamOrService";
import Invitation from "./pages/Design/aboutuspage/Invitation/Invitation";


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
