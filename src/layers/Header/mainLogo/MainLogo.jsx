import "./mainLogo.css";
import argentBankLogo from "../../../assets/argentBankLogo.png";
import { Link } from "react-router-dom";

const MainLogo = () => {
    return (
        <Link className="main-nav-logo" to={"/"}>
            <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    );
};

export default MainLogo;
