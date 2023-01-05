import {MoonIcon, SunIcon, ThreeBarsIcon, XIcon} from "@primer/octicons-react";
import useThemeSelector from "../../hooks/useThemeSelector";
import logo from "../../assets/Logo.svg";
import './styles.css';
import {useState} from "react";

function Navbar() {
    const { theme, setTheme } = useThemeSelector();
    const [menuVisible, setMenuVisible] = useState(false);
    const themeSelectorHandler = () => setTheme((prevState) => prevState === "dark" ? "light" : "dark");
    const menuVisibleHandler = () => setMenuVisible((prevState) => !prevState);

    return (
        <div className={`navbar-container ${menuVisible && "active"}`}>
            <img src={logo} alt="logo" />
            <div className="navigation">
                <img src={logo} alt="logo" />
                <a href="#null" rel="noreferrer">Introduction</a>
                <a href="#null" rel="noreferrer">About</a>
                <a href="#null" rel="noreferrer">Experience</a>
                <a href="#null" rel="noreferrer">Works</a>
                <div className="theme-selector" onClick={themeSelectorHandler}>
                    { theme === "dark" ? <SunIcon size={16} fill="#ffc400" /> : <MoonIcon size={16} fill="#5200ff" /> }
                </div>
            </div>
            <div className="toggle-navigation"
                 style={window.screen.width >= 768 ? { display: "none"} : { display: "block" }}
                 onClick={menuVisibleHandler} >
                { menuVisible ?
                    <XIcon size={16} fill={theme === "dark" ? "#ececec" : "#090909"} /> :
                    <ThreeBarsIcon size={16} fill={theme === "dark" ? "#ececec" : "#090909"} /> }
            </div>
        </div>
    );
}

export default Navbar;