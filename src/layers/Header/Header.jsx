import { Link } from "react-router-dom";
import "./header.css";
import MainLogo from "./mainLogo/MainLogo";
const Header = () => {
    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to={"/"}>
                <MainLogo />
            </Link>
            <div>
                <Link className="main-nav-item" to={"/login"}>
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
};

export default Header;
