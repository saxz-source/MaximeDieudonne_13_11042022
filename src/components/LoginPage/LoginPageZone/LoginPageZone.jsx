import LoginZone from "../LoginZone/LoginZone";
import "./loginPageZone.css";

/** @returns the main section of the login page */
const LoginPageZone = () => {
    return (
        <main className="main bg-dark">
            <LoginZone />
        </main>
    );
};

export default LoginPageZone;
