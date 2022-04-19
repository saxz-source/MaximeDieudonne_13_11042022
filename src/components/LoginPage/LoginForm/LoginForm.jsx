import { useState } from "react";
import { logIn } from "../../../API/APICalls";
import "./loginForm.css";
import { useDispatch } from "react-redux";
import * as userAction from "../../../features/user.slice";

/** @returns the login form */
const LoginForm = () => {
    const dispatch = useDispatch();

    /** The username from form @type {string} */
    const [userName, setUserName] = useState("");
    /** The password from form @type {string} */
    const [password, setPassword] = useState("");
    /** The checkbox "remember me" status from form @type {boolean} */
    const [rememberMe, setRememberMe] = useState("");
    /** The array of form errors @type {{userNameError:boolean, passwordError:boolean}} */
    const [formErrors, setFormErrors] = useState({
        userNameError: false,
        passwordError: false,
    });

    //  const navigate = useNavigate()

    /**
     * Save the value written in the user name field
     * @param {React.ChangeEvent<HTMLInputElement>} e
     * @returns {void}
     */
    const handleUsername = (e) => setUserName(e.target.value);
    /**
     * Save the value written in the password field
     * @param {React.ChangeEvent<HTMLInputElement>} e
     * @returns {void}
     */
    const handlePassword = (e) => setPassword(e.target.value);
    /**
     * Save the value of the check box
     * @param {React.ChangeEvent<HTMLInputElement>} e
     * @returns {void}
     */
    const handleRememberMe = (e) => setRememberMe(e.target.value);

    /**
     * Create the payload with user informations and and send it to server
     * @param {*} e the click event
     * @returns {void}
     */
    const handleForm = (e) => {
        e.preventDefault();

        if (!userName || !password) {
            return;
        }

        const payload = {
            email: userName,
            password: password,
        };
        logIn(payload).then((res) => {
            dispatch(userAction.updateUserConnexion(res));
        });
    };

    return (
        <form>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    onChange={handleUsername}
                    value={userName}
                    minLength={1}
                />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={handlePassword}
                    value={password}
                    minLength={1}
                />
            </div>
            <div className="input-remember">
                <input
                    type="checkbox"
                    id="remember-me"
                    onChange={handleRememberMe}
                    value={rememberMe}
                />
                <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button" onClick={handleForm}>
                Sign In
            </button>
        </form>
    );
};

export default LoginForm;
