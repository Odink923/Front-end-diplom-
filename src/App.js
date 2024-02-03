import './App.css';
import MainPage from "./pages/MainPage";
import AboutUs from "./components/mainpage/aboutUs/AboutUs"
import Stats from "./components/aboutuspage/Stats/Stats";
import Invitation from "./components/aboutuspage/Invitation/Invitation";
import Profile from "./components/protezpage/profile/Profile";
import Leader from "./components/teampage/Leader/Leader";
import Logo from "./components/mainpage/Logo/Logo";
import Protezreview from "./components/blogpage/blogstorypage/protezreview/protezreview";
import Romanlundovbio from "./components/blogpage/UI/romanlundovbio/romanlundovbio";
import AboutUsMedia from "./components/blogpage/blognews/AboutUsMedia/AboutUsMedia";

function App() {

  return (
    <div className="App">
        <AboutUsMedia></AboutUsMedia>
        <AboutUs></AboutUs>
    </div>
  );
}

export default App;
