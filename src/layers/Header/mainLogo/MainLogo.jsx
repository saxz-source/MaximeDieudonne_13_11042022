import "./mainLogo.css";
import argentBankLogo from "../../../assets/argentBankLogo.png"

const MainLogo = () => {
    return (
        <>
            <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </>
    );
};

export default MainLogo;
