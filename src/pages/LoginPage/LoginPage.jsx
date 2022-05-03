import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginPageZone from "../../components/LoginPage/LoginPageZone/LoginPageZone";
import PropTypes from "prop-types";

/** @returns the login page */
const LoginPage = ({ isLogged }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged === true) {
            navigate("/profile");
        }
    }, [isLogged]);

    return (
        <>
            <LoginPageZone isLogged={isLogged} />
        </>
    );
};

LoginPage.propTypes = {
    isLogged: PropTypes.bool.isRequired,
};

export default LoginPage;
