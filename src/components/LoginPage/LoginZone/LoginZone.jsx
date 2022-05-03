import LoginForm from "../LoginForm/LoginForm";
import "./loginZone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
/** @returns the login block where is displayed the log in form */
const LoginZone = () => {
    return (
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon "/>
            <h1>Sign In</h1>
            <LoginForm />
        </section>
    );
};

export default LoginZone;
