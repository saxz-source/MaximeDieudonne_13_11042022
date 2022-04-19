import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPageZone from "../../components/LoginPage/LoginPageZone/LoginPageZone";
import Header from "../../layers/Header/Header";

const LoginPage = ({ isLogged }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged === true) {
            navigate("/profile");
        }
    }, [isLogged]);

    return (
        <>
            <Header isLogged={isLogged} />
            <LoginPageZone isLogged={isLogged} />
        </>
    );
};

export default LoginPage;
