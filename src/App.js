import './App.css';
import Cursor from "./components/Design/UI/Cursor/Cursor";
import ProtezPage from "./pages/ProtezPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import TeamPage from "./pages/TeamPage";
// import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
// import {ParallaxProvider} from "react-scroll-parallax";
import ServicesPage from "./pages/ServicesPage";
import Lifewithprotez from "./components/Design/blogpage/blogstorysuccess/lifewithprotez/lifewithprotez";
import AboutUsMedia from './components/Design/blogpage/blognews/AboutUsMedia/AboutUsMedia';
import AboutUs from './components/Design/mainpage/aboutUs/AboutUs';
// import InboxMessagesList from './components/Admin/inbox/InboxMessagesList';
import Admin from './components/Admin/Admin';
import CustomButton from '../src/components/Design/UI/Buttons/CustomButton/CustomButton'
import TeamOrService from "./components/Design/UI/Management/TeamOrService/TeamOrService";


function App() {

    return (
        <div className="App">
            <Cursor></Cursor>
            <Admin></Admin>
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route path={"/"} element={<ServicesPage/>}/>*/}
            {/*        <Route path={"/protezPage"} element={<ProtezPage/>}/>*/}
            {/*        <Route path={"/teamPage"} element={<TeamPage/>}/>*/}
            {/*        <Route path={"/aboutUsPage"} element={<AboutUsPage/>}/>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}
        </div>
    );
}

export default App;
